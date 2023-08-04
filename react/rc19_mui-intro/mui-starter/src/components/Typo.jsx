import React from "react";
// import { Typography } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Typo = () => {
  return (
    <Container sx={{ maxWidth: "xl" }}>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "",
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
      <Stack
        direction="row"
        spacing={5}
        mt={5}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button variant="contained" color="error">
          click
        </Button>
        <Button variant="contained">click</Button>
        <Button variant="">click</Button>
      </Stack>
    </Container>
  );
};

export default Typo;
