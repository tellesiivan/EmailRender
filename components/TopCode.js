import React from "react";

export default function TopCode() {
  const topHTML = ` <tr>
          <td align="center" style="font-family: verdana,geneva,sans-serif; font-size: 11px;" valign="middle">
            <strong>{% Dynamic_pre %}<br/><br/>{% web_view %}</strong> <br/><br/>
          </td>
        </tr>`;

  return topHTML;
}
