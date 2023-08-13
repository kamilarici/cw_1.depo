import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchFail, fetchStart, getFirmsSuccess } from "../features/stockSlice";

const useStockCall = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  //? ilgili fonksiyonları uzun uzun ve ayrı ayrı yazmak , tekrar yazmak yerine sadece değişen yerleri parametre olarak yollayabiliriz
  // getStockData("firms")
  // getStockData("sales")

  //? ******************************************
  const getStockData = async (url) => {
    dispatch(fetchStart());
    const BASE_URL = "https://14108.fullstack.clarusway.com";

    try {
      const { data } = await axios(`${BASE_URL}/stock/${url}/`, {
        headers: { Authorization: `Token ${token} ` },
      });
      dispatch(getFirmsSuccess({ data, url }));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  //? *********************************************
  const getFirms = async () => {
    dispatch(fetchStart());
    const BASE_URL = "https://14108.fullstack.clarusway.com";

    try {
      const { data } = await axios(`${BASE_URL}/stock/firms/`, {
        headers: { Authorization: `Token ${token} ` },
      });
      dispatch(getFirmsSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const getSales = async () => {
    dispatch(fetchStart());
    const BASE_URL = "https://14108.fullstack.clarusway.com";

    try {
      const { data } = await axios(`${BASE_URL}/stock/sales/`, {
        headers: { Authorization: `Token ${token} ` },
      });
      dispatch(getSalesSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getFirms, getSales };
};

export default useStockCall;
