import React from "react";
import { Route } from "react-router-dom";
import SideBar from "./SideBar";
import Users from "./Users";
import Posts from "./Posts";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Route path="/admin/users" component={Users} />
      <Route path="/admin/posts" component={Posts} />
    </div>
  );
};

export default Dashboard;
