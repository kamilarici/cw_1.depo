import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const Course = ({ img, title, description }) => {
  return (
    <Card>
      <CardMedia sx={{ height: 150 }} image={img} title="filmlerim" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {/* //? body2 p etiketi gibi */}
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
    // <div>
    //   <img src={img} alt="" />
    //   <p>{title}</p>
    // </div>
  );
};

export default Course;
