import React from "react";
// import { Typography } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
const Typo = () => {
  return (
    <Container sx={{ maxWidth: "sm", justifyContent: "center" }}>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1px solid red",
        }}
      >
        <Typography variant="h2" component={"h3"} color={"black"} mt={8}>
          Typo mui
        </Typography>
        <Typography
          variant={"subtitle"}
          component={"h3"}
          color={"black"}
          mt={8}
        >
          Typo mui
        </Typography>
        <Typography variant="body1" color={"black"} mt={8}>
          Typo mui
        </Typography>
        <br />
        <hr />
        <Typography variant="button" color={"black"} mt={8}>
          button(p)
        </Typography>
        <hr />
        <Typography
          variant="body2"
          color={"black"}
          mt={8}
          sx={{
            color: "blue",
            backgroundColor: "salmon",
            mt: "2rem",
            padding: "2rem",
          }}
          align="center"
        >
          body2
        </Typography>
      </Box>
    </Container>
  );
};

export default Typo;
