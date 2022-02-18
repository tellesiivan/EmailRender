import styles from "../styles/Home.module.css";
import ItemContainer from "../components/ItemContainer";
import AddDataForm from "../components/AddDataForm";
import CodeBlockEl from "../components/CodeBlockEl";
import { useState } from "react";

export default function Home() {
  const [sections, setSections] = useState(null);

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
            <ItemContainer sections={sections} />
          </div>
        </div>
      </main>
    </div>
  );
}
