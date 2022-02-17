import styles from "./Artwork.module.css";
import { useState } from "react";
import couple from "../../images/artwork/large/couple.jpg";
import faces from "../../images/artwork/large/faces.jpg";
import mandala from "../../images/artwork/large/mandala.jpg";
import melimosa from "../../images/artwork/large/melimosa.jpg";
import openMyTab from "../../images/artwork/large/openMyTab.png";
import pytp from "../../images/artwork/large/pytp.jpg";
import skull from "../../images/artwork/large/skull.jpg";
import splashBlue from "../../images/artwork/large/splashBlue.jpg";
import splashRed from "../../images/artwork/large/splashRed.jpg";
import splashGreen from "../../images/artwork/large/splashGreen.jpg";
import tl from "../../images/artwork/large/tl.jpg";
import tripFrog from "../../images/artwork/large/tripFrog.jpg";
import virus from "../../images/artwork/large/virus.jpg";

import coupleSml from "../../images/artwork/small/couple-sml.jpg";
import facesSml from "../../images/artwork/small/faces-sml.jpg";
import mandalaSml from "../../images/artwork/small/mandala-sml.jpg";
import melimosaSml from "../../images/artwork/small/melimosa-sml.jpg";
import openMyTabSml from "../../images/artwork/small/openMyTab-sml.png";
import pytpSml from "../../images/artwork/small/pytp-sml.jpg";
import skullSml from "../../images/artwork/small/skull-sml.jpg";
import splashBlueSml from "../../images/artwork/small/splashBlue-sml.jpg";
import splashRedSml from "../../images/artwork/small/splashRed-sml.jpg";
import splashGreenSml from "../../images/artwork/small/splashGreen-sml.jpg";
import tlSml from "../../images/artwork/small/tl-sml.jpg";
import tripFrogSml from "../../images/artwork/small/tripFrog-sml.jpg";
import virusSml from "../../images/artwork/small/virus-sml.jpg";
import BackButtonComponent from "../../components/BackButton/BackButtonComponent";

function Artwork() {
  const allImages = [
    { large: couple, small: coupleSml },
    { large: faces, small: facesSml },
    { large: tripFrog, small: tripFrogSml },
    { large: splashBlue, small: splashBlueSml },
    { large: splashGreen, small: splashGreenSml },
    { large: splashRed, small: splashRedSml },
    { large: mandala, small: mandalaSml },
    { large: virus, small: virusSml },
    { large: skull, small: skullSml },
    { large: tl, small: tlSml },
    { large: melimosa, small: melimosaSml },
    { large: pytp, small: pytpSml },
    { large: openMyTab, small: openMyTabSml },
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const showImage = (image) => {
    setModalImg(image.large);
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
                  src={image.small}
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
