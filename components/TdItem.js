import React from "react";

export default function TdItem(sections) {
  let x = [];
  sections.map((section) => {
    let y = "";
    y = section.link
      ? `<tr valign="top">
                  <td valign="top">
                    <a href="${section.link}">
                      <img alt="${section.imgAlt}" border="0" height="auto" src="${section.imgSrc}" style="display: block;" width="600"/></a>
                  </td>
                </tr>`
      : `<tr valign="top">
                  <td valign="top">
                      <img alt="${section.imgAlt}" border="0" height="auto" src="${section.imgSrc}" style="display: block;" width="600"/>
                  </td>
          </tr>`;

    return x.push(y);
  });

  return x.join("\r\n");
}
