import { Button, Grid, Typography } from "@mui/material";

import { useEffect } from "react";
import { useSelector } from "react-redux";

import useStockCall from "../hooks/useStockCall";
import FirmCard from "../components/FirmCard";
const Firms = () => {
  // const { token } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

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
  const { firms } = useSelector((state) => state.stock);
  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Firms
      </Typography>
      <Button variant="contained">NEW FİRM</Button>

      <Grid container justifyContent={"center"} gap={2} spacing={3}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
