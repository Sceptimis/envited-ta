import { Link } from 'react-router-dom';
import styles from './Landing.module.scss'
import Background from "../../components/Background/Background";
import NavBar from "../../components/NavBar/NavBar";
import RoundedButton from '../../components/RoundedButton/RoundedButton';

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
      <div className={styles.createEventContent}>
        <Link to="/create">
          <RoundedButton className={styles.createEventButton} text="🎉 Create your next event" />
        </Link>
      </div>
    </>
  );
}

export default Landing;