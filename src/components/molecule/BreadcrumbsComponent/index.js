import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

const BreadcrumbComponent = () => {
  return (
    <Breadcrumbs className="py-2 fw-400" aria-label="breadcrumb">
      <Link underline="hover" className="fs-p9rem link-fade cursor-pointer">
        MUI
      </Link>
      <Typography className="fs-p9rem link-active">Breadcrumbs</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbComponent;
