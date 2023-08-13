import { useDispatch } from "react-redux";

import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";
const useStockCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  //? ******************************************
  const getStockData = async (url) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken(`/stock/${url}/`);

      dispatch(getStockSuccess({ data, url }));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  //?önce sil sonra get isteği atmak lazım sayfadaki güncellemeyi yapmak için
  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.delete(`/stock/${url}/${id}/`);

      //? yukarısındaki fonksiyon ile sildik ve içine url yolladık ki nereden silecek bilsin ve id yolladık ki hangi ürünü silecek bilsin
      //! alttaki fonksiyon ise get isteğidir silme sonrası sayfayı yeniliyor.içine verilen url ile nereyi yenileyeceğini yollamak zorundayız
      toastSuccessNotify(`${url} başarili şekilde silinmiştir`);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} delete işlemi  başarisiz`);
      console.log(error);
    }
  };
  //? *********************************************

  return { getStockData, deleteStockData };
  //   return { getFirms, getSales };
};

export default useStockCall;
