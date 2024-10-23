import React, { useEffect, useRef, useState } from 'react'
import EmpLayout from '../../layout/EmpLayout'
import axios from 'axios';


//const employeeId = JSON.parse(sessionStorage.getItem('userData')).user_id;

function ToggleLocation() {
    const employeeId = JSON.parse(sessionStorage.getItem('userData')).user_id;
    const [locationEnabled,setLocationEnabled] = useState(false);
    //const locationIntervalRef = useRef(null);
    const watchIdRef = useRef(null);

    // method - 1 using setInterval 
    // const toggleLocationSharing = async(enabled) => {
    //   try {
    //       const res = await axios.post('https://prabisvg.com/phpbox/updatelocation.php',{
    //         user_id: employeeId, // employee ID from session
    //         location_enabled: enabled ? 1 : 0, // 1 for enabled, 0 for disabled
    //       });
    //       if(res.data.status === 'success'){
    //         setLocationEnabled(enabled);
    //         console.log('Location permission updated successfully');
    //         if(enabled){
    //           startSendingLiveLocation();
    //         }else{
    //           stopSendingLiveLocation();
    //         }
    //       }else{
    //         console.log('Failed to update location permission:', res.data.message);
    //       }
          
    //   } catch (error) {
    //     console.error('Error updating location permission:', error);
    //   }
    // };
    // const getLocation = () => {
    //   return new Promise((resolve, reject) => {
    //     if (!navigator.geolocation) {
    //       reject('Geo Location is not supported by browser');
    //     } else {
    //       navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //           resolve(position.coords);
    //         },
    //         (error) => {
    //           reject(error);
    //         },
    //         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    //       );
    //     }
    //   });
    // };
  
    // const sendLocation = async () => {
    //   try {
    //     const coords = await getLocation();
    //     await axios.post('https://prabisvg.com/phpbox/savelocation.php', {
    //       latitude: coords.latitude,
    //       longitude: coords.longitude,
    //       employee_id: employeeId,
    //     });
    //     console.log('Location sent:', coords);
    //   } catch (error) {
    //     console.error('Error fetching/sending location:', error);
    //   }
    // };
  
    // const startSendingLiveLocation = () => {
    //   if (locationIntervalRef.current) return; // Prevent multiple intervals
  
    //   locationIntervalRef.current = setInterval(() => {
    //     sendLocation();
    //   }, 30000);  // 30 seconds interval
    // };
  
    // const stopSendingLiveLocation = () => {
    //   if (locationIntervalRef.current) {
    //     clearInterval(locationIntervalRef.current);
    //     locationIntervalRef.current = null;  // Clear the interval reference
    //   }
    // };
  
    // useEffect(() => {
    //   // Cleanup on component unmount or when location is disabled
    //   return () => stopSendingLiveLocation();
    // }, []);

    // method -2 using watchLocation();

    const toggleLocationSharing = async (enabled) => {
      try {
        const res = await axios.post('https://prabisvg.com/phpbox/updatelocation.php', {
          user_id: employeeId, // employee ID from session
          location_enabled: enabled ? 1 : 0, // 1 for enabled, 0 for disabled
        });
        
        if (res.data.status === 'success') {
          setLocationEnabled(enabled);
          console.log('Location permission updated successfully');
          
          if (enabled) {
            startSendingLiveLocation(); // Start live location tracking
          } else {
            stopSendingLiveLocation(); // Stop live location tracking
          }
        } else {
          console.log('Failed to update location permission:', res.data.message);
        }
      } catch (error) {
        console.error('Error updating location permission:', error);
      }
    };
    
    // Get the employee's current location (used only once)
    const getLocation = () => {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject('Geo Location is not supported by browser');
        } else {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve(position.coords);
            },
            (error) => {
              reject(error);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
        }
      });
    };
    
    // Send the employee's current location to the server
    const sendLocation = async (coords) => {
      try {
        await axios.post('https://prabisvg.com/phpbox/savelocation.php', {
          latitude: coords.latitude,
          longitude: coords.longitude,
          employee_id: employeeId,
        });
        console.log('Location sent:', coords);
      } catch (error) {
        console.error('Error sending location:', error);
      }
    };
    
    // Start tracking live location using watchPosition()
    const startSendingLiveLocation = () => {
      if (!navigator.geolocation) {
        console.error('Geo Location is not supported by this browser');
        return;
      }
    
      // Prevent multiple watchPosition calls
      if (watchIdRef.current) return;
    
      watchIdRef.current = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          sendLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error watching position:', error);
        },
        {
          enableHighAccuracy: true, // GPS for better accuracy
          timeout: 30000,           // Max waiting time for a new position
          maximumAge: 2000,            // No caching of positions
        }
      );
    };
    
    // Stop live location tracking using clearWatch()
    const stopSendingLiveLocation = () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
        watchIdRef.current = null; // Reset the watchId reference
        console.log('Stopped live location tracking');
      }
    };
    
    useEffect(() => {
      // Cleanup on component unmount or when location sharing is disabled
      return () => stopSendingLiveLocation();
    }, []);
    
  
  return (
   <EmpLayout>
    <div className=" p-6 mx-auto rounded-lg shadow-md transition-transform transform hover:scale-105">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">Location Sharing</h3>
    <p className="text-gray-600 mb-4">Enable or disable live location sharing:</p>
    <button
      onClick={() => toggleLocationSharing(!locationEnabled)}
      className={`px-4 py-2 rounded-md font-semibold text-white ${locationEnabled ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'}`}
    >
      {locationEnabled ? 'Disable Location Sharing' : 'Enable Location Sharing'}
    </button>
  </div>
   </EmpLayout>
  )
}

export default ToggleLocation