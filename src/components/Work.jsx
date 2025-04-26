import styles from './Work.module.css';
import WorkCard from './WorkCard';
export default function Work() {
  return<div className={styles.work}>
    <h2>How we work?</h2>
    <div className={styles.cardContainer}>
      <WorkCard num="1" text="Submit Intake Form"></WorkCard>
      <WorkCard num="2" text="We Do the search and curation for list of jobs"></WorkCard>
      <WorkCard num="3" text="You approve, we do the tedius part(applying)"></WorkCard>
      <WorkCard num="4" text="You get the interviews"></WorkCard>
    </div>
  </div>;
}