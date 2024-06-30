/* eslint-disable array-callback-return */
/* eslint-disable no-loop-func */
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BreadCrumbsConstants } from "../../../constants/NavConstants";

const BreadcrumbComponent = () => {
  const [pathNames, setPathNames] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const list = [...BreadCrumbsConstants];
    const paths = [];
    location.pathname?.split("/")?.map(item => {
      const path = list.find(x => x.path === item);
      if (path) paths.push(path);
    });

    setPathNames(paths);
  }, [location]);

  return (
    <Breadcrumbs className="py-2 fw-400" aria-label="breadcrumb">
      <Typography className="fs-p9rem link-fade">
        {pathNames[0]?.parent}
      </Typography>
      {pathNames.map((item, index) =>
        index === pathNames.length - 1 ? (
          <Typography key={index} className="fs-p9rem link-active">
            {item.label}
          </Typography>
        ) : (
          <Link
            key={index}
            underline="hover"
            className="fs-p9rem link-fade cursor-pointer"
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </Link>
        )
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbComponent;
