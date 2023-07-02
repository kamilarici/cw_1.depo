import style from "./a.module.css";
console.log(style);
const A = () => {
  return (
    <div className={style.title}>
      <header className={style.header}>react js</header>
    </div>
  );
};

export default A;
