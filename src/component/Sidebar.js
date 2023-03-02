import { Icon } from "@mui/material";
import React from "react";

import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "../styles/component/Sidebar.css";

function Sidebar() {
  return (
    <Navigation
      // you can use your own router's api to get pathname
      activeItemId="/management/members"
      onSelect={({ itemId }) => {
        // maybe push to the route
      }}
      items={[
        {
          title: "Trang chủ",
          itemId: "/dashboard",
          // you can use your own custom Icon component as well
          // icon is optional
        },
        {
          title: "Hoạt động",
          itemId: "/management",
          subNav: [
            {
              title: "Projects",
              itemId: "/management/projects",
            },
            {
              title: "Members",
              itemId: "/management/members",
            },
          ],
        },
        {
          title: "Trang web và ứng dụng",
          itemId: "/another",
          subNav: [
            {
              title: "Teams",
              itemId: "/management/teams",
            },
          ],
        },
      ]}
    />
  );
}
export default Sidebar;
