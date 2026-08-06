import style from "./About.module.css";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
});
const About = () => {
  return (
    <div className={style.container}>
      <section className={style.about}>
        <div className={style.leftContent}>
          <p style={{ textTransform: "uppercase" }}>-What is NYEL</p>
          <h2>NOT A SCHOOL</h2>
          <h2>PROJECT.</h2>
          <h2 style={{ color: "#F5C518" }}>A REAL STAGE.</h2>

          <div className={style.para}>
            <p>
              The National Young Entrepreneurs League is BriSharks' flagship
              competition — designed to take India's most ambitious school
              students from first idea to a live pitch in front of real
              investors, founders, and institution panels at IIT Bombay and IIM
              Calcutta.
            </p>
          </div>

          <button className={style.btn}>Join The League</button>
        </div>
        <div className={style.rightContent}>
          <div className={style.stats}>
            <div className={style.num}>
              <p>2</p>
            </div>

            <div className={style.desc}>
              <strong>Elite Finals Venues</strong>
              <p>
                IIT Bombay (E-Cell NEC Juniors) and IIM Calcutta — two of
                India&apos;s most respected academic and entrepreneurship
                institutions.
              </p>
            </div>
          </div>
          <div className={style.stats}>
            <div className={style.num}>
              <p>2</p>
            </div>

            <div className={style.desc}>
              <strong>League Tracks</strong>
              <p>
                Grade 5–8 and Grade 9–12. Separate competitions, separate
                stages, the same intensity.
              </p>
            </div>
          </div>
          <div className={style.stats}>
            <div className={style.num}>
              <p>1</p>
            </div>

            <div className={style.desc}>
              <strong>Mission</strong>
              <p>
                Find India&apos;s next generation of founders before they leave
                schools
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
