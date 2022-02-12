import { Link } from "react-router-dom";
import styles from "./Websites.module.css";
import kl from "../../images/me-icon-circle.png";
import raw from "../../images/me-icon-circle.png";
import gj from "../../images/me-icon-circle.png";
import rd from "../../images/me-icon-circle.png";
import klBg from "../../images/troll-witch-2.jpg";
import rawBg from "../../images/header-bg.jpg";

function Websites() {
  const siteList = [
    {
      title: "React Demo",
      image: rd,
      description:
        "An interactive demonstration of skills I've acquired while learning React",
      address: "https://tyler-librandi.github.io/react-demo/",
    },
    {
      title: "Kurt Librandi",
      image: kl,
      description:
        "A portfolio of artwork and sculptures made by Kurt Librandi",
      address: "https://kurtlibrandi.art/",
    },
    {
      title: "Rent a Waitress",
      image: raw,
      description: "A website for a local waitstaff business",
      address: "https://www.rent-a-waitress.com/",
    },
    {
      title: "Gaming Journal",
      image: gj,
      description: "A blog dedicated to my gaming experiences",
      address: "https://gaming.tylerlibrandi.com/",
    },
  ];

  return (
    <div className={styles.websites}>
      <div className={styles.intro}>
        <h1 className={styles.title}>My work so far</h1>
        <div className={styles.link}>
          <Link className={styles.backBtn} to={"/"}>
            Return to Home
          </Link>
        </div>
      </div>
      <div className={[styles.allSites, "row"].join(" ")}>
        {siteList.map((site) => {
          return (
            <div
              key={site.title}
              className={[
                styles.siteBox,
                "col-xl-3",
                "col-lg-4",
                "col-sm-6",
                "col-xs-12",
              ].join(" ")}
              style={{
                backgroundImage: "url(" + site.background + ")",
                backgroundSize: "cover",
              }}
            >
              <h2 className={styles.siteTitle}>{site.title}</h2>
              <img src={site.image} alt="" className={styles.siteImage} />
              <p className={styles.siteDescription}>{site.description}</p>
              <a
                className={styles.siteAddress}
                href={site.address}
                target="_blank"
              >
                Visit
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Websites;
