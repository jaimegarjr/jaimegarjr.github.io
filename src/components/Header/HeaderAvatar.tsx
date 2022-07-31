import { Avatar } from "@mui/material";
import React from "react";

interface HeaderAvatarProps {
  image: string;
}

export function HeaderAvatar({ image }: HeaderAvatarProps) {
  return (
    <div>
      <Avatar
        sx={{ height: 285, width: 285, boxShadow: "0px 1px 6px #0F0F0F" }}
        src={image}
      />
    </div>
  );
}
