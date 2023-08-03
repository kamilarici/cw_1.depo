// import { Typography,Button } from "@mui/material"

import Typography from "@mui/material/Typography";
//? Performans acisindan daha mantikli
import Button from "@mui/material/Button";

const Typo = () => {
  return (
    <div>
      <Typography variant="h5" component="h1" color="lightcoral" mt={4}>
        MUI Typo
      </Typography>
      <Typography variant="button" color="lightcoral" mt={4}>
        MUI Typo
      </Typography>
      <Typography variant="button" color="lightcoral" mt={4}>
        MUI Typo
      </Typography>
      <Typography
        sx={{ color: "blue", backgroundColor: "red" }}
        variant="button"
        color="lightcoral"
        mt={4}
      >
        MUI Typo
      </Typography>
    </div>
  );
};

export default Typo;
