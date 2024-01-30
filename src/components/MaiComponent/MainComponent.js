import React from "react";
import styles from "./MainComponent.module.css";
import CloudData from "../CloudData/CloudData";
import DbtCloud from "../DbtCloud/DbtCloud";

const MainComponent = ({ coludDataPlatform, dbtCloud }) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <CloudData {...coludDataPlatform} />
        <DbtCloud {...dbtCloud} />
      </div>
    </div>
  );
};

export default MainComponent;
