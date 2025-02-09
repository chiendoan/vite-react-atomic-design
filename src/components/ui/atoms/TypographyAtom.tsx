import React from "react";
import { Typography } from "@mui/material";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
  children: React.ReactNode;
}

const TypographyAtom: React.FC<TypographyProps> = ({
  variant = "h6",
  children,
}) => {
  return <Typography variant={variant}>{children}</Typography>;
};

export default TypographyAtom;
