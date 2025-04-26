import Header from './Header';
import styles from './HeaderContainer.module.css';
import Navbar from './Navbar';
export default function HeaderContainer() {
  return<div className={styles.main}> 
  <Navbar></Navbar>
  <div className={styles.headerContainer}>
  
    <Header></Header>
  </div>
  </div>
}