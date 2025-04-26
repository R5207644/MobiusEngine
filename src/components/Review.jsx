import Group from '../assets/Group.png';
import profile1 from '../assets/profile1.png';
import Star1 from '../assets/Star1.png';
import Button from './Button';
import ChooseUsCard from './ChooseUsCard';
import styles from './Review.module.css';
import VideoCard from "./VideoCard";
export default function Review() {
  return <>
    <div className={styles.main}>
      <h2>What our clients have to say</h2>
      <div className={styles.card}>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
      </div>
      <div className={styles.btns}>
        <a href="#" className={`btn ${styles.btnOutline}`}>More customer testimonials ↗</a>
        <Button color="blue"></Button>
      </div>
    </div>


    <div className={styles.chooseUs}>
      <h2>Why Choose Us?</h2>
      <div className={styles.ChooseUsContainer}>
        <ChooseUsCard heading="Tried, Tested, Trusted" text="Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back." icon={Group}></ChooseUsCard>
        <ChooseUsCard icon={profile1} heading="Real People, Real Help" text="A hands-on team that actually cares — guiding you through every twist in your career path."></ChooseUsCard>

        <ChooseUsCard icon={Star1} heading="Beat the Line" text="We search, shortlist, and apply for you, so your name shows up first — every single day."></ChooseUsCard>
      </div>
    </div>
  </>;
} 