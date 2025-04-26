import styles from './VideoCard.module.css';
export default function VideoCard() {
  return <div className={styles.card}>
    <video src="$" controls></video>
    <div className={styles.text}>
     Holly is a senior executive who got over 10 job interviews and an offer she accepted↗
    </div>
  </div>;
}