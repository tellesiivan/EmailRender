import { CopyBlock, dracula } from "react-code-blocks";

export default function CodeBlockEl() {
  const html = `<html>
  <body>
    <table align="center" bgcolor="#FFF" border="0" cellpadding="15" cellspacing="0" id="container" width="100%">
      <tbody>
        <tr>
          <td align="center" style="font-family: verdana,geneva,sans-serif; font-size: 11px;" valign="middle">            <strong>Candy-colored blankets and dessert-like sheets for drifting off to sleep<br/><br/>{% web_view %}</strong> <br/><br/>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">
            <table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" class="wrapper" width="600">
              <tbody>
                <tr valign="top">
                  <td valign="top">
                    <img alt="Berkshire Blanket &amp; Home Co" border="0" height="auto" src="https://d3k81ch9hvuctc.cloudfront.net/company/MFSvpq/images/82682d0c-e75a-4ec5-9e9a-eb0b2b68d3ab.jpeg" style="display: block;" width="600"/>
                  </td>
                </tr>
                <tr valign="top">
                  <td valign="top">                    <a href="https://berkshirerevive.com/collections/all?link=Spotlight">
                      <img alt="Curate Your Space " border="0" height="auto" src="https://d3k81ch9hvuctc.cloudfront.net/company/MFSvpq/images/aecc1950-b7d6-4465-a86b-839ac74dc6d5.jpeg" style="display: block;" width="600"/></a>
                  </td>
                </tr>
                <tr valign="top">
                  <td valign="top">                    <a href="https://berkshirerevive.com/collections/blankets/products/wynwood-organic-cotton-blanket?link=HeroImage">
                      <img alt="Curate Your Space " border="0" height="auto" src="https://d3k81ch9hvuctc.cloudfront.net/company/MFSvpq/images/fec2d7e5-e261-4a6a-b926-ead74298db72.gif" style="display: block;" width="600"/></a>
                  </td>
                </tr>
                <tr valign="top">
                  <td valign="top">                    <a href="https://berkshirerevive.com/collections/blankets/products/wynwood-organic-cotton-blanket?link=HeroButton">
                      <img alt="Curate Your Space " border="0" height="auto" src="https://d3k81ch9hvuctc.cloudfront.net/company/MFSvpq/images/ade2bf53-9f3d-4870-92c3-11e205781b4f.jpeg" style="display: block;" width="600"/></a>
                  </td>
                </tr>
                <tr valign="top">
                  <td valign="top">                    <a href="https://berkshirerevive.com/products/wynwood-recycled-microfleece-sheets">
                      <img alt="[Wynwood organic cotton blanket]" border="0" height="auto" src="https://d3k81ch9hvuctc.cloudfront.net/company/MFSvpq/images/f2278867-7209-46ef-8d0f-c49cb22eee75.jpeg" style="display: block;" width="600"/></a>
                  </td>
                </tr>


              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
      <br/><br/>
    </table>
  </body>
</html>`;

  console.log(html.match("test"));

  return (
    <div className="codeBlockH">
      <CopyBlock
        text={html}
        className="code_1"
        CodeBlock={true}
        theme={dracula}
        language="html"
        showLineNumbers={true}
        wrapLongLines={true}
        customStyle={{
          height: "100%",
          overflow: "scroll",
        }}
      />
    </div>
  );
}
