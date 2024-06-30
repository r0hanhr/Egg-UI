import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const TabListComponent = ({ tabList = [] }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="w-100">
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          "& .css-1aquho2-MuiTabs-indicator": {
            backgroundColor: "#37BD69 !important",
          },
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          {tabList.map((item, index) => (
            <Tab
              sx={{
                "&.Mui-selected": {
                  color: "#37BD69 !important",
                },
              }}
              key={index}
              label={item.label}
            />
          ))}
        </Tabs>
      </Box>
      <Box className="my-3">
        {tabList.length > 0 && tabList[value]?.children}
      </Box>
    </Box>
  );
};

export default TabListComponent;
