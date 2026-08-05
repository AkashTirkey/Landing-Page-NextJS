import style from "./Registration.module.css";

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

          <label for="fname">STUDENT'S FIRST NAME</label>
          <input type="text" placeholder="Aarav" id="fname" />

          <label for="lname">STUDENT'S LAST NAME</label>
          <input type="text" placeholder="Sharma" id="lname" />
        </form>
      </section>
    </div>
  );
};

export default Registration;
