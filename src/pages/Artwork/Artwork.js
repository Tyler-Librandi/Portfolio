import { Link } from "react-router-dom";
import styles from "./Artwork.module.css";
import { useState } from "react";
import couple from "../../images/artwork/couple.jpg";
import faces from "../../images/artwork/faces.jpg";
import mandala from "../../images/artwork/mandala.jpg";
import melimosa from "../../images/artwork/melimosa.jpg";
import openMyTab from "../../images/artwork/openMyTab.png";
import pytp from "../../images/artwork/pytp.jpg";
import skull from "../../images/artwork/skull.jpg";
import splashBlue from "../../images/artwork/splashBlue.jpg";
import splashRed from "../../images/artwork/splashRed.jpg";
import splashGreen from "../../images/artwork/splashGreen.jpg";
import tl from "../../images/artwork/tl.jpg";
import tripFrog from "../../images/artwork/tripFrog.jpg";
import virus from "../../images/artwork/virus.jpg";

function Artwork() {
  const allImages = [
    couple,
    faces,
    mandala,
    melimosa,
    openMyTab,
    pytp,
    skull,
    splashBlue,
    splashRed,
    splashGreen,
    tl,
    tripFrog,
    virus,
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const showImage = (image) => {
    setModalImg(image);
    setShowModal(true);
    console.log("imaged");
    // document.body.style.overflow = "hidden";
  };
  const hideModal = () => {
    setShowModal(false);
    // document.body.style.overflow = "visible";
  };

  return (
    <div className={styles.artwork}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Artwork</h1>
        <div className={styles.link}>
          <Link className={styles.backBtn} to={"/"}>
            Return to Home
          </Link>
        </div>
      </div>
      <div className={styles.allArt}>
        {allImages.map((image, key) => {
          return (
            <div className={styles.artBox} key={image}>
              <img
                className={styles.art}
                src={image}
                alt=""
                onClick={() => showImage(image)}
              />{" "}
              {showModal ? (
                <div className={styles.modal} onClick={hideModal}>
                  <img className={styles.modalImage} src={modalImg} alt="" />
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Artwork;
