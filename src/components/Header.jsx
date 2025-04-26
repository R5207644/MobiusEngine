import image1 from '../assets/image1.png';
import Button from './Button';
import styles from './Header.module.css';
export default function Header(){
  return<>
  <div className= {`${styles.group_47}`}>
    <div className={styles.group_46}>
      <h1 className='text-white'>Land job interviews <span className={styles.x}>10x</span> faster</h1>
      <p className={`text-white ${styles.p}`}>Custom-built resumes that match your goals, keywords, and recruiter expectations.</p>
      <Button color="white"></Button>
    </div>
    <div className={styles.group_45}>
      <img src={image1} />
      <p className="text-center text-white">Download Free E-Book</p>
    </div>
  </div>
  </>;
}