import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { getFirmsSuccess } from "../features/stockSlice";
const Firms = () => {
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
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

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
