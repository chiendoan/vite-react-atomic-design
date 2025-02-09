import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/ui/molecules/Navbar";
import Sidebar from "@/components/ui/organisms/Sidebar.tsx";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Navbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
