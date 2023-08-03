import TextField from "@mui/material/TextField"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { useState } from "react"

const TextFieldComp = () => {
  const [err, setErr] = useState(false)
  return (
    <Container sx={{ mt: 4 }} maxWidth="md">
      <Typography variant="h4" mt={2} color={"secondary.dark"} align="center">
        Text Field
      </Typography>
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        placeholder="Enter your email"
        required
        fullWidth
        margin="normal"
        error={err}
        helperText={err && "Incorrect Email Format"}
      />
      <TextField
        id="password"
        label="Password"
        variant="filled"
        placeholder="Enter your password"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        id="name"
        label="Name"
        variant="standard"
        placeholder="Enter your name"
        required
        fullWidth
        margin="normal"
        color="error"
        // sx={{ backgroundColor: "error.light"}}
      />
    </Container>
  )
}

export default TextFieldComp
