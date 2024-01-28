import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  LayerGroup,
  Circle,
  LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SidebarMenu from "./SidebarMenu";

const { BaseLayer } = LayersControl;

const Map = () => {
  const position = [28.6139, 77.209]; // Coordinates for New Delhi, India
  const circleCenter = [28.6139, 77.209]; // Same coordinates for the center of the circle
  const circleRadius = 1000; // Radius in meters

  const [baseLayer, setBaseLayer] = useState("standard"); // Default base layer

  const handleBaseLayerChange = (event) => {
    setBaseLayer(event.name);
  };

  return (
    <div style={{ position: "relative" }}>
      <SidebarMenu />
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "650px", width: "100%" }}
      >
        <LayerGroup>
          <LayersControl position="topright">
            <BaseLayer checked name="standard">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </BaseLayer>
            <BaseLayer name="cycleMap">
              <TileLayer
                url="https://a.tile.thunderforest.com/cycle/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.thunderforest.com/maps/opencyclemap/">OpenCycleMap</a> contributors'
              />
            </BaseLayer>
            <BaseLayer name="transportMap">
              <TileLayer
                url="https://a.tile.thunderforest.com/transport/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.thunderforest.com/maps/transport/">Thunderforest Transport</a> contributors'
              />
            </BaseLayer>
          </LayersControl>
          <Circle
            center={circleCenter}
            pathOptions={{ fillColor: "blue", fillOpacity: 0.4 }}
            radius={circleRadius}
          />
        </LayerGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
