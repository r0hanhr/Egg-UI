import Box from "@mui/material/Box";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RouterComponent from "../../../routes";
import BreadcrumbComponent from "../../molecule/BreadcrumbsComponent";
import HeaderComponent from "../../molecule/HeaderComponent";
import SidebarComponent from "../../molecule/SidebarComponent";

const LayoutComponent = () => {
  return (
    <Box display="flex">
      <BrowserRouter>
        <SidebarComponent />
        <Box sx={{ flexGrow: 1 }} className="layout-style" component="main">
          <HeaderComponent />
          <Box className="px-3 py-2 pages-container">
            <BreadcrumbComponent />
            <Routes>
              <Route exact path="/" element={<Navigate to="/dashboard" />} />
            </Routes>
            <RouterComponent />
          </Box>
        </Box>
      </BrowserRouter>
    </Box>
  );
};

export default LayoutComponent;
