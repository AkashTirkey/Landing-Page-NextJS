import style from "./Header.module.css";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
});
const Header = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <p>INTRODUCING 💠 BRISHARKS PRESENTS</p>

        <section className={style.section}>
          <h1>NATIONAL YOUNG</h1>
          <h1 style={{ color: "#F5C518" }}>ENTREUPRENEURS</h1>
          <h1>LEAGUE</h1>

          <div className={style.para}>
            <p>
              India&apos;s most prestigious startup competition for school
              students.
            </p>
            <p>
              <strong>Learn. Build. Pitch.</strong> The top young founders get
              to pitch at E-Cell
            </p>
            <p>
              <strong>
                IIT Bombay&apos;s NEC Juniors Finals and E-Cell IIM Calcutta.
              </strong>{" "}
            </p>
          </div>

          <div className={style.buttons}>
            <button className={style.lBtn}>Claim your Spot</button>
            <button className={style.Rbtn}>Explore League Tracks</button>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
