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
                <span className={style.checkIcon}>✓</span> Build a startup idea
                around a real problem you see in your world
              </li>
              <li>
                <span className={style.checkIcon}>✓</span> Learn from BriSharks
                modules and global founders via Master Classes
              </li>
              <li>
                <span className={style.checkIcon}>✓</span> Create your first
                pitch deck and present to a panel of judges
              </li>
              <li>
                <span className={style.checkIcon}>✓</span> Top finalists pitch
                live at the National Finals stage
              </li>
              <li>
                <span className={style.checkIcon}>✓</span> Win mentorship,
                recognition, and a launchpad for your startup journey
              </li>
            </ul>
            <div className={style.trackVenue}>
              <div className={style.venueIcon}>🏛️</div>
              <div className={style.venueInfo}>
                <div className={style.venueLabel}>Finals Venue</div>
                <div className={style.venueName}>
                  NEC Juniors - E-Cell, IIT Bombay
                </div>
                <div className={style.venueSub}>
                  Runs NEC — one of India's largest student entrepreneurship
                  events.
                </div>
              </div>
            </div>
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
                <span className={style.checkIcon}>✓</span> Validate a real
                market problem and build a minimum viable product
              </li>
              <li>
                <span className={style.checkIcon}>✓</span> Build a business
                model, financial projections, and a go-to-market plan
              </li>
              <li>
                <span className={style.checkIcon}>✓</span> Pitch in a real
                investor format — structured, timed, and Q&A tested
              </li>
              <li>
                <span className={style.checkIcon}>✓</span> Top finalists pitch
                in front of investors and faculty at IIM Calcutta
              </li>
              <li>
                <span className={style.checkIcon}>✓</span> Win funding access,
                incubation pathways, and national recognition
              </li>
            </ul>
            <div className={style.trackVenue}>
              <div className={style.venueIcon}>🎓</div>
              <div className={style.venueInfo}>
                <div className={style.venueLabel}>Finals Venue</div>
                <div className={style.venueName}>
                  NEC Juniors - E-Cell, IIM Calcutta
                </div>
                <div className={style.venueSub}>
                  Pitch where India's business leaders are built — before you
                  apply to college.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueTracks;
