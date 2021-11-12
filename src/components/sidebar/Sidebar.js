import React from "react";
import { Avatar } from "@material-ui/core";
import "./sidebar.css";

function Sidebar() {
  
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
   )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Ram meena</h2>
        <h4>rambabu.maina01@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p> Who viewed your profile: </p>
          <p className="sidebar__statNumber">70</p>
        </div>

        <div className="sidebar__stat">
          <p>Conncetions</p>
          <p className="sidebar__statNumber">200</p>
        </div>  
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>

        {recentItem('reactjs')}
        {recentItem('Java Developer')}
        {recentItem('Go nuts')}
        {recentItem('GeeksforGeeks')}
      </div>
    </div>
  );
}

export default Sidebar;
