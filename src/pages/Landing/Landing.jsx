import styles from './Landing.module.scss'
import Background from "../../components/Background/Background";
import NavBar from "../../components/NavBar/NavBar";

function Landing() {
  return (
    <>
      <Background />
      <NavBar />
      <div className={styles.textContent}>
        <h1 className={styles.mainText}>
          Facebook events
          <br />
          without Facebook.
        </h1>
        <h2 className={styles.subText}>
          Easily host and share events with your
          <br />
          friends across any social media.
        </h2>
      </div>
    </>
  );
}

export default Landing;