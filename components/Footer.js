import React from "react";

export default function Footer() {
  const html = `              <tr>
                  <td align="center" bgcolor="#fff" style="font-family: verdana,geneva,sans-serif; font-size: 11px; color: #000;" valign="middle">
                    This email was sent to {{ email|default:'' }} by
                    <strong>berkshire revive</strong><br/><br/>44 E. Main Street, Ware, MA 01082<br/><br/>No longer want to receive these emails? {% unsubscribe %} or {% manage_preferences %}
                  </td>
                </tr>
                <tr>
                  <td align="center" bgcolor="#fff" style="font-family: verdana,geneva,sans-serif; font-size: 10px; color: #000; padding: 0px 15px 0px 15px;" valign="middle">{{ disclaimer ?? ''}}</>}
                    </td>
                </tr>
                <tr>
                  <td align="center" bgcolor="#fff" style="font-family: verdana,geneva,sans-serif; font-size: 11px;" valign="middle">
                    &nbsp;<br/><br/>
                  </td>
                </tr>`;

  return html;
}
