import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Firms = () => {
  const { token } = useSelector((state) => state.auth);
  const getFirms = async () => {
    const BASE_URL = "https://14108.fullstack.clarusway.com";

    try {
      const { data } = await axios(`${BASE_URL}/stock/firms/`, {
        headers: { Authorization: `Token ${token} ` },
      });
      console.log(data);
    } catch (error) {
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
