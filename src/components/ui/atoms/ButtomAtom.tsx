import React from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "secondary";
}

const ButtonAtom: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "contained",
  color = "primary",
}) => {
  return (
    <Button variant={variant} color={color} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonAtom;
