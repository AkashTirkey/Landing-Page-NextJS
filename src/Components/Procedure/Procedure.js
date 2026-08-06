import style from "./Procedure.module.css";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
});
const Procedure = () => {
  return (
    <div className={style.Container}>
      <main className={style.main}>
        <p>-HOW THE LEAGUE WORKS</p>
        <h1>YOUR PATH TO</h1>
        <h1 style={{ color: "#F5C518" }}>THE FINALS</h1>

        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.num}>
              <p>01</p>
            </div>

            <h3>register & learn</h3>
            <p>
              Enrol in BriSharks, complete the Learn modules, and build your
              entrepreneurship foundation with real founders and investors.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.num}>
              <p>02</p>
            </div>
            <h3>Build your startup</h3>
            <p>
              Apply what you've learned to build a real startup — validate your
              idea, create your MVP, and develop your pitch deck.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.num}>
              <p>03</p>
            </div>
            <h3>submit & qualify</h3>
            <p>
              Submit your startup project for evaluation. Top shortlisted
              founders advance to the regional and national rounds.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.num}>
              <p>04</p>
            </div>
            <h3>regional rounds</h3>
            <p>
              Pitch your startup in front of judges in the regional qualifier.
              The best performers earn their spot at the National Finals.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.num}>
              <p>05</p>
            </div>
            <h3>national finals</h3>
            <p>
              The top young founders pitch live on stage — Grade 5–8 at IIT
              Bombay, Grade 9–12 at IIM Calcutta.
            </p>
          </div>
          <div className={style.card}>
            <div className={style.num}>
              <p>06</p>
            </div>
            <h3>win & launch</h3>
            <p>
              Winners receive mentorship, media coverage, incubation access, and
              recognition that follows them through school and beyond.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Procedure;
