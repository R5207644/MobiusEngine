import styles from './AboutCard.module.css';
export default function AboutCard({img, text}) {
  return <div className={styles.main}>
    <div className={styles.img}>
      <img src={img} />
      <div className={styles.icon}>in</div>
      </div>
    <div className={styles.text}>{text}</div>
  </div>
}