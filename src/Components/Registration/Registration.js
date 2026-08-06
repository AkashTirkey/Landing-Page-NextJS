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

        <div className={style.formSection}>
          <div className={style.formTitle}>
            <h1>register for nyel 2026</h1>
          </div>
          <div className={style.formSub}>
            <p>Takes 2 minutes. Your idea has been waiting long enough.</p>
          </div>
          <form className={style.formGrid}>
            <div className={style.formField}>
              <label className={style.formLabel}>Student's First Name</label>
              <input
                type="text"
                placeholder="Aarav"
                className={style.formInp}
                required
              />
            </div>
            <div className={style.formField}>
              <label className={style.formLabel}>Student's Last Name</label>
              <input
                type="text"
                placeholder="Sharma"
                className={style.formInp}
                required
              />
            </div>
            <div className={style.formField}>
              <label className={style.formLabel}>
                PARENT / GUARDIAN EMAIL{" "}
              </label>
              <input
                type="email"
                placeholder="Parent@email.com"
                className={style.formInp}
                required
              />
            </div>
            <div className={style.formField}>
              <label className={style.formLabel}>MOBILE NUMBER</label>
              <input
                type="tel"
                placeholder="98XXXXXXXX"
                className={style.formInp}
                required
              />
            </div>
            <div className={style.formField}>
              <label className={style.formLabel}>SCHOOL NAME </label>
              <input
                type="text"
                placeholder="Delhi Public School Noida"
                className={style.formInp}
                required
              />
            </div>
            <div className={style.formField}>
              <label className={style.formLabel}>CURRENT GRADE </label>
              <select defaultValue="" className={style.formSelect}>
                <option value="" disabled>
                  Select Grade
                </option>
                <option value="">Grade 5</option>
                <option value="">Grade 6</option>
                <option value="">Grade 7</option>
                <option value="">Grade 8</option>
                <option value="">Grade 9</option>
                <option value="">Grade 10</option>
                <option value="">Grade 11</option>
                <option value="">Grade 12</option>
              </select>
            </div>

            <div className={style.formFieldFull}>
              <label className={style.formLabel}>
                Select your league track
              </label>

              <div className={style.formTrackPick}>
                <input
                  type="radio"
                  value="junior"
                  id="track-junior"
                  className={style.trackRadio}
                />
                <label className={style.trackLabel} htmlFor="track-junior">
                  <span
                    className={style.tracklabelName}
                    style={{ color: "#00C9A7" }}
                  >
                    Junior Founders
                  </span>
                  <span style={{ fontSize: "12px", color: "#7A88AA" }}>
                    Grades 5-8 Finals at IIT Bombay
                  </span>
                </label>

                <input
                  type="radio"
                  className={style.trackRadio}
                  id="track-senior"
                  value="senior"
                />
                <label className={style.trackLabel} htmlFor="track-senior">
                  <span
                    className={style.tracklabelName}
                    style={{ color: "#F5C518" }}
                  >
                    Senior Founders
                  </span>
                  <span style={{ fontSize: "12px", color: "#7A88AA" }}>
                    Grades 9-12 Finals at IIT Calcutta
                  </span>
                </label>
              </div>
            </div>
            <button type="submit" className={style.formSubmit}>
              Secure My Spot in NYEL 2026 →{" "}
            </button>

            <div className={style.formDisclaimer}>
              <p>
                By registering, you agree to be contacted by BriSharks regarding
                the National Young Entrepreneurs League. Your details are never
                shared with third parties.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Registration;
