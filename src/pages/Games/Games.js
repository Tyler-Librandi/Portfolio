import { Link } from "react-router-dom";
import styles from "./Games.module.css";
import melimosa from "../../images/artwork/melimosa.jpg";

function Games() {
  const allImages = [melimosa, melimosa, melimosa];

  return (
    <div className={styles.games}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Games</h1>
        <div className={styles.link}>
          <Link className={styles.backBtn} to={"/"}>
            Return to Home
          </Link>
        </div>
      </div>
      <div className={styles.allGames}>
        {allImages.map((image) => {
          return (
            <div className={styles.gameBox}>
              <img className={styles.game} src={image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Games;
