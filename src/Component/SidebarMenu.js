import React, { useState } from "react";
import "./SidebarMenu.css"; // Include a CSS file for styling

const SidebarMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const closeSidebar = () => {
    setActiveMenuItem(null);
  };

  return (
    <div className={`sidebar-menu ${activeMenuItem !== null ? "active" : ""}`}>
      <div className="menu-item" onClick={() => handleMenuItemClick(3)}>
        About us
      </div>
      <div className="menu-item" onClick={() => handleMenuItemClick(3)}>
        Search Bar
      </div>

      <div className="menu-item" onClick={() => handleMenuItemClick(1)}>
        GPS Traces
      </div>
      <div className="menu-item" onClick={() => handleMenuItemClick(2)}>
        Show My Location
      </div>
      {activeMenuItem !== null && (
        <div className="popup-div">
          <h3>Content for Popup Div {activeMenuItem}</h3>
          <button onClick={closeSidebar}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
