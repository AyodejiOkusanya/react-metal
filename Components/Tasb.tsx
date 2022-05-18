import { useState } from "react";
import styles from "../styles/Tabs.module.css";

type Tab = {
  title: string;
  content: string;
  active: boolean;
};

type TabsProps = {
  tabs: Array<Tab>;
};

export const Tabs = ({ tabs }: TabsProps) => {
  const [tabsState, setTabsState] = useState(tabs);
  const handleClick = (title: string) => {
    console.log(`${title} clicked`);
    setTabsState((prevTabsState) =>
      prevTabsState.map((tab) => ({ ...tab, active: title === tab.title }))
    );
  };
  return (
    <div className={styles.tabs}>
      <div className={styles.tabHeadings}>
        {tabsState.map(({ title }) => (
          <button
            className={styles.tabButton}
            onClick={() => handleClick(title)}
            key={`${title}-heading`}
          >
            {title}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabsState.map(({ content, title, active }) => (
          <div key={title} className={`${active ? styles.active : ""}`}>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};
