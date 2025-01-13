// self.addEventListener('sync', (event) => {
//     if (event.tag === 'location-sync') {
//       event.waitUntil(sendLocationUpdates());
//     }
//   });
  
//   async function sendLocationUpdates() {
//     try {
//       const position = await getCurrentLocation();
//       const employeeId = await getEmployeeId();
  
//       await fetch('https://prabisvg.com/phpbox/savelocation.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           employee_id: employeeId,
//         }),
//       });
//       console.log('Background location sent');
//     } catch (error) {
//       console.error('Error sending location in background:', error);
//     }
//   }
  
//   function getCurrentLocation() {
//     return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(resolve, reject, {
//         enableHighAccuracy: true,
//       });
//     });
//   }
  
//   async function getEmployeeId() {
//     // Example: Retrieve employee ID from IndexedDB or Cache
//     return '123'; // Replace with dynamic logic
//   }
  

// Import Workbox precaching utilities
import { precacheAndRoute } from 'workbox-precaching';

// Cache assets generated during build
precacheAndRoute(self.__WB_MANIFEST);

// Sync event for background location updates
self.addEventListener('sync', (event) => {
  if (event.tag === 'location-sync') {
    event.waitUntil(sendLocationUpdates());
  }
});

// Function to send location updates
async function sendLocationUpdates() {
  try {
    const position = await getCurrentLocation();
    const employeeId = await getEmployeeId();

    await fetch('https://prabisvg.com/phpbox/savelocation.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        employee_id: employeeId,
      }),
    });
    console.log('Background location sent');
  } catch (error) {
    console.error('Error sending location in background:', error);
  }
}

// Function to get current location
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
    });
  });
}

// Mock function to get employee ID
async function getEmployeeId() {
  try {
    // Retrieve user data from sessionStorage
    const userData = sessionStorage.getItem("userData");
    if (!userData) {
      throw new Error("No user data found in sessionStorage.");
    }

    // Parse the user data and extract the user_id
    const { user_id } = JSON.parse(userData);
    if (!user_id) {
      throw new Error("user_id not found in sessionStorage data.");
    }

    return user_id;
  } catch (error) {
    console.error("Error retrieving employee ID:", error.message);
    // Return a fallback or handle error as needed
    return null; // Or handle appropriately
  }
}
