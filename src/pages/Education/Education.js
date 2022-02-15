import styles from "./Education.module.css";
import BackButtonComponent from "../../components/BackButton/BackButtonComponent";
function Education() {
  const institutions = ["Bellevue University", "CodeCademy", "FreeCodeCamp"];
  const certifications = [
    ["Bachelor Degree of Science in:", "Web Development"],

    ["Certifications in:", "HTML", "CSS", "JavaScript"],
    [
      "Certifications in:",
      "Responsive Web Design",
      "Basic JavaScript",
      "ES6",
      "React",
    ],
  ];

  return (
    <div className={styles.education}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Educational Background</h1>
        <BackButtonComponent />
      </div>
      <div className={[styles.allEducation, "row"].join(" ")}>
        {institutions.map((item, i) => {
          return (
            <div
              className={[styles.institutionBox, "col-lg-4", "col-md-6"].join(
                " "
              )}
              key={i}
            >
              <h2 className={styles.institution}>{item}</h2>
              <div className={styles.certContent}>
                {certifications[i].map((subitem, i) => {
                  return (
                    <p className={styles.certification} key={i}>
                      {subitem}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Education;
