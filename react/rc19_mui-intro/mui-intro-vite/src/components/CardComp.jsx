import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import Grid from "@mui/material/Grid"

import data from "../data"

export default function CardComp() {
  return (
    <>
      <Typography variant="h4" m={4} color={"error.dark"} align="center">
        Card and Grid
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={4}
        justifyContent={"center"}
      >
        {data.map(({ id, text, img, name }) => (
          <Grid item key={id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={img} alt={name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {text}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
