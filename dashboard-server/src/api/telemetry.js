// telemetry.js
// Purpose: Provide mock telemetry data such as GPS, speed, and system status
export const getTelemetryData = () => {
  // Return static or random values to simulate live vehicle data
  return {
    vehicleId: "ModelX-001",
    gps: {
      lat: 37.3947,  // Tesla HQ coords for realism
      lon: -122.1503
    },
    speed: Math.floor(Math.random() * 120), // Simulate variable speed
    systemStatus: "online",
    timestamp: new Date().toISOString()
  };
};
