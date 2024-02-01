import React from "react";
import styles from "./DbtCloud.module.css";

const DbtCloud = ({ heading, title, data, buttonText, borderWidth }) => {
  return (
    <div className={styles.wrapper} style={{ "--borderWidth": borderWidth }}>
      {" "}
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.infoWrapper}>
        <div className={styles.infoContainer}>
          {data.map((el, i) => (
            <div className={styles.box} key={i}>
              <p className={styles.infoTitle}>{el.title}</p>
              <p className={styles.info}>{el.info}</p>
            </div>
          ))}
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <button className={styles.button}>{buttonText}</button>
    </div>
  );
};

export default DbtCloud;
