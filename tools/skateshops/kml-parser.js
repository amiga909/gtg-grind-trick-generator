const http = require("http");
const fs = require('fs');
const xml2js = require('xml2js');
const axios = require('axios');
const util = require('util');
const { exec } = require('child_process');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const run = async function () {
  const parser = new xml2js.Parser();
  const sourceFile = '/aggressive-brands.kml' // '/result-backlinks.kml'
  const data = fs.readFileSync(__dirname + '/result-backlinks.kml');
  let parsed = await parser.parseStringPromise(data);
  //const processed = await processShops(parsed);
  parseHtmlFiles(parsed)
  //  dataFetcha(parsed)
  //const processed = await migrateShops(parsed);

  //result = sortShops(parsed)
  //console.log(result.kml.Document[0].Placemark)
  //writeFile(result)

  return false; 

  const placemarks = parsed.kml.Document[0].Placemark

  console.log(placemarks[124])
  for (let v of placemarks) {
    if (parseInt(v.ahrefsRank[0], 10) === 0) {
      v.ahrefsRank = [2147483600];
    }

    v.styleUrl = [getStyleId(v.ahrefsRank[0])];

    let obj = [
      {
        'Data': {
          $: {
            'name': 'URL'
          },
          value: v.ExtendedData[0].Data[0].value[0]
        }
      },
      {
        'Data': {
          $: {
            'name': 'Domain Rank'
          },
          value: v.ahrefsRank[0]
        }
      },
      {
        'Data': {
          $: {
            'name': 'Traffic Value'
          },
          value: v.trafficValue ? v.trafficValue[0] : 'n.a'
        }
      },
      {
        'Data': {
          $: {
            'name': 'Backlinks'
          },
          value: v.backlinkCount ? v.backlinkCount[0] : 'n.a'
        }
      },
      {
        'Data': {
          $: {
            'name': 'URL Rating'
          },
          value: v.urlRating ? v.urlRating[0] : 'n.a'
        }
      },
      {
        'Data': {
          $: {
            'name': 'Domain Rating'
          },
          value: v.domainRating ? v.domainRating[0] : 'n.a'
        }
      },
      {
        'Data': {
          $: {
            'name': 'Referring Domains'
          },
          value: v.backlinkDomains ? v.backlinkDomains[0] : 'n.a'
        }
      },

    ]






    v.ExtendedData = [obj]

  }
  parsed = sortShops(parsed)
  const placemarks2 = parsed.kml.Document[0].Placemark
  for (let v of placemarks2) {

    console.log(v.ahrefsRank);
  }


  writeFile(parsed)
  console.log("done")
}

// run once
const migrateShops = function (result) {
  const placemarks = result.kml.Document[0].Placemark
  for (let v of placemarks) {

    let data = {
      '$': { name: 'Backlinks' },
      value: v.backlinkCount
    }
    data = { "Data": data };
    v.ExtendedData.push(data)

  }

  for (let v of placemarks) {
    v.styleUrl = [getStyleId(v.backlinkCount[0])];
    // console.log(util.inspect(v.ExtendedData, { showHidden: false, depth: 5 }))
  }
  result = sortShops(result)

  writeFile(result)
}

const dataFetcha = (result) => {
  let placemarks = result.kml.Document[0].Placemark
  let i = 0;
  for (let v of placemarks) {
    i++;
    if (i > 139 && i < 2000) {
      let shopUrl = v.ExtendedData[0].Data[0].value[0];
      const domain = getDomain(shopUrl)
      console.log("https://ahrefs.com/site-explorer/overview/v2/subdomains/live?target=" + domain)
      //  await parseHtmlFile(domain)
      /* var yourscript = exec('sh ./tools/skateshops/osa.sh '+ shopUrl,
         (error, stdout, stderr) => {
             console.log(stdout);
             console.log(stderr);
             if (error !== null) {
                 console.log(`exec error: ${error}`);
             }
         });*/

    }
  }

}



const parseHtmlFiles = async function (result) {

  let placemarks = result.kml.Document[0].Placemark
  let i = 0;
  for (let v of placemarks) {
    //i++;if(i < 3) {
    let shopUrl = v.ExtendedData[0].Data[0].value[0];
    const domain = getDomain(shopUrl)
    const ahrefsData = await parseHtmlFile(domain);



    if (ahrefsData) {
      v.ahrefsRank = [ahrefsData.rank]
      v.trafficValue = [ahrefsData.trafficValue]
      v.backlinkDomains = [ahrefsData.backlinkDomains]
      v.urlRating = [ahrefsData.urlRating]
      v.domainRating = [ahrefsData.domainRating]
      v.backlinkCount = ahrefsData.backlinks;

      v.styleUrl = [getStyleId(v.rank)];
    }
    else {
      console.log("missing   ahrefsData   ", domain)
    }

  }
  //}
  result = sortShops(result)
  //console.log(result.kml.Document[0].Placemark)
  writeFile(result)
}

const parseHtmlFile = async function (domain) {
  const files = fs.readdirSync(__dirname + "/ahrefs/");
  for (file of files) {


    if (file.includes(domain)) {
      //const dom = await JSDOM.fromFile(__dirname + "/ahrefs/" + file, {}); 
      return JSDOM.fromFile(__dirname + "/ahrefs/" + file, {}).then(dom => {
        // console.log(dom.serialize());
        const document = dom.window.document;

        console.log("processing dom.." + domain)
        let rank, trafficValue, backlinks, backlinkDomains, urlRating, domainRating;
        try {
          rank = document.querySelector("#topAhrefsRank").innerHTML;
          rank = rank.replace(/,/g, "")
          rank = parseInt(rank, 10)

          trafficValue = document.querySelector("#numberOfOrganicTrafficCost").innerHTML || '';
          backlinks = document.querySelector("#numberOfRefPages a").innerHTML || '';
          backlinkDomains = document.querySelector("#numberOfRefDomains a").innerHTML || '';
          urlRating = document.querySelector("#UrlRatingContainer span").innerHTML || '';
          domainRating = document.querySelector("#DomainRatingContainer span").innerHTML || '';
        }
        catch (err) { }
        return {
          rank: rank || 0,
          trafficValue: trafficValue || "",
          backlinks: backlinks || "",
          backlinkDomains: backlinkDomains || "",
          urlRating: urlRating || "",
          domainRating: domainRating || "",
        };
      });
    }
  };

}
const addDataNode = (val) => {
  const data = {
    '$': { name: 'Backlinks' },
    value: [val]
  }
  return { "Data": data };
}

const sortShops = (result) => {
  let placemarks = result.kml.Document[0].Placemark

  placemarks.sort((a, b) => {

    return ((parseInt(a.ahrefsRank[0], 10) > parseInt(b.ahrefsRank[0], 10)) ? 1 : -1)
  });


  return result;
}
const getStyleId = (rating) => {
  rating = parseInt(rating, 10);
  rating = Math.floor(rating / 1000);
  let id = "#0";
  if (rating < 2882) {
    id = "#2";
  }
  else if (rating < 62898) {
    id = "#1";
  }
  else {
    id = "#0";
  }
  return id;
}

const processShops = async function (result) {
  const placemarks = result.kml.Document[0].Placemark
  let i = 0;
  for (let v of placemarks) {
    i++;
    const hasDescription = v.description && v.description[0] !== ""
    v.description = hasDescription ? v.description : v.address;


    // write each fetch result due to Google rate limitatin
    if (!v.backlinkCount) {
      v.backlinkCount = await getBackLinkCount(v);
      v.ExtendedData[1].Data[0].value[0] = v.backlinkCount;
      writeFile(result)
    }
    if (v.backlinkCount) {
      v.styleUrl = [getStyleId(v.rating[0])];
    }

  }
  result = sortShops(result)

  writeFile(result)
  return result;
}

const getDomain = function (url) {
  let res = url;
  res = res.replace(/https:\/\//g, "")
  res = res.replace(/http:\/\//g, "")
  res = res.replace(/www\./g, "")
  res = res.replace(/\//g, "")
  res = encodeURI(res)
  return res;
}

// https://developers.google.com/custom-search/v1/reference/rest/v1/cse/list#request
// key: google-api-javascript-client  AIzaSyDk4cDi3vOfAs6YAhCSVfbg4aVI_Ag2BBk
const getBackLinkCount = async function (shop) {
  let shopUrl = shop.ExtendedData[0].Data[0].value[0];
  shopUrl = getDomain(shopUrl)
  const cx = "543afbfdba3002b23"
  const key = "AIzaSyDk4cDi3vOfAs6YAhCSVfbg4aVI_Ag2BBk"
  let url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=%22_SHOP_%22+-site%3A_SHOP_`
  //url = "https://www.google.com/search?q=%22_SHOP_%22+-site%3A_SHOP_"
  url = url.replace(/_SHOP_/g, shopUrl)
  console.log("wait 2s")
  await timeout(2000);
  let response = await axios.get(url)
  const count = response.data.searchInformation.totalResults

  console.log("fetched", shop.ExtendedData[0].Data[0].value[0], ": ", count)
  return count;
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function writeFile(result) {
  const builder = new xml2js.Builder();
  const xml = builder.buildObject(result);
  fs.writeFileSync(__dirname + '/result.kml', xml);
  console.log("write file done")
}


run()


http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(" ");
  })
  .listen(1338, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1338/');


/*

"nickelanddimela.com" -site:nickelanddimela.com


"rollingrock.ch" -site:rollingrock.ch 996
"ovskate.com" -site:ovskate.com 975
"aightgame.com" -site:aightgame.com  9

"locoskates.com" -site:locoskates.com   7’480
"grindhouse.eu" -site:grindhouse.eu 9000
roex.es 9500



"slickwillies.co.uk" -site:slickwillies.co.uk  6’900 / 75?
"wl33.com" -site:wl33.com  9
"aightgame.com" -site:aightgame.com  9


wl33.com .. too much!
sola: 500



"goroller.com.br" -site:goroller.com.br 657
"themgoods.com" -site:themgoods.com 6460
"thuroshop.com" -site:thuroshop.com 2000
"rollergrind360.com" -site:rollergrind360.com 2600


"asphaltbeach.com" -site:asphaltbeach.com 439
"skateworld.ro" -site:skateworld.ro  5’260
"shop-laced.com" -site:shop-laced.com 1000
"roces.com" -site:roces.com 10000
"straightjacket.bigcartel.com" -site:straightjacket.bigcartel.com 400
"skatepro.com" -site:skatepro.com 100'000


"rollerwarehouse.com" -site:rollerwarehouse.com  9’430
"xxxx" -site:xxxx
"facebook.com/alohabeach.surfshop/" -site:facebook.com
"warehouse-one.de" -site:warehouse-one.de

https://www.facebook.com/MaverickShopMexico

"jackroll.fr" -site:jackroll.fr
"facebook.com/MaverickShopMexico" -site:facebook.com
"facebook.com/patinesdlx" -site:facebook.com
"role.hr" -site:role.hr
"xxxx" -site:xxxx

https://slides.lt

"slides.lt" -site:slides.lt
"xxxx" -site:xxxx
"xxxx" -site:xxxx
"xxxx" -site:xxxx
"xxxx" -site:xxxx


 https://www.facebook.com/patinesdlx

/doblevdoble.com/es/ :


Little blade shop project

Can tell:
- Find blade shops near to you
- Which countries have a lot of blade shops
Was surprising for me UK looks very good here.
One explanation for this is skate shops in UK were always diversified and could survive this way.

countries with a high blade shop density.
Was surprising for me UK has the best blade shop per capita metric.


- Helps to identify shops that probably have a bigger sortiment.
- Sites with a very low backlink count might be less legit than sites with a high backlink count.


- Tech details for the number
Google Backlink metric:
Tells how many other sites link to that site
Tells how important that site is for Google


SEO analysis techniques
Domain Rating (DR) techniques
Shops like proskate.com offer a lot of goods, not only blade customers


If you want more details, feel free to ask.
It is just an experimental SEO metric.
Don't take it too serioulsy I wanted to extend my geographic blade shop analysis with a VERY rough qualitative metric.
If you are a shop owner and you feel I trashed your shop, I am happy to share my knowledge.
It does not say a shop is "bad", it just says how important a site might be in the context of Google searches.
Some shops don't bother about being visible on Google, it can be an indicator for a professional site Google ranking is important.
Well possible the "best" shop does not bother to be found on Google.
Does not mean a shhop with a low "x" is not legit.
It might point out a shop could invest more into SEO if the shop cares to perform well in the context of Google searches.
Personally, I think the most interesting stuff happens in the underground.
You can think of it as a metric how "mainstream" a shop is.


I am aware this is too techy but I don't care about people that don't know afor a FB group that is mainly about watching blade vids.

A few people appreciated my effort to share this, that's enough for me.
Happy to take constructive critic, happy to take reasons why this is bad.
Everybody can express their opinion, I like to focus on what looks like an informed opinion to me.


why it is bad.


*/