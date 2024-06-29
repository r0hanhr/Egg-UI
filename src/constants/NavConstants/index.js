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
    label: "Egg Module",
    child: [
      {
        label: "Dashboard",
        path: "dashboard",
      },
      {
        label: "Nursery",
        path: "nursery",
      },
      {
        label: "Incubator Rooms",
        path: "incubatorrooms",
      },
      {
        label: "Incubators",
        path: "incubators",
      },
      {
        label: "Brooders",
        path: "brooders",
      },
      {
        label: "Eggs",
        path: "eggs",
        child: [
          {
            label: "Details",
            path: "edddetails",
          },
        ],
      },
    ],
  },
  {
    label: "Diet",
    child: [
      {
        label: "Ingredient",
        path: "ingredient",
      },
      {
        label: "Recipe",
        path: "recipe",
      },
      {
        label: "Diet",
        path: "diet",
      },
      {
        label: "Feed Type",
        path: "feedtype",
      },
    ],
  },
];
