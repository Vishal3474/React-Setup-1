import React from "react";
import SideBarPage from "./SideBarPage";
import { Outlet } from "react-router-dom";

function MainLayout(props) {
  return (
    <div className=" ">
      <SideBarPage />

      <Outlet />
    </div>
  );
}

export default MainLayout;
