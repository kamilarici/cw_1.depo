import { deepPurple, pink, amber } from "@mui/material/colors";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import PaymentsIcon from "@mui/icons-material/Payments";
import { Grid, Paper, Avatar } from "@mui/material";
const KpiCards = () => {
  const cardData = [
    {
      id: 1,
      icon: <MonetizationOnIcon sx={{ fontSize: "2rem" }} />,
      bgColor: deepPurple[200],
      color: deepPurple[700],
      title: "sales",
      value: "$48000",
    },
    {
      id: 1,
      icon: <ShoppingCartIcon sx={{ fontSize: "2rem" }} />,
      bgColor: pink[200],
      color: pink[700],
      title: "profit",
      value: "$32000",
    },
    {
      id: 1,
      icon: <PaymentsIcon sx={{ fontSize: "2rem" }} />,
      bgColor: amber[200],
      color: amber[700],
      title: "purchases",
      value: "$4800",
    },
  ];
  return (
    <div>
      <Grid container>
        {cardData.map((item) => (
          <Grid item>
            <Paper>
              <Avatar
                sx={{
                  bgcolor: item.bgColor,
                  color: item.color,
                  width: 70,
                  height: 70,
                }}
              >
                {item.icon}
              </Avatar>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default KpiCards;
