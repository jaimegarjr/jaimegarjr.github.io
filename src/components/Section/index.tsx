import React from "react";
import { Typography, Grid } from "@mui/material";
import { CardEntry } from "./CardEntry";

interface Entry {
  icon: string;
  title: string;
  description: string;
  dates: string;
  url?: string;
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
          marginBottom: "10px",
        }}
      >
        {title}
      </Typography>
      <Grid
        container
        columnGap={5}
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
      >
        {listItems.map((e) => {
          return (
            <Grid
              item
              sx={{
                marginBottom: "10px",
              }}
            >
              <CardEntry
                icon={e.icon}
                title={e.title}
                description={e.description}
                dates={e.dates}
                url={e.url ? e.url : undefined}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
