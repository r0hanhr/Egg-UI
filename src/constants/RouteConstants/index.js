import PageNotFound from "../../pages/404";
import Brooders from "../../pages/Brooders";
import Dashboard from "../../pages/Dashboard";
import Diet from "../../pages/Diet";
import Eggs from "../../pages/Eggs";
import EggDetails from "../../pages/Eggs/EggDetails";
import FeedType from "../../pages/FeedType";
import IncubatorRooms from "../../pages/IncubatorRooms";
import Incubators from "../../pages/Incubators";
import Ingredient from "../../pages/Ingredient";
import Nursery from "../../pages/Nursery";
import Recipe from "../../pages/Recipe";

export const RouteConstants = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/nursery",
    element: <Nursery />,
  },
  {
    path: "/incubatorrooms",
    element: <IncubatorRooms />,
  },
  {
    path: "/incubators",
    element: <Incubators />,
  },
  {
    path: "/brooders",
    element: <Brooders />,
  },
  {
    path: "/eggs",
    element: <Eggs />,
  },
  {
    path: "/eggs/eggdetails",
    element: <EggDetails />,
  },
  {
    path: "/ingredient",
    element: <Ingredient />,
  },
  {
    path: "/recipe",
    element: <Recipe />,
  },
  {
    path: "/diet",
    element: <Diet />,
  },
  {
    path: "/feedtype",
    element: <FeedType />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
