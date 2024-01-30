import React from "react";
import styles from "./CloudData.module.css";

const CloudData = ({ images, centerImage, title }) => {
  const calculatePosition = (index, totalImages, radius) => {
    const angle = (360 / totalImages) * index;
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };

  const circleSize = 250; // Set the desired size of the circular wrapper
  const radius = circleSize / 2;

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.container}>
        <div
          className={styles.cricleContainer}
          style={{ width: circleSize, height: circleSize, borderRadius: "50%" }}
        >
          <div className={styles.centerImage}>{centerImage}</div>
          <div className={styles.orbit}>
            <ul>
              {images.map((img, index) => {
                const { x, y } = calculatePosition(
                  index,
                  images.length,
                  radius
                );
                const transformStyle = {
                  transform: `translate(${x}px, ${y}px)`,
                };

                return (
                  <li key={index} style={transformStyle}>
                    <div className={[styles.imageContainer].join(" ")}>
                      <img src={img} alt="#" />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudData;
