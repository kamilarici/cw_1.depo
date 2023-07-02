import style from "./a.module.css";
console.log(style);
//? karışıklığı önlemek için module.css kullanıyoruz ve import ettiğimiz isim ne ise verdiğimiz id yada class başına yazmamız gerekiyor.örneğin import add from... diye import ettiysek sstyle verirken clası title olan butonun clasına  ***{add.title}*** yazmamız gerekiyor
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
