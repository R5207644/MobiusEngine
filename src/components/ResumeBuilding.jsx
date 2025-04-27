import PlansCard from "./PlansCard";
import styles from './ResumeBuilding.module.css';
const rebuild = "Crafted for senior to VP-level professionals ready for their next big step.";
const interview = "Two sessions to sharpen your story, confidence, and clarity — fast.";
const rebuildFeatures = [
  "3× 30-min coaching ",
  "Focused on storytelling, not just formatting",
  "Analyst + full application team on Pacific hours",
  "Tailored to your target industry, company, or role",
  "Direct work with our co-founder (ex-Google, JP Morgan)",
  "Executive coaching from UC Berkeley alum with 10+ yrs experience",
  "Resume Rebuild portfolio available upon request"
];
const interviewFeatures = [
  "2× 45-min live coaching with our co-founder",
  "Real-time, practical feedback",
  "Build clarity, empathy & executive presence",
  "For senior and leadership roles — technical & non-technical"
];
export default function ResumeBuilding() {
  return <>

    {/* text of top */}

    <div className={styles.top}>
      <h2>Resume Building & Coaching</h2>
      <p>
        Let’s talk about where you’re headed — and how your resume can get you there.<br></br>
        <b>Schedule a call to get started.</b>
      </p>
    </div>

    {/* card container */}

    <div className={styles.cardContainer}>
      <PlansCard heading="Resume Rebuild" text={rebuild} price="$1000" features={rebuildFeatures} duration="one time"></PlansCard>
      <PlansCard heading="Interview Prep" text={interview} price="$500" features={interviewFeatures} duration="one time"></PlansCard>
    </div>

    {/* bottom horizontal card */}

    <div className={styles.horizontalCard}>
      <div className={styles.left}>
        <h2>STILL have <br></br>doubts?</h2>
      </div>
      <div className={styles.middle}>
        <a href="#">Contact us</a>
      </div>
      <div className={styles.right}>
        <a href="#" className="btn">→</a>
      </div>
    </div>
  </>;
}