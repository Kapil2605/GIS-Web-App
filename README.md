# GIS Web App using React
This repository contains a simple GIS (Geographic Information System) web application built using React. The application allows users to visualize a map with various base layers and includes a sidebar menu with interactive features.

### Map Component (Map.js)
The Map.js file contains the main React component responsible for rendering the map. It utilizes the react-leaflet library for working with Leaflet maps.

## Features:
Displays a map centered at New Delhi, India.
Includes a sidebar menu (SidebarMenu) for additional functionality.
Supports different base layers: standard, cycle map, and transport map.
Displays a circular overlay on the map (circle with a specified radius).
## Usage:
### Install dependencies:
npm install

### Run the application:
npm start

Open your browser and navigate to http://localhost:3000 to view the GIS web app.

### Sidebar Menu Component (SidebarMenu.js)
The SidebarMenu.js file contains a React component (SidebarMenu) responsible for rendering a sidebar menu with interactive items.

## Features:
Menu items: About us, Search Bar, GPS Traces, Show My Location.
Clicking on a menu item triggers an action and may display additional content in a popup.

## Styling:
Styles are defined in a separate CSS file (SidebarMenu.css).

### App Component (App.js)
The App.js file is the entry point of the application and renders the Map component.

### Components:
Map: The main component for displaying the GIS map.
SidebarMenu: The sidebar menu component.

### Usage:
The App component can be extended to include additional features or components as needed.

# Getting Started
### Clone the repository:
git clone https://github.com/your-username/your-repo.git

### Navigate to the project directory:
cd your-repo

### Install dependencies:
npm install

### Run the application:
npm start

Open your browser and navigate to http://localhost:3000 to view the GIS web app.

## Dependencies
React
React-Leaflet
