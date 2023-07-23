import { createContext, useState } from "react";
//?pruduct değişkenine eşitleme ile başlanır.isimi biz veriyoruz
const ProducContext = createContext();

export const ProviderContext = ({ children }) => {
  const [data, setData] = useState();
  const values = {
    data,
    setData,
  };

  return (
    <ProducContext.Provider value={values}>{children}</ProducContext.Provider>
  );
};

export default ProducContext;
