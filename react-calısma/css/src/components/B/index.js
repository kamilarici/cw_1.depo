import style from "./style.module.css";
//? karışıklığı önlemek için module.css kullanıyoruz ve import ettiğimiz isim ne ise verdiğimiz id yada class başına yazmamız gerekiyor.örneğin import add from... diye import ettiysek sstyle verirken clası title olan butonun clasına  ***{add.title}*** yazmamız gerekiyor
const B = () => {
  return (
    <div className={style.title}>
      <header className={style.header}>kml arc</header>
      <p className={style.p}>Lorem ipsum dolor sit amet.</p>
      <h5 className={style.h5}>kkkkb</h5>
      <button id={style.click}>click</button>
    </div>
  );
};

export default B;
