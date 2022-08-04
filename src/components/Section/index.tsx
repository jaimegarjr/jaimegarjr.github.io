import React from "react";
import { Typography, Grid } from "@mui/material";
import { CardEntry } from "./CardEntry";

interface Entry {
  icon: string;
  title: string;
  description: string;
  dates: string;
}

interface SectionProps {
  title: string;
  listItems: Entry[];
}

export function Section({ title, listItems }: SectionProps) {
  return (
    <div>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: 36,
          color: "#FFFFFF",
        }}
      >
        {title}
      </Typography>
      <Grid
        container
        sx={{
          flexWrap: "nowrap",
          overflowY: "hidden",
          overflowX: "auto",
          "::-webkit-scrollbar": {
            height: "10px",
            borderRadius: "5px",
          },
          "::-webkit-scrollbar-track": {
            borderRadius: "5px",
            background: "#343434",
          },
          "::-webkit-scrollbar-thumb:horizontal": {
            borderRadius: "5px",
            background: "white",
          },
        }}
        spacing={5}
      >
        {listItems.map((e) => {
          return (
            <Grid item>
              <CardEntry
                icon={e.icon}
                title={e.title}
                description={e.description}
                dates={e.dates}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
