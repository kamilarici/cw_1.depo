// import { Typography,Button } from "@mui/material"

import Typography from "@mui/material/Typography"
//? Performans acisindan daha mantikli
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"

const Typo = () => {
  return (
    <Container maxWidth="md">
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

        <Typography variant="h2" mt={2} color={"koyuMor.light"}>
          Button Text
        </Typography>
        <Typography variant="h2" mt={2} color={"koyuMor.main"}>
          Button Text
        </Typography>
        <Typography variant="h2" mt={2} color={"koyuMor.dark"}>
          Button Text
        </Typography>
      </Box>

      <Stack
        direction="row"
        spacing={1}
        mt={4}
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="outlined" color="primary">
          Click
        </Button>
        <Button variant="contained" color="secondary">
          Click
        </Button>
        <Button variant="contained" color="koyuMor">
          Click
        </Button>
        <Button variant="contained" color="warning">
          Click
        </Button>
        <Button variant="contained" color="error">
          Click
        </Button>

        <Button
          variant="contained"
          sx={{ color: "purple", backgroundColor: "yellow" }}
        >
          Click
        </Button>

        <Button
          variant="contained"
          sx={{ color: "error.dark", backgroundColor: "warning.light" }}
        >
          Click
        </Button>
      </Stack>
    </Container>
  )
}

export default Typo
