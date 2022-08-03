import { Avatar, Card, CardContent, Typography, Grid } from "@mui/material";
import React from "react";

interface CardEntryProps {
  icon: string;
  title: string;
  description: string;
  dates: string;
}

export function CardEntry({ icon, title, description, dates }: CardEntryProps) {
  return (
    <Card
      sx={{
        backgroundColor: "#343434",
        borderRadius: "10px",
        display: "inline-block",
        padding: "16px",
        minWidth: 300,
      }}
    >
      <CardContent
        sx={{
          "&:last-child": {
            paddingBottom: "16px",
          },
        }}
      >
        <Grid
          container
          direction={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            sx={{ height: 118, width: 118, boxShadow: "0px 1px 4px #161616" }}
            src={icon}
          />
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 22,
              color: "white",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: 18,
              color: "white",
            }}
          >
            {description}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: 18,
              color: "white",
            }}
          >
            {dates}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
