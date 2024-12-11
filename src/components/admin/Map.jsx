import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import { Style, Icon } from "ol/style";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import AdminLayout from "../../layout/AdminLayout";
import axios from "axios";

function EmpMap() {
  const location = useLocation();
  const { latitude, longitude, employeeId } = location.state;
  console.log(location.state);

  useEffect(() => {
    // Initialize the map
    const map = new Map({
      target: "map", // The div ID where the map will be rendered
      layers: [
        new TileLayer({
          source: new OSM(), // OpenStreetMap as the tile layer
        }),
      ],
      view: new View({
        center: fromLonLat([longitude, latitude]), // Center the map on the employee's location
        zoom: 15, // Adjust zoom level for better visibility
      }),
    });

    // Add a marker for the employee's location
    const marker = new Feature({
      geometry: new Point(fromLonLat([longitude, latitude])),
    });

    // Style the marker with a custom indicator (you can change the icon source)
    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1], // Adjust anchor to center the icon properly
          src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg", // Icon for the marker
          scale: 2.5, // Adjust size of the marker
        }),
      })
    );

    // Create a vector source to hold the marker
    const vectorSource = new VectorSource({
      features: [marker],
    });

    // Create a vector layer to display the marker
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // Add the vector layer (marker) to the map
    map.addLayer(vectorLayer);
  }, [latitude, longitude]);

  // const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

  //     useEffect(() => {
  //         const fetchLiveLocation = async () => {
  //             try {
  //                 const res = await axios.get(`https://prabisvg.com/phpbox/get_live_location.php?employee_id=${employeeId}`);
  //                 if (res.data.status === 'success') {
  //                     const { latitude, longitude } = res.data.location;
  //                     setCoordinates({ latitude, longitude });
  //                     console.log(res.data.location);
  //                 }
  //             } catch (error) {
  //                 console.error('Error fetching location:', error);
  //             }
  //         };

  //         // Initialize the map
  //         const map = new Map({
  //             target: 'map',
  //             layers: [new TileLayer({ source: new OSM() })],
  //             view: new View({
  //                 center: fromLonLat([coordinates.longitude, coordinates.latitude]),
  //                 zoom: 15,
  //             }),
  //         });

  //         const marker = new Feature({
  //             geometry: new Point(fromLonLat([coordinates.longitude, coordinates.latitude])),
  //         });

  //         marker.setStyle(new Style({
  //             image: new Icon({
  //                 anchor: [0.5, 1],
  //                 src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg',
  //                 scale: 2.5,
  //             }),
  //         }));

  //         const vectorSource = new VectorSource({ features: [marker] });
  //         const vectorLayer = new VectorLayer({ source: vectorSource });
  //         map.addLayer(vectorLayer);

  //         // Update marker coordinates every 10 seconds
  //         const updateInterval = setInterval(fetchLiveLocation, 10000);

  //         return () => clearInterval(updateInterval);

  //     }, [employeeId, coordinates.latitude, coordinates.longitude]);

  return (
   
    <AdminLayout>
      <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
        <h2
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 1000,
            color: "white",
            background: "rgba(0, 0, 0, 0.5)",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "1.5rem", // Default for larger screens
            "@media (maxwidth: 600px)": {
              // For mobile screens
              fontSize: "1rem",
              padding: "8px",
            },
          }}
        >
          Employee {employeeId}'s Live Location
        </h2>
        <div id="map" style={{ height: "100%", width: "100%" }}></div>
      </div>
    </AdminLayout>
  );
}

export default EmpMap;
