import style from "./Outcome.module.css";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
});
const Outcome = () => {
  return (
    <div className={style.container}>
      <section>
        <div className={style.intro}>
          <p>THE OUTCOME</p>
          <h1>WHAT YOUR CHILD</h1>
          <h1 style={{ color: "#f5C518" }}>LEAVES WITH</h1>
          <p className={style.para}>
            Whether or not they win, every student who competes the programmer
            finishes with a real startup - and the skills to build the next one.
          </p>

          <div className={style.cards}>
            <div className={style.card}>
              <h4>a real startup</h4>
              <p>
                A validated idea, a working MVP, and a pitch deck — built by
                them, not handed to them.
              </p>
            </div>
            <div className={style.card}>
              <h4>A founder's portfolio</h4>
              <p>
                Their deck, demo video, and startup profile — ready to show a
                school, a competition, or a college application.
              </p>
            </div>
            <div className={style.card}>
              <h4>skills school doesn't teach</h4>
              <p>
                Customer research, business modelling, financial thinking, and
                pitching on a real stage.
              </p>
            </div>
            <div className={style.card}>
              <h4>A national network</h4>
              <p>
                Connections with founders, mentors, and fellow student
                entrepreneurs from across India.
              </p>
            </div>
            <div className={style.card}>
              <h4>a finalist certificate</h4>
              <p>
                For those who reach the finals — recognition from a partner cell
                at IIT Bombay or IIM Calcutta.
              </p>
            </div>
            <div className={style.card}>
              <h4>the founder mindset</h4>
              <p>
                Win or lose, they leave seeing problems as opportunities — the
                rarest advantage of all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Outcome;
