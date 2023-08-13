import { fetchFail, fetchStart } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getFirmsSuccess } from "../features/stockSlice";
const useStockCall = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getFirms = async () => {
    dispatch(fetchStart());
    const BASE_URL = "https://14108.fullstack.clarusway.com";

    try {
      const { data } = await axios(`${BASE_URL}/stock/firms/`, {
        headers: { Authorization: `Token ${token} ` },
      });
      dispatch(getFirmsSuccess(data));
      // console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  return { getFirms };
};

export default useStockCall;
