import style from "./a.module.css";
console.log(style);
const A = () => {
  return (
    <div className={style.title}>
      <header className={style.header}>react js</header>
      <p className={style.p}>Lorem ipsum dolor sit amet.</p>
      <h5 className={style.h5}>kkkk</h5>
      <button id={style.click}>aclick</button>
    </div>
  );
};

export default A;
