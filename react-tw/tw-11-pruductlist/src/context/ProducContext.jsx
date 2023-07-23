import { createContext, useState } from "react";
//?pruduct değişkenine eşitleme ile başlanır.isimi biz veriyoruz
const ProducContext = createContext();

//? tüm işlemlerin yapılacağı yer children içine parametre olarak verilir
export const ProviderContext = ({ children }) => {
  const [data, setData] = useState();
  //   ?   state ve fonsiyonlar buraya yazılır
  const values = {
    data,
    setData,
  };

  return (
    <ProducContext.Provider value={values}>{children}</ProducContext.Provider>
  );
};

export default ProducContext;
