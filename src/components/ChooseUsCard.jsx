import styles from './ChooseUsCard.module.css';
export default function ChooseUsCard({heading, text, icon}) {
  return <div className={styles.card}>
    <div className={styles.icon}>
      <img src={icon} />
    </div>
    <h3>{heading}</h3>
    <p>{text}</p>
  </div>;
}