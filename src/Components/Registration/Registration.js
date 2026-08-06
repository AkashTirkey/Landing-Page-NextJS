import style from "./Registration.module.css";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const Registration = () => {
  return (
    <div className={style.Container}>
      <section className={style.section}>
        <div className={style.top}>
          <h1>your startup</h1>
          <h1 style={{ color: "#f5c518" }}>starts here</h1>

          <p>
            Seats are limited. Every cohort fills up. The students who register
          </p>
          <p style={{ textAlign: "center" }}>
            first are the ones who get to the finals.
          </p>
        </div>

        <form action="">
          <h1>REGISTER FOR NYEL 2026</h1>
          <p>Takes 2 minutes. Your Idea has been waiting long enough</p>

          <label htmlFor="fname">STUDENT'S FIRST NAME</label>
          <input type="text" placeholder="Aarav" id="fname" />

          <label htmlFor="lname">STUDENT'S LAST NAME</label>
          <input type="text" placeholder="Sharma" id="lname" />
        </form>
      </section>
    </div>
  );
};

export default Registration;
