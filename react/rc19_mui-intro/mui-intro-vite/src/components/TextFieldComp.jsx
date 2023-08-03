import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

const TextFieldComp = () => {
  return (
    <Container sx={{ mt: 4 }} maxWidth="md">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Container>
  );
};

export default TextFieldComp;
