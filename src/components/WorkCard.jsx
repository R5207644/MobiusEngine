import styles from './Workcard.module.css';
export default function WorkCard({num, text}) {
  return<div className={styles.card}>
    <button className={styles.btn}>{num}</button>
    <div className={styles.line}></div>
    <h4>{text}</h4>
  </div>;
}