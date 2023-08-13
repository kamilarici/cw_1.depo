import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import DeleteOutLineIcon from "@mui/icons-material/DeleteOutLine";
import EditIcon from "@mui/icons-material/Edit";

export default function FirmCard({ firm }) {
  console.log(firm);
  return (
    <Card
      sx={{
        p: 4,
        width: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
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
        sx={{ p: 2, height: 200, objectFit: "contain" }}
        image={firm.image}
        title={firm.name}
        component={"img"}
      />
      <Typography variant="body2" color="text.secondary">
        {firm.phone}
      </Typography>
      <CardActions>
        <EditIcon />
        <DeleteOutLineIcon />
      </CardActions>
    </Card>
  );
}
