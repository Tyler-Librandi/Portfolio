import { Link } from "react-router-dom";
import styles from "./Education.module.css";
function Education() {
  const institutions = ["Bellevue University", "FreeCodeCamp", "CodeCademy"];
  const certifications = [
    ["Bachelor Degree of Science in:", "Web Development"],
    [
      "Certifications in:",
      "Responsive Web Design",
      "Basic JavaScript",
      "ES6",
      "React",
    ],
    ["Certifications in:", "HTML", "CSS", "JavaScript"],
  ];
  return (
    <div className={styles.education}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Educational Background</h1>
        <div className={styles.link}>
          <Link className={styles.backBtn} to={"/"}>
            Return to Home
          </Link>
        </div>
      </div>
      <div className={[styles.allEducation, "row"].join(" ")}>
        {institutions.map((item, i) => {
          return (
            <div
              className={[styles.institutionBox, "col-lg-4", "col-md-6"].join(
                " "
              )}
            >
              <h2 className={styles.institution}>{item}</h2>
              {certifications[i].map((subitem) => {
                return <p className={styles.certification}>{subitem}</p>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Education;
