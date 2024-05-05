"use client";
import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import { Typography, Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const CardComp = ({ title, button, href }) => {
  const a = "secondary.light";
  return (
    <Card
      sx={{
        height: "250px",
        border: "5px solid",
        borderRadius: "20px",
        backgroundColor: "secondary.contrastText",
        borderColor: (theme) => theme.palette.secondary.light,
        width: { lg: "300px", md: "300px", sm: "300px", xs: "90%" },
      }}
    >
      <CardContent>
        <Typography sx={{ color: "secondary.light" }} className="cardTitle">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={href}>
          <Button sx={{ color: "secondary.light", textTransform: "none" }}>
            {button}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardComp;
