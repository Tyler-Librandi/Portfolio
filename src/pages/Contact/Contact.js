import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
import BackButtonComponent from "../../components/BackButton/BackButtonComponent";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Contact Me</h1>
        <BackButtonComponent />
      </div>
    </div>
  );
}

export default Contact;
