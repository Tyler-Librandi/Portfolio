import { Link } from "react-router-dom";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Contact Me</h1>
        <div className={styles.link}>
          <Link className={styles.backBtn} to={"/"}>
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
