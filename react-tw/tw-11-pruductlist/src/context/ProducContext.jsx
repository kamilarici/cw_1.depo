import { createContext, useState } from "react";
//?pruduct değişkenine eşitleme ile başlanır.isimi biz veriyoruz
const ProducContext = createContext();

//? tüm işlemlerin yapılacağı yer children içine parametre olarak verilir
export const ProviderContext = ({ children }) => {
  const [data, setData] = useState();
  //   ?   state ve fonsiyonlar buraya yazılır
  //? sonrası objenin içine atılır
  const values = {
    data,
    setData,
  };

  return (
    //? değişkene provider ile chhildren sarmallanır
    //? value içine props hibi yazılır
    <ProducContext.Provider value={values}>{children}</ProducContext.Provider>
  );
};
//? export ile değişken import edilir
export default ProducContext;
