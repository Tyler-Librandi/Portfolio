import { Link } from "react-router-dom";
import styles from "./Skills.module.css";
import BackButtonComponent from "../../components/BackButton/BackButtonComponent";
function Skills() {
  const categories = ["Language", "Program", "IDE/CMS"];
  const fields = [
    ["HTML", "CSS", "JavaScript", "React", "SQL", "Git"],
    [
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
    ],
    ["Visual Studio Code", "Chrome Developer Tools", "WordPress", "Shopify"],
  ];
  return (
    <div className={styles.skills}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Skill Set</h1>
        <BackButtonComponent />
      </div>
      <div className={[styles.allSkills, "row"].join(" ")}>
        {categories.map((item, i) => {
          return (
            <div
              className={[styles.skillBox, "col-lg-4", "col-md-6"].join(" ")}
            >
              <h2 className={styles.skillCat}>{item}</h2>
              {fields[i].map((subitem) => {
                return <p className={styles.skill}>{subitem}</p>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Skills;
