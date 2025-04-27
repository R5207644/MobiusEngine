import Group from '../assets/Group.png';
import checkbox from '../assets/Group77.png';
import profile1 from '../assets/profile1.png';
import Star1 from '../assets/Star1.png';
import Button from './Button';
import ChooseUsCard from './ChooseUsCard';
import PlansCard from './PlansCard';
import styles from './Review.module.css';
import VideoCard from "./VideoCard";

const aprilPromo = [
  "Curated jobs from 1M+ listings, refreshed every 48 hours",
  "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
  "Need more? Add extra apps for just $1.5 each",
  "Your own dedicated application analyst",
  "Personalized with up to 10 filters & 5 job titles"];

const starter = [
  "All the perks of the Promo Plan, plus:",
  " Resume review & story-focused feedback",
  " Dedicated search specialist",
  " Up to 50 job apps/week",
  " Extra apps at $1.5 each",
  " Analyst support within 6 hours (SLA/PST hours)"
];

const plus = [
  "Everything in Starter, with more muscle:",
  "Up to 75 apps/week",
  "Apply to 15 job titles",
  "Analyst + full application team on Pacific hours"
];
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
    <div className={styles.plans}>
      <h2>Job Application Service Plans</h2>
      <div className={styles.cardContainer}>
        <PlansCard heading="April Promo" price="$32" features={aprilPromo} duration="week"></PlansCard>
        <PlansCard heading="Starter" price="$50" features={starter} isSpecial="Popular" duration="week"></PlansCard>
        <PlansCard heading="Plus" price="$100" features={plus} duration="week"></PlansCard>
      </div>

      <div className={styles.advance}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div>
              <h2>Advance</h2>
              <p>Top-tier support for serious job hunters:</p>
            </div>
            <hr />
          </div>
          <div className={styles.right}>
            <h3><span>$150</span>/week</h3>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <p><img src={checkbox} />Everything in Plus
              <img src={checkbox} />Custom Resumes & Cover Letters</p>
            <p>
              <img src={checkbox} />20 fully customized applications/week
              <img src={checkbox} />Help with complex job searches
            </p>
            <p>
              <img src={checkbox} />Access to senior resume experts, Founder & Exec Coaches
            </p>
          </div>
          <div className={styles.right}>
            <Button color="white"></Button>
          </div>
        </div>
        
      </div>
      <hr className={styles.endhr}/>
    </div>
  </>;
} 