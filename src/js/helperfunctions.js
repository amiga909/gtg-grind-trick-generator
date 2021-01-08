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
  }
  return html;
};

export const renderTable = (title = "", headers = [], rows = [[], []]) => {
  let headersHtml = headers.map((h) => {
    return `<div class="cell">${h}</div>`;
  });
  let rowsHtml = rows.map((r) => {
    let i = -1;
    let tds = r.map((rr) => {
      i = i + 1;
      return `<div class="cell" data-title="${headers[i]}"> ${rr} </div>`;
    });
    return `<div class="row"> ${tds.join("")}</div>`;
  });

  return ` 
    <div class="resp-table-wrapper">
      <h3>${title}</h3>
      <div class="resp-table">
        <div class="row header blue">${headersHtml.join("")} </div>
        ${rowsHtml.join("")}
      </div>
     `;
};
