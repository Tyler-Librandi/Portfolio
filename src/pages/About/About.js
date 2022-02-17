import styles from "./About.module.css";
import BackButtonComponent from "../../components/BackButton/BackButtonComponent";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.intro}>
        <h1 className={styles.title}>About Me</h1>
        <BackButtonComponent />
      </div>
      <div className={[styles.content, "row"].join(" ")}>
        <p
          className={[
            styles.message,
            "col-xl-6",
            "col-lg-12",
            "col-md-12",
          ].join(" ")}
        >
          I started my exploration of web development around 2014. Back then, I
          was building websites for family and friends using WordPress. Since my
          graduation from Bellevue University, I've taken a much bigger interest
          in developing websites using languages such as HTML, CSS, JavaScript,
          and React.
          <br />
          <br />I mostly spend my free time playing video games because I love
          being able to craft and build things in an open-world environment. I'm
          currently working with my brother on a teen fantasy novel that we've
          been writing for the last few years. I also enjoy making music in FL
          Studio and creating graphic art in Photoshop.
        </p>
        <p className={["col-xl-3", "col-lg-12", "col-md-12"].join(" ")}></p>
        <p className={["col-xl-3", "col-lg-12", "col-md-12"].join(" ")}></p>
      </div>
    </div>
  );
}

export default About;
