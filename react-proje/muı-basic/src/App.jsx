import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Course from "./Course";
import logo1 from "./img/1972.jpg";
import logo2 from "./img/1995.jpg";
import logo3 from "./img/2005.jpg";
import logo4 from "./img/2009.jpg";
import TypographyDers from "./TypographyDers";
function App() {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ fontSize: "30px" }}>KART PROJESİ</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              img={logo1}
              title="film1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis non in voluptatum quis excepturi saepe obcaecati cupiditate voluptatibus quaerat."
            />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Course
              img={logo2}
              title="film2"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis non in voluptatum quis excepturi saepe obcaecati cupiditate voluptatibus quaerat."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              img={logo3}
              title="film3"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis non in voluptatum quis excepturi saepe obcaecati cupiditate voluptatibus quaerat."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              img={logo4}
              title="film4"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis non in voluptatum quis excepturi saepe obcaecati cupiditate voluptatibus quaerat."
            />
          </Grid>
        </Grid>
        <TypographyDers />
      </Container>
    </>
  );
}

export default App;
