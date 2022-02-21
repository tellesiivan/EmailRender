import styles from "../styles/Home.module.css";
import ItemContainer from "../components/ItemContainer";
import AddDataForm from "../components/AddDataForm";
import CodeBlockEl from "../components/CodeBlockEl";
import { useState } from "react";

export default function Home() {
  const [sections, setSections] = useState(null);
  const [render, setRendered] = useState(false);

  function renderHandler(render) {
    setRendered(render);
  }

  function getValues(item) {
    let x = [];
    sections !== null ? x.push(item, ...sections) : x.push(item);
    setSections(x);
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.flexCol}>
          <div className={`${styles.half} ${styles.formS}`}>
            <AddDataForm getValues={getValues} />
          </div>
          <div className={`${styles.half} ${styles.right}`}>
            {render ? (
              <CodeBlockEl sections={sections} />
            ) : (
              <ItemContainer
                sections={sections}
                renderHandler={renderHandler}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
