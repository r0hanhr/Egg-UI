import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BreadCrumbsConstants } from "../../../constants/NavConstants";

const BreadcrumbComponent = () => {
  const [pathNames, setPathNames] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setPathNames(location.pathname?.split("/"));

    const list = [...BreadCrumbsConstants];

    const findRoute = (routeArray, targetRoute) => {
      let result = [];

      const search = (node, basePath = "") => {
        let fullPath = basePath ? `${basePath}/${node.path}` : node.path;

        if (fullPath === targetRoute) {
          result.push(node);
          return true;
        }

        if (node.child) {
          node.child.map(item => {
            if (search(item, fullPath)) {
              result.push(node);
              return true;
            }
          });
        }

        return false;
      };

      for (let route of routeArray) {
        if (search(route)) {
          break;
        }
      }

      return result.reverse();
    };

    console.log(findRoute(list, location.pathname));
  }, [location]);

  return (
    <Breadcrumbs className="py-2 fw-400" aria-label="breadcrumb">
      {pathNames.map((item, index) =>
        index !== 0 ? (
          index === pathNames.length - 1 ? (
            <Typography key={index} className="fs-p9rem link-active">
              {item}
            </Typography>
          ) : (
            <Link
              key={index}
              underline="hover"
              className="fs-p9rem link-fade cursor-pointer"
            >
              MUI
            </Link>
          )
        ) : null
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbComponent;
