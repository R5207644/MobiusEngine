import Button from "./Button";
import styles from './PlansCard.module.css';
export default function PlansCard({ heading, price, features, isSpecial, text, duration }) {
  return <div className={`${styles.card} ${duration=="week"?styles.small:''}`}>
    <div className={styles.cardTop}>
      <h2 className={styles.heading}>
        {heading} <span className={styles.isSpecial}>{isSpecial ? isSpecial : ''}</span>
      </h2>

      <span className={styles.text}>{text ? text : ''}</span>

      <h3><span className={styles.price}>{price}</span>/{duration}</h3>

      <hr />
   

    <ul className={styles.customList}>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    </div>
    <Button color="blue"></Button>
  </div>;
}