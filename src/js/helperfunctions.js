export const renderThumb = (imageUrl = "", bogLink = "") => {
  let html = "";
  let imageHtml = imageUrl
    ? `<img class="tricktionary_thumb_img" src="${imageUrl}"> </img>`
    : "";

  if (bogLink) {
    let linkContent =
      imageHtml === ""
        ? "<a href='http://skateyeg.com/bog/'>Book of Grinds</a>"
        : imageHtml;
    html = `<a href="${bogLink}" target="blank">${linkContent}</a>`;
  } else {
    html = imageHtml;
  }
  return html;
};

export const renderTableNoHeader = (rows = [[], []], color = "blue") => {
  let rowsHtml = rows.map((r) => {
    let tds = r.map((rr) => {
      return `<div class="cell cell--details-view"  > ${rr} </div>`;
    });
    return `<div class="row row--details-view"> ${tds.join("")}</div>`;
  });

  return ` 
    <div data-name="details-view" class="resp-table-wrapper resp-table-wrapper-details-view">
     
      <div class="resp-table">
        ${rowsHtml.join("")}
      </div>
     `;
};

export const renderTable = (
  title = "",
  headers = [],
  rows = [[], []],
  color = "blue"
) => {
  let headersHtml = headers.map((h) => {
    return `<div class="cell">${h}</div>`;
  });
  let headersContainer = headersHtml
    ? `<div class="row header ${color}">${headersHtml.join("")} </div> `
    : "";
  let rowsHtml = rows.map((r) => {
    let i = -1;
    let tds = r.map((rr) => {
      i = i + 1;
      return `<div class="cell" data-title="${headers[i]}"> ${rr} </div>`;
    });
    return `<div class="row"> ${tds.join("")}</div>`;
  });

  return ` 
    <div data-name="${title.replace(" ", "")}" class="resp-table-wrapper">
      <h3>${title}</h3>
      <div class="resp-table">
        ${headersContainer} 
        ${rowsHtml.join("")}
      </div>
     `;
};

export const addRowToTop = (rows = []) => {};
