import { CopyBlock, dracula } from "react-code-blocks";
import TdItem from "./TdItem";

export default function CodeBlockEl({ sections }) {
  const items = TdItem(sections);
  console.log(items);

  return (
    <div className="codeBlockH">
      <CopyBlock
        text={items}
        CodeBlock={true}
        theme={dracula}
        language="html"
        showLineNumbers={false}
        wrapLongLines={true}
        customStyle={{
          height: "100%",
          overflow: "scroll",
        }}
      />
    </div>
  );
}
