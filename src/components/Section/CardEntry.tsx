import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { handleClickUrl } from "../utils/handleClickUrl";

interface CardEntryProps {
  icon: string;
  title: string;
  description: string;
  dates: string;
  github?: string;
  live?: string;
}

export function CardEntry({
  icon,
  title,
  description,
  dates,
  github,
  live,
}: CardEntryProps) {
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
            sx={{
              height: 118,
              width: 118,
              boxShadow: "0px 1px 4px #161616",
              marginBottom: "10px",
            }}
            src={icon}
          />

          <Grid item>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
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
              </Grid>
              {github && (
                <Grid item>
                  <IconButton
                    sx={{ color: "white", padding: 0 }}
                    onClick={() => handleClickUrl(github)}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Grid>
              )}
              {live && (
                <Grid item>
                  <IconButton
                    sx={{ color: "white", padding: 0 }}
                    onClick={() => handleClickUrl(live)}
                  >
                    <LaunchIcon />
                  </IconButton>
                </Grid>
              )}
            </Grid>
          </Grid>

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
