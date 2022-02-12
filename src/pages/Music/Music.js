import { Link } from "react-router-dom";
import styles from "./Music.module.css";
import melimosa from "../../images/artwork/melimosa.jpg";
function Music() {
  const allAudio = [melimosa, melimosa, melimosa];

  return (
    <div className={styles.music}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Musical Compositions</h1>
        <div className={styles.link}>
          <Link className={styles.backBtn} to={"/"}>
            Return to Home
          </Link>
        </div>
      </div>
      <div className={styles.allSongs}>
        {allAudio.map((image) => {
          return (
            <div className={styles.songBox}>
              <img className={styles.song} src={image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Music;
