import { Button, Typography } from "@mui/material";

import { useEffect } from "react";
import { useSelector } from "react-redux";

import useStockCall from "../hooks/useStockCall";
const Firms = () => {
  // const { token } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const { getFirms } = useStockCall();
  // const { firms } = useSelector((state) => state.stock);
  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   const BASE_URL = "https://14108.fullstack.clarusway.com";

  //   try {
  //     const { data } = await axios(`${BASE_URL}/stock/firms/`, {
  //       headers: { Authorization: `Token ${token} ` },
  //     });
  //     dispatch(getFirmsSuccess(data));
  //     // console.log(data);
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getFirms();
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Firms
      </Typography>
      <Button variant="contained">NEW FİRM</Button>
    </div>
  );
};

export default Firms;
