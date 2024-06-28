import { useRoutes } from "react-router-dom";
import { RouteConstants } from "../constants/RouteConstants";

const RouterComponent = () => {
  const routes = useRoutes([...RouteConstants]);

  return routes;
};

export default RouterComponent;
