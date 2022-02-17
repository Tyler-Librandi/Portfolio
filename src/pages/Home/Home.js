import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { BsGlobe } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GiGraduateCap, GiSkills, GiPaintBrush } from "react-icons/gi";
import meImg from "../../images/me-icon-circle.png";
import meImgSml from "../../images/me-icon-circle-sml.png";
import { useState } from "react";

function Home() {
  const initialIntro = {
    key: "home",
    title: "Hello, I'm Tyler",
    subtitle: "I build and design websites",
    description:
      "Click the icons to view my work, learn about my hobbies, or contact me",
    backgroundColor: "#3A3A3A",
  };

  const linksList = [
    {
      key: "websites",
      title: "Websites",
      subtitle: "Browse a portfolio of websites I've created",
      description:
        "I've recently started using React and I'm loving what I can do with it",
      backgroundColor: "#136ecf",
      icon: <BsGlobe className={styles.linkIcon} />,
    },
    {
      key: "skills",
      title: "Skills",
      subtitle: "A list of skills I've developed over the years",
      description: "Everything from software to languages",
      backgroundColor: "#136ecf",
      icon: <GiSkills className={styles.linkIcon} />,
    },
    {
      key: "education",
      title: "Education",
      subtitle: "Check out my educational background",
      description:
        "I believe that continuous learning is what keeps me growing as a developer",
      backgroundColor: "#136ecf",
      icon: <GiGraduateCap className={styles.linkIcon} />,
    },
    {
      key: "artwork",
      title: "Artwork",
      subtitle: "View some graphic art I've made in Photoshop",
      description: "I tend to focus on abstract creations and website graphics",
      backgroundColor: "#136ecf",
      icon: <GiPaintBrush className={styles.linkIcon} />,
    },
    {
      key: "contact",
      title: "Contact",
      subtitle: "Get in touch with me directly",
      description: "Hire me to work on your websites or at your company",
      backgroundColor: "#136ecf",
      icon: <MdEmail className={styles.linkIcon} />,
    },
  ];

  const [introTitle, setIntroTitle] = useState(initialIntro.title);
  const [introSubtitle, setIntroSubtitle] = useState(initialIntro.subtitle);
  const [introDescription, setIntroDescription] = useState(
    initialIntro.description
  );
  const [introBG, setIntroBG] = useState(initialIntro.backgroundColor);

  const changeIntro = (item) => {
    setIntroTitle(item.title);
    setIntroSubtitle(item.subtitle);
    setIntroDescription(item.description);
    setIntroBG(item.backgroundColor);
  };

  return (
    <div className={styles.home}>
      <div className={[styles.mainRow, "row"].join(" ")}>
        <div
          className={[
            styles.intro,
            styles.mainCol,
            "col-xl-6",
            "col-lg-12",
          ].join(" ")}
        >
          <div
            className={styles.introText}
            style={{
              backgroundColor: introBG,
            }}
          >
            <h1 className={styles.title}>{introTitle}</h1>
            <p className={styles.subtitle}>{introSubtitle}</p>
            <p className={styles.introDescription}>{introDescription}</p>
          </div>
        </div>
        <div
          className={[styles.nav, styles.mainCol, "col-xl-6", "col-lg-12"].join(
            " "
          )}
        >
          <Link to={"/about/"} className={styles.aboutLink}>
            <img
              className={styles.meImg}
              src={meImg}
              onMouseEnter={() => changeIntro(initialIntro)}
            />
          </Link>
          <div className={[styles.allLinks, "col"].join(" ")}>
            {linksList.map((item) => {
              return (
                <div key={item.key} className={styles.linkBox}>
                  <Link
                    to={"/" + item.key + "/"}
                    className={styles.link}
                    onMouseEnter={() => changeIntro(item)}
                  >
                    {item.icon}
                    <p className={styles.linkText}>{item.title}</p>
                  </Link>
                </div>
              );
            })}
          </div>
          <Link to={"/about/"} className={styles.aboutLinkSml}>
            <img
              className={[styles.meImgSml, "col"].join(" ")}
              src={meImgSml}
              onMouseEnter={() => changeIntro(initialIntro)}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
