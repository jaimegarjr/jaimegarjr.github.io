import React from 'react'
import { Button } from '@mui/material'

interface ButtonProps {
    label?: string;
    variant?: "text" | "outlined" | "contained" | undefined;
}

function ActionButton({label, variant, ...props}: ButtonProps ) {
  return (
    <div> 
     <Button variant={variant}>{label}</Button> 
    </div>
  );
}