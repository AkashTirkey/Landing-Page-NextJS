import style from "./LeagueTracks.module.css";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
});
const LeagueTracks = () => {
  return (
    <div className={style.main}>
      <div className={style.section}>
        <p>-League Tracks</p>
        <h1> PICK YOUR</h1>
        <h1 style={{ color: "#F5C518" }}>ARENA</h1>
        <p className={style.para}>
          Two tracks. Two stages. One goal — to find India&apos;s most fearless
          young
        </p>
        <p>founders.</p>
      </div>

      <div className={style.gridSection}>
        <div className={style.gridContent}>
          <div className={style.intro}>
            <p>Junior Track</p>
            <h1 style={{ color: "#00C9A7" }}>Junior</h1>
            <h1 style={{ color: "#00C9A7" }}>Founders</h1>
            <p style={{ color: "#7A88AA" }}>Grades 5-8 Ages 10-14</p>
          </div>
          <div className={style.lists}>
            <ul className={style.listItems}>
              <li>
                Build a startup idea around a real problem you see in your world
              </li>
              <li>
                Learn from BriSharks modules and global founders via Master
                Classes
              </li>
              <li>
                Create your first pitch deck and present to a panel of judges
              </li>
              <li>Top finalists pitch live at the National Finals stage</li>
              <li>
                Win mentorship, recognition, and a launchpad for your startup
                journey
              </li>
            </ul>
          </div>
        </div>
        <div className={style.gridContent}>
          <div className={style.intro}>
            <p>Senior Track</p>
            <h1 style={{ color: "#F5C518" }}>Senior</h1>
            <h1 style={{ color: "#F5C518" }}>Founders</h1>
            <p style={{ color: "#7A88AA" }}>Grades 9-12 Ages 14-18</p>
          </div>
          <div className={style.lists}>
            <ul className={style.listItems}>
              <li>
                Validate a real market problem and build a minimum viable
                product
              </li>
              <li>
                Build a business model, financial projections, and a
                go-to-market plan
              </li>
              <li>
                Pitch in a real investor format — structured, timed, and Q&A
                tested
              </li>
              <li>
                Top finalists pitch in front of investors and faculty at IIM
                Calcutta
              </li>
              <li>
                Win funding access, incubation pathways, and national
                recognition
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueTracks;
