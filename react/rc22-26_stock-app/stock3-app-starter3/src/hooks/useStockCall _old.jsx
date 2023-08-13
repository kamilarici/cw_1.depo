import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

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
    const BASE_URL = "https://14108.fullstack.clarusway.com";

    try {
      await axios.delete(`${BASE_URL}/stock/${url}/${id}/`, {
        headers: { Authorization: `Token ${token} ` },
      });
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
  //   const getFirms = async () => {
  //     dispatch(fetchStart());
  //     const BASE_URL = "https://14108.fullstack.clarusway.com";

  //     try {
  //       const { data } = await axios(`${BASE_URL}/stock/firms/`, {
  //         headers: { Authorization: `Token ${token} ` },
  //       });
  //       dispatch(getFirmsSuccess(data));
  //       console.log(data);
  //     } catch (error) {
  //       dispatch(fetchFail());
  //       console.log(error);
  //     }
  //   };
  //   const getSales = async () => {
  //     dispatch(fetchStart());
  //     const BASE_URL = "https://14108.fullstack.clarusway.com";

  //     try {
  //       const { data } = await axios(`${BASE_URL}/stock/sales/`, {
  //         headers: { Authorization: `Token ${token} ` },
  //       });
  //       dispatch(getSalesSuccess(data));
  //       console.log(data);
  //     } catch (error) {
  //       dispatch(fetchFail());
  //       console.log(error);
  //     }
  //   };

  return { getStockData, deleteStockData };
  //   return { getFirms, getSales };
};

export default useStockCall;
