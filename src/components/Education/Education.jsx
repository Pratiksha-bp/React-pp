import React from "react";
import styles from "./Education.module.css";
import {getImageUrl} from "../../utils";
 export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("education/school2.png")}
          alt="my School picture"
          className={styles.educationImage}
        />
        <ul className={styles.educationItems}>
          <li className={styles.educationItem}>
            <div className={styles.educationItemText}> 
              <h3>BE (Information technology)</h3>
              <h5>Savitribai Phule Pune University</h5>
              <p>July 2019 - May 2023</p>
              <p>CGPA : 8.64</p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <div className={styles.educationItemText}>
              <h3>Senior Secondary (XII), Science</h3>
              <h5>Sardar G.G. high school Raver, Maharashtra</h5>
              <p>June 2018 - Mar 2019</p>
              <p>Percentage : 80.46</p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <div className={styles.educationItemText}>
              <h3>Secondary (X) </h3>
              <h5>K.S.A. high school Raver, Maharashtra</h5>
              <p>June 2016 - Mar 2017</p>
              <p>Percentage:95.20</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
