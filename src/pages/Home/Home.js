import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { BsGlobe } from "react-icons/bs";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { GiGraduateCap, GiSkills, GiPaintBrush } from "react-icons/gi";
import meImg from "../../images/me-icon-circle.png";
import { useState } from "react";

function Home() {
  const initialIntro = {
    key: "home",
    title: "Hello, I'm Tyler",
    subtitle: "I build and design websites",
    description:
      "Click the icons to view my work, learn about my hobbies, or contact me",
    backgroundColor: "transparent",
  };

  const linksList = [
    {
      key: "websites",
      title: "Websites",
      subtitle: "Browse a portfolio of websites I've created",
      description:
        "I've recently started using React and I'm loving what I can do with it",
      backgroundColor: "rgb(90, 160, 255)",
      icon: <BsGlobe className={styles.linkIcon} />,
    },
    {
      key: "education",
      title: "Education",
      subtitle: "Check out my educational background",
      description:
        "I believe that continuous learning is what keeps me growing as a developer",
      backgroundColor: "rgb(75, 145, 235)",
      icon: <GiGraduateCap className={styles.linkIcon} />,
    },
    {
      key: "artwork",
      title: "Artwork",
      subtitle: "View some graphic art I've made in Photoshop",
      description: "I tend to focus on abstract creations and website graphics",
      backgroundColor: "rgb(60, 130, 215)",
      icon: <GiPaintBrush className={styles.linkIcon} />,
    },
    {
      key: "music",
      title: "Music",
      subtitle: "Hear a few songs I've made in FL Studio",
      description: "This is more of a hobby of mine but I do have fun with it",
      backgroundColor: "rgb(45, 115, 195)",
      icon: <IoIosMusicalNotes className={styles.linkIcon} />,
    },
    {
      key: "contact",
      title: "Contact",
      subtitle: "Get in touch with me directly",
      description: "Hire me to work on your websites or at your company",
      backgroundColor: "rgb(30, 100, 175)",
      icon: <MdEmail className={styles.linkIcon} />,
    },
    {
      key: "games",
      title: "Games",
      subtitle: "Play the games I've built",
      description: "They're fun, easy, and built with React",
      backgroundColor: "rgb(15, 85, 155)",
      icon: <IoGameController className={styles.linkIcon} />,
    },
    {
      key: "skills",
      title: "Skills",
      subtitle: "A list of skills I've developed over the years",
      description: "Everything from software to languages",
      backgroundColor: "rgb(0, 70, 135)",
      icon: <GiSkills className={styles.linkIcon} />,
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
          <img
            className={styles.meImg}
            src={meImg}
            onMouseEnter={() => changeIntro(initialIntro)}
          />
          <div className={styles.allLinks}>
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
        </div>
      </div>
    </div>
  );
}

export default Home;
