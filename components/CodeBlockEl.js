import { CopyBlock, dracula } from "react-code-blocks";
import TdItem from "./TdItem";
import TopCode from "./TopCode";
import Footer from "./Footer";

export default function CodeBlockEl({ sections, renderHandler }) {
  const items = TdItem(sections);
  const top = TopCode();
  const footer = Footer();

  const html = `<html>
  <body>
    <table align="center" bgcolor="#FFF" border="0" cellpadding="15" cellspacing="0" id="container" width="100%">
      <tbody>${top}     <tr>
          <td align="center" valign="top">
            <table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" class="wrapper" width="600">
              <tbody>        <!--<! 🔻🔻🔻🔻🔻 ======= ADDED SECTIONS : START ======= 🔻🔻🔻🔻   ---->
  ${items}    <!--<! 🔺🔺🔺🔺🔺🔺🔺🔺🔺 ========= ADDED SECTIONS : END  🔺🔺🔺🔺🔺🔺🔺🔺🔺 =======  ----></tbody>
            </table>
          </td>
        </tr>  ${footer}  </tbody></table>
  </body>
</html>`;

  return (
    <div className="codeBlockH">
      <button className="close" onClick={() => renderHandler(false)}>
        Close CodeBlock
      </button>
      <CopyBlock
        text={html}
        CodeBlock={true}
        theme={dracula}
        language="html"
        showLineNumbers={false}
        wrapLongLines={true}
        customStyle={{
          height: "100vh",
          overflow: "scroll",
        }}
      />
    </div>
  );
}
