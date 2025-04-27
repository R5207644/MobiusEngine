import logo from '../assets/Group41.png';
import styles from './Footer.module.css';
export default function Footer() {
  return <>
  <div className={styles.main}>

    <div className={styles.left}>
      <div className={styles.top}>
        <img src={logo} />
        <hr />
      </div>
      <div className={styles.bottom}>
        <div>
          <p><u>Address</u></p>
          <p>1875 Mission St Ste 103 #450</p>
          <p>San Francisco, CA 94103</p>
        </div>
        <div>
          <p><u>Email</u></p>
          <p><u>finance@mobiusengine.ai</u></p>
        </div>
        <div>
          <p><u>Telephone</u></p>
          <p>650-889-6026</p>
        </div>
      </div>
    </div>

    <div className={styles.right}>
      <p><u>Socials</u></p>
      <p>
        <a href="#" className='btn'>in</a>
        <a href="#" className='btn'>in</a>
      </p>
    </div>

  </div>
  <div className={styles.footer}>
    <div><p>© 2023 Mobiusservices LLC</p></div>
    <div>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
    </div>

  </div>
  </>
}