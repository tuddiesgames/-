import ProductPage from "../component/ProductPage";

const iotProjects = [
    {
      name: 'Smart Home Automation System',
      description: 'Control and monitor home appliances remotely using a smartphone app. Features include lighting control, temperature regulation, security cameras, and more.',
      media: {
        type: 'image',
        url: '/images/smart-home-automation.jpeg',
      },
      price: "Based On Requirements"
    },
    {
      name: 'Auto Fingerprint Attendance System',
      description: 'Automated attendance system for schools, offices, and organizations. Uses fingerprint recognition technology for accurate and secure attendance tracking.',
      media: {
        type: 'image',
        url: '/images/fingerprint-attendance-system.jpeg',
      },
      price: "Based On Requirements"
    },
    {
      name: 'IoT Weather Station',
      description: 'Monitor weather conditions in real-time using sensors and IoT technology. Provides data on temperature, humidity, air pressure, and more, accessible from anywhere.',
      media: {
        type: 'image',
        url: '/images/iot-weather-station.jpeg',
      },
      price: "Based On Requirements"
    },
    {
      name: 'Smart Irrigation System',
      description: 'Optimize water usage in agriculture and landscaping with an IoT-based irrigation system. Automatically adjusts watering schedules based on weather forecasts and soil moisture levels.',
      media: {
        type: 'image',
        url: '/images/smart-irrigation-system.jpeg',
      },
      price: "Based On Requirements"
    },
    {
      name: 'IoT-based Health Monitoring System',
      description: 'Monitor vital signs and health parameters remotely using wearable sensors and IoT devices. Provides real-time health data to healthcare professionals and caregivers.',
      media: {
        type: 'image',
        url: '/images/health-monitoring-system.png',
      },
      price: "Based On Requirements"
    },
    {
      name: 'Home Energy Management System',
      description: 'Track and manage energy consumption in residential buildings. Helps users optimize energy usage, reduce utility bills, and contribute to environmental conservation.',
      media: {
        type: 'image',
        url: '/images/home-energy-management.png',
      },
      price: "Based On Requirements"
    },
    {
      name: 'Smart Parking System',
      description: 'IoT-enabled parking management system that helps drivers find available parking spots in urban areas. Reduces congestion and improves traffic flow.',
      media: {
        type: 'image',
        url: '/images/smart-parking-system.webp',
      },
      price: "Based On Requirements"
    },
    {
      name: 'IoT-based Asset Tracking System',
      description: 'Track the location and status of assets (e.g., vehicles, equipment, inventory) in real-time using IoT sensors and GPS technology. Enhances asset visibility and management.',
      media: {
        type: 'image',
        url: '/images/asset-tracking-system.webp',
      },
      price: "Based On Requirements"
    },
    {
      name: 'Smart Waste Management System',
      description: 'Optimize waste collection processes using IoT sensors installed in trash bins. Improves efficiency by scheduling pickups based on fill-level monitoring and route optimization.',
      media: {
        type: 'image',
        url: '/images/smart-waste-management.jpeg',
      },
      price: "Based On Requirements"
    },
    {
      name: 'IoT-based Home Security System',
      description: 'Enhance home security with an IoT-powered surveillance system. Features include motion detection, remote monitoring, and alerts for unauthorized access.',
      media: {
        type: 'image',
        url: '/images/home-security-system.jpeg',
      },
      price: "Based On Requirements"
    }
  ];
  

  const IotProjects = ()=>{
    return(
        <ProductPage websites={iotProjects} pageTitle="Our Iot Projects"/>
    )
  }

  export default IotProjects