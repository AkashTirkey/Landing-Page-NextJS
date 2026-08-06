import style from "./Media.module.css";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const Media = () => {
  return (
    <div className={style.Container}>
      <section className={style.section}>
        <p>-as seen on</p>
        <h1>Brisharks founders</h1>
        <h1 style={{ color: "#f5c518" }}>make headlines</h1>
        <article className={style.article}>
          <h5>discovery channel</h5>
          <h5>ndtv</h5>
          <h5>businessworld</h5>
        </article>
      </section>
    </div>
  );
};

export default Media;
