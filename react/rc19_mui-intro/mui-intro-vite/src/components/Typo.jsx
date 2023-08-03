// import { Typography,Button } from "@mui/material"

import Typography from "@mui/material/Typography";
//? Performans acisindan daha mantikli
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Typo = () => {
  return (
    <Container>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "1px solid tomato",
        }}
      >
        <Typography variant="h6" component="h1" color="lightcoral" mt={4}>
          MUI Typo
        </Typography>

        <Typography variant="subtitle2" color="palegreen">
          MUI Typo
        </Typography>

        {/* span */}
        <Typography variant="button" mt={2}>
          Button Text
        </Typography>

        {/* p */}
        <Typography
          variant="body2"
          sx={{ color: "blue", backgroundColor: "palevioletred", mt: "1rem" }}
          align="center"
        >
          Button Text
        </Typography>
      </Box>
    </Container>
  );
};

export default Typo;
