import logo from '../assets/Group25.png';
import Button from './Button';
import styles from './Navbar.module.css';
export default function Navbar() {
  return <>
    <nav className={`navbar navbar-expand-md ${styles.nav}`}>
      <div className="nav-brand"><img src={logo} /></div>
      <ul className={`nav navbar-nav ${styles.ul}`}>
        <li className='nav-group'>
          <a href="#" className='nav-link'>Home</a>
        </li>
        <li className='nav-group'>
          <a href="#" className='nav-link'>About Us</a>
        </li>
        <li className='nav-group'>
          <a href="#" className='nav-link'>Plans</a>
        </li>
        <li className='nav-group'>
          <a href="#" className='nav-link'>Testimonials</a>
        </li>
        <li className='nav-group'>
          <a href="#" className='nav-link'>Privacy Policy</a>
        </li>
        <li className='nav-group'>
          <a href="#" className='nav-link'>More</a>
        </li>
      </ul>
      <Button color="white"></Button>
    </nav>
  </>
}