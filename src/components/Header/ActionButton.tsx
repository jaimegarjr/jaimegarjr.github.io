import { Button } from "@mui/material";
import React from "react";
import { handleClickUrl } from "../utils/handleClickUrl";

interface ActionButtonProps {
  label: string;
  variant?: "text" | "contained" | "outlined" | undefined;
  icon?: React.ReactNode;
  url?: string;
}

export function ActionButton({ label, variant, icon, url }: ActionButtonProps) {
  return (
    <Button
      sx={{
        backgroundColor: "#343434",
        textTransform: "none",
        fontFamily: "Montserrat",
        "&:hover": {
          backgroundColor: "#343434",
        },
      }}
      variant={variant}
      startIcon={icon}
      onClick={url ? () => handleClickUrl(url) : undefined}
    >
      {label}
    </Button>
  );
}
