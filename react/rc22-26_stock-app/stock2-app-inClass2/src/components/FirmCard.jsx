import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

export default function FirmCard({ firm }) {
  return (
    <Card
      sx={{
        p: 2,
        maxWidth: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm.address}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ p: 1, objectFit: "contain", height: 140 }}
        image={firm.image}
        title={firm.name}
        component="img"
      />

      <Typography variant="body2" color="text.secondary">
        {firm.phone}
      </Typography>

      <CardActions>
        <EditIcon />
        <DeleteOutlineIcon />
      </CardActions>
    </Card>
  );
}
