import React from "react";
import styles from "./About.module.css";
import {getImageUrl} from "../../utils";
 export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/download.png")}
          alt="I am showing my about"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />

            <div className={styles.aboutItemText}> 
              <h3>Frontend Developer</h3>
              <p>
                Front-end development creates user interfaces, emphasizing
                design, interactivity, and user experience to enhance digital
                interactions on websites or applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />

            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                In backend development, I manage server-side operations,
                databases, and APIs, ensuring efficient functionality and data
                handling for applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="database icon" />

            <div className={styles.aboutItemText}>
              <h3>SQL Developer</h3>
              <p>
                As a SQL developer, I specialize in database management,
                querying, and optimizing database performance for efficient data
                storage and retrieval.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
