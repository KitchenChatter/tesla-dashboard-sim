// speed.js
// Purpose: Provide a focused speed data stream for the speedometer
export const getSpeedData = () => {
  return {
    currentSpeed: Math.floor(Math.random() * 120),
    averageSpeed: 60,
    unit: "km/h",
    timestamp: new Date().toISOString()
  };
};
