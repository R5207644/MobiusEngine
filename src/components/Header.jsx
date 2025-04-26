import image1 from '../assets/image1.png';
import bookIcon from '../assets/📖.png';
import Button from './Button';
import styles from './Header.module.css';
export default function Header() {
  return <>
    <div className={`${styles.group_47}`}>
      <div className={styles.group_46}>
        <h1 className='text-white'>Land job interviews <span className={styles.x}>10x</span> faster</h1>
        <p className={`text-white ${styles.p}`}>Custom-built resumes that match your goals, keywords, and recruiter expectations.</p>
        <Button color="white"></Button>
      </div>
      <div className={styles.group_45}>
        <div className={styles.img}>
          <img src={image1} />
          <div className={styles.icon}><img src={bookIcon} /></div>
        </div>
        <p className="text-center">Download Free E-Book</p>
      </div>
    </div>
  </>;
}