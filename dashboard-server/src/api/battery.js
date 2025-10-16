// battery.js
// Purpose: Simulate battery performance data for dashboard display
export const getBatteryStatus = () => {
  // Return mock voltage, temperature, and charge level
  return {
    voltage: 400 + Math.random() * 20,  // Slight fluctuation
    temperature: 30 + Math.random() * 5, // Celsius
    chargeLevel: Math.floor(Math.random() * 100),
    health: "Good",
    timestamp: new Date().toISOString()
  };
};
