import styles from "./Contact.module.css";
import BackButtonComponent from "../../components/BackButton/BackButtonComponent";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Contact Me</h1>
        <BackButtonComponent />
      </div>
      <div className={styles.content}>
        <p className={styles.message}>
          Please reach out and inquire about anything that comes to mind after
          viewing my portfolio. Whether it's questions about projects displayed
          here, my current or future projects, the best times to network with
          me, or even feedback about the design of this website. I look forward
          to working with you and building unique websites that really stand
          out. You can email me at{" "}
          <a href="mailto:TylerLibrandi@gmail.com">TylerLibrandi@gmail.com</a>{" "}
          to get started today!
        </p>
      </div>
    </div>
  );
}

export default Contact;
