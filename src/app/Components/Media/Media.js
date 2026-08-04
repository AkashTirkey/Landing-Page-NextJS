import style from "./Media.module.css";

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
