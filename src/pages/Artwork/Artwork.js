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
import BackButtonComponent from "../../components/BackButton/BackButtonComponent";

function Artwork() {
  const allImages = [
    couple,
    faces,
    tripFrog,
    splashBlue,
    splashGreen,
    splashRed,
    mandala,
    virus,
    skull,
    tl,
    melimosa,
    pytp,
    openMyTab,
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const showImage = (image) => {
    setModalImg(image);
    setShowModal(true);
    document.body.style.overflowY = "hidden";
  };
  const hideModal = () => {
    setShowModal(false);
    document.body.style.overflowY = "";
  };

  return (
    <div>
      <div className={styles.artwork}>
        <div className={styles.intro}>
          <h1 className={styles.title}>Artwork</h1>
          <BackButtonComponent />
        </div>
        <div className={styles.allArt}>
          {allImages.map((image, key) => {
            return (
              <div className={styles.artBox} key={image}>
                <img
                  className={styles.art}
                  src={image}
                  alt=""
                  onClick={() => {
                    showImage(image);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      {showModal ? (
        <div className={styles.modal} onClick={hideModal}>
          <img className={styles.modalImage} src={modalImg} alt="" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Artwork;
