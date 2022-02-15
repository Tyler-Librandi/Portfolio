import styles from "./Websites.module.css";
import BackButtonComponent from "../../components/BackButton/BackButtonComponent";
import gjBg from "../../images/gaming-journal.jpg";
import rdBg from "../../images/react.png";
import klBg from "../../images/troll-witch-2.jpg";
import rawBg from "../../images/rent-a-waitress.jpg";

function Websites() {
  const siteList = [
    {
      title: "React Demo",
      description:
        "An interactive demonstration of skills I've acquired while learning React",
      address: "https://tyler-librandi.github.io/react-demo/",
      background: rdBg,
    },
    {
      title: "Kurt Librandi",
      description:
        "A portfolio of artwork and sculptures made by Kurt Librandi",
      address: "https://kurtlibrandi.art/",
      background: klBg,
    },
    {
      title: "Rent a Waitress",
      description: "A website for a local waitstaff business",
      address: "https://www.rent-a-waitress.com/",
      background: rawBg,
    },
    {
      title: "Gaming Journal",
      description: "A blog dedicated to my gaming experiences",
      address: "https://gaming.tylerlibrandi.com/",
      background: gjBg,
    },
  ];

  return (
    <div className={styles.websites}>
      <div className={styles.intro}>
        <h1 className={styles.title}>My work so far</h1>
        <BackButtonComponent />
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
                backgroundPosition: "center top",
              }}
            >
              <div className={styles.siteContent}>
                <h2 className={styles.siteTitle}>{site.title}</h2>
                <p className={styles.siteDescription}>{site.description}</p>
                <a
                  className={styles.siteAddress}
                  href={site.address}
                  target="_blank"
                >
                  Visit
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Websites;
