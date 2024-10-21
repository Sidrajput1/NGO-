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
//  const location = useLocation();
//   const { employeeId } = location.state; // Only employeeId is passed, latitude and longitude will be fetched
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);
//   const [vectorLayer, setVectorLayer] = useState(null);




// const fetchLocation = async () => {
//     try {
//       const response = await axios.get(`https://prabisvg.com/phpbox/getliveemployee.php?employee_id=${employeeId}`);
//       const { latitude, longitude } = response.data;

//       if (marker) {
//         // Update the marker's position if it exists
//         const newPosition = new Point(fromLonLat([longitude, latitude]));
//         marker.setGeometry(newPosition);

//         // Optionally, recenter the map based on the new location
//         map.getView().setCenter(fromLonLat([longitude, latitude]));
//       }
//     } catch (error) {
//       console.error('Error fetching employee location:', error);
//     }
//   };

//   useEffect(() => {
//     // Initialize the map
//     const olMap = new Map({
//       target: 'map',
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       view: new View({
//         center: fromLonLat([0, 0]), // Set an initial center (it will be updated later)
//         zoom: 15,
//       }),
//     });

//     // Create a marker for the employee's location
//     const olMarker = new Feature({
//       geometry: new Point(fromLonLat([0, 0])), // Set an initial position (it will be updated later)
//     });

//     olMarker.setStyle(new Style({
//       image: new Icon({
//         anchor: [0.5, 1],
//         src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg',
//         scale: 0.1,
//       }),
//     }));

//     // Create a vector source and vector layer for the marker
//     const olVectorSource = new VectorSource({
//       features: [olMarker],
//     });
//     const olVectorLayer = new VectorLayer({
//       source: olVectorSource,
//     });

//     // Add the vector layer to the map
//     olMap.addLayer(olVectorLayer);

//     // Store map, marker, and vectorLayer in state
//     setMap(olMap);
//     setMarker(olMarker);
//     setVectorLayer(olVectorLayer);

//     // Fetch the employee's location every 10 seconds
//     const intervalId = setInterval(() => {
//       fetchLocation();
//     }, 10000); // Fetch every 10 seconds

//     // Cleanup interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);
useEffect(() => {
    // Initialize the map
    const map = new Map({
      target: 'map',  // The div ID where the map will be rendered
      layers: [
        new TileLayer({
          source: new OSM(),  // OpenStreetMap as the tile layer
        }),
      ],
      view: new View({
        center: fromLonLat([longitude, latitude]),  // Center the map on the employee's location
        zoom: 15,  // Adjust zoom level for better visibility
      }),
    });

    // Add a marker for the employee's location
    const marker = new Feature({
      geometry: new Point(fromLonLat([longitude, latitude])),
    });

    // Style the marker with a custom indicator (you can change the icon source)
    marker.setStyle(new Style({
      image: new Icon({
        anchor: [0.5, 1],  // Adjust anchor to center the icon properly
        src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg',  // Icon for the marker
        scale: 2.5,  // Adjust size of the marker
      }),
    }));

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

  return (
    <AdminLayout>
       <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <h2 style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        zIndex: 1000,
        color: 'white',
        background: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        borderRadius: '8px'
      }}>
        Employee {employeeId}'s Live Location
      </h2>
      <div id="map" style={{ height: '100%', width: '100%' }}></div>
    </div>
    </AdminLayout>
  );
}

export default EmpMap;
