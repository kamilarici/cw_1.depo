import React from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
const TextFieldComp = () => {
  return (
    <Container sx={{ mt: 5 }} maxWidth="md">
      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        placeholder="enter your email"
        required
        fullWidth
        margin="normal"
        error={true}
        helperText={"incorrect email"}
      />
      <TextField
        id="filled-basic"
        label="password"
        variant="filled"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        required
        fullWidth
        margin="normal"
        color="error"
      />
    </Container>
  );
};

export default TextFieldComp;
