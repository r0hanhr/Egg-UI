export const EggModules = [
  {
    id: 1,
    label: "Dashboard",
    path: "dashboard",
  },
  {
    id: 2,
    label: "Nursery",
    path: "nursery",
  },
  {
    id: 3,
    label: "Incubator Rooms",
    path: "incubatorrooms",
  },
  {
    id: 4,
    label: "Incubators",
    path: "incubators",
  },
  {
    id: 5,
    label: "Brooders",
    path: "brooders",
  },
  {
    id: 6,
    label: "Eggs",
    path: "eggs",
  },
];

export const DietModules = [
  {
    id: 1,
    label: "Ingredient",
    path: "ingredient",
  },
  {
    id: 2,
    label: "Recipe",
    path: "recipe",
  },
  {
    id: 3,
    label: "Diet",
    path: "diet",
  },
  {
    id: 4,
    label: "Feed Type",
    path: "feedtype",
  },
];

export const BreadCrumbsConstants = [
  {
    label: "Dashboard",
    path: "dashboard",
    parent: "Egg Module",
  },
  {
    label: "Nursery",
    path: "nursery",
    parent: "Egg Module",
  },
  {
    label: "Incubator Rooms",
    path: "incubatorrooms",
    parent: "Egg Module",
  },
  {
    label: "Incubators",
    path: "incubators",
    parent: "Egg Module",
  },
  {
    label: "Brooders",
    path: "brooders",
    parent: "Egg Module",
  },
  {
    label: "Egg List",
    path: "eggs",
    parent: "Egg Module",
  },
  {
    label: "Egg Details",
    path: "eggdetails",
    parent: "Egg List",
  },
  {
    label: "Ingredient",
    path: "ingredient",
    parent: "Diet",
  },
  {
    label: "Recipe",
    path: "recipe",
    parent: "Diet",
  },
  {
    label: "Diet",
    path: "diet",
    parent: "Diet",
  },
  {
    label: "Feed Type",
    path: "feedtype",
    parent: "Diet",
  },
];
