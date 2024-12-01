import React from "react";
import styles from "./Hero.module.css";

import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>  
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pratiksha...</h1>
        <p className={styles.description}>
          As a full-stack developer, I design and implement both front-end user
          interfaces and back-end operations, ensuring seamless functionality
          and user experience.
        </p>
        <a href="mailto:pratikshabpatil1@gmail.com" className={styles.contactBtn}>
          <h4>Contact Me</h4>
        </a>
      </div>
      <img
        src={getImageUrl("hero/edited2.jpg")}
        alt="Hero Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
