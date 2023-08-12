import axios from "axios";
import { fetchFail, fetchStart, getFirmsSuccess } from "../features/stockSlice";
import { useDispatch, useSelector } from "react-redux";

const useStockCall = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // getStockData("firms")
  // getStockData("sales")

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/stock/${url}/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(getStockSuccess({ data, url }));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/stock/firms/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(getFirmsSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getSales = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/stock/sales/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
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
