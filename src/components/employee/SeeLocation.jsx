import React, { useEffect, useRef } from 'react'
import EmpLayout from '../../layout/EmpLayout';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Icon, Style } from 'ol/style';
import axios from 'axios';

function SeeLocation() {
    const mapRef = useRef();

    
    // useEffect(()=>{
    //     const fetchLocation = async() => {
    //         const response = await axios.get('https://your-backend-url/get-locations.php');
    //         const { locations } = response.data;

    //         const features = locations.map(location => new Feature({
    //             geometry: new Point(fromLonLat([location.longitude, location.latitude])),
    //             name: `Employee ${location.employee_id}`,
    //           }));
    //     }
    // },[]);

    useEffect(() => {
        const fetchLocations = async () => {
          try {
            const response = await axios.get('https://prabisvg.com/phpbox/get_location.php');
            const { status, locations } = response.data;
    
            if (status !== 'success') {
              console.error('Failed to fetch locations');
              return;
            }
    
            const features = locations.map(location => new Feature({
              geometry: new Point(fromLonLat([location.longitude, location.latitude])),
              name: `Employee ${location.employee_id}`,
            }));
    
            const vectorSource = new VectorSource({ features });
            const vectorLayer = new VectorLayer({
              source: vectorSource,
              style: new Style({
                image: new Icon({
                  anchor: [0.5, 0.5],
                  anchorXUnits: 'fraction',
                  anchorYUnits: 'fraction',
                  src: 'https://cdn-icons-png.flaticon.com/512/25/25694.png', 
                  rotation: 0,
                  scale:0.1,
                }),
              }),
            });
    
            const map = new Map({
              target: mapRef.current,
              layers: [
                new TileLayer({
                  source: new OSM(),
                }),
                vectorLayer,
              ],
              view: new View({
                center: fromLonLat([locations[0].longitude, locations[0].latitude]),
                zoom: 12,
              }),
            });
    
            return () => {
              map.dispose();
            };
          } catch (error) {
            console.error('Error fetching locations:', error);
          }
        };
    
        fetchLocations();
      }, []);
  return (
    <EmpLayout>
        <div ref={mapRef} style={{ width: '100%', height: '600px' }} />
    </EmpLayout>
  )
}

export default SeeLocation