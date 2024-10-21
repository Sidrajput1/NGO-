import React, { useState } from 'react'
import EmpLayout from '../../layout/EmpLayout'
import axios from 'axios';


//const employeeId = JSON.parse(sessionStorage.getItem('userData')).user_id;

function ToggleLocation() {
    const employeeId = JSON.parse(sessionStorage.getItem('userData')).user_id;
    const [locationEnabled,setLocationEnabled] = useState(false);

    const toggleLocationSharing = async(enabled) => {
      try {
          const res = await axios.post('https://prabisvg.com/phpbox/updatelocation.php',{
            user_id: employeeId, // employee ID from session
            location_enabled: enabled ? 1 : 0, // 1 for enabled, 0 for disabled
          });
          if(res.data.status === 'success'){
            setLocationEnabled(enabled);
            console.log('Location permission updated successfully');
            if(enabled){
              startSendingLiveLocation();
            }else{
              stopSendingLiveLocation();
            }
          }else{
            console.log('Failed to update location permission:', res.data.message);
          }
          
      } catch (error) {
        console.error('Error updating location permission:', error);
      }
    };

    const startSendingLiveLocation = () => {
      const getLocation = () => {
        return new Promise((resolve,reject) => {
          if(!navigator.geolocation){
              reject('Geo Location is not supported by browser');
          }else{
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
      const sendLocation = async () => {
        try {
          const coords = await getLocation();
          await axios.post('https://prabisvg.com/phpbox/savelocation.php', {
            latitude: coords.latitude,
            longitude: coords.longitude,
            employee_id: employeeId, // Use employee ID from session
          });
        } catch (error) {
          console.error('Error fetching/sending location:', error);
        }
      };
  
      // Send live location every 30 seconds
      const intervalId = setInterval(() => {
        sendLocation();
      }, 30000);
  
      // Stop live location sharing if user disables it
     
    };
    const stopSendingLiveLocation = () => {
      clearInterval(intervalId);
    };
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