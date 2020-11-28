import React, { useEffect, useState } from "react";
import "./AppMap.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./util";

const casesTypeColor = {
  cases: {
    hex: "#CC1034",
  },

  recovered: {
    hex: "#7dd71d",
  },

  deaths: {
    hex: "#fb4443",
  },
};
function AppMap({ center, zoom, countries, caseType }) {
  const [color, setColor] = useState({});
  useEffect(() => {
    setColor(casesTypeColor[caseType]);
  }, [caseType]);
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, caseType, color)}
      </MapContainer>
    </div>
  );
}

export default AppMap;
