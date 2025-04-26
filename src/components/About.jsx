import img2 from '../assets/Group59.png';
import img1 from '../assets/Group60.png';
import styles from './About.module.css';
import AboutCard from "./AboutCard";
let ashwinText = `Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.

Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
`;
let nicoleText = `
  Nicole is an Executive coach at Mobius specializing in resume builds and career advisory. 
 
With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.
`;

export default function About() {
  return <div className={styles.main}>
    <h2>About Us</h2>
    <div className={styles.cardContainer}>
      <AboutCard img={img1} text={ashwinText}></AboutCard>    
      <AboutCard img={img2} text={nicoleText}></AboutCard>
      <a href="#">Learn more about our Board of Advisors​ ↗</a>
      <a href="#">Follow us on our Linkedin page ↗</a>
    </div>   
  </div>;
}