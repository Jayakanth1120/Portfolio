import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import heroimage from '../../../assets/ilustration/portfolio_2.jpg'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jayakanth</h1>
        <p className={styles.description}>
          I'm a frontend developer with 2 years of experience specializing in HTML, CSS, JavaScript, React, Redux, TypeScript, and version control with Git & GitHub.
        </p>
        <div>
          <a href="mailto:jayakanthboopathi@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          {/* <a href="mailto:jayakanthboopathi@gmail.com" className={styles.contactBtn}>
            Download CV
          </a> */}
        </div>
      </div>
      <img
        src={heroimage}
        alt="Hero image of me"
        className={styles.heroImg}
        loading="eager"
        draggable="false"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
