import { Button } from "@mui/material";
import React from "react";

interface ActionButtonProps {
  label: string;
  variant?: "text" | "contained" | "outlined" | undefined;
  icon?: React.ReactNode;
}

export function ActionButton({ label, variant, icon }: ActionButtonProps) {
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
    >
      {label}
    </Button>
  );
}
