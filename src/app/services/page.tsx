'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import CommonTitle from '../component/CommonTitle';

const Service = () => {
  const router = useRouter();

  const serviceList = [
    {
      name: "Web Design & Development",
      route: "/web-design-development",
      description: "High-quality web design and development services to create stunning websites.",
      price: "$1000 - $5000",
      imageUrl: "/web-app.webp",
    },
    {
      name: "Mobile App Development",
      route: "/mobile-app-development",
      description: "Developing user-friendly mobile applications for various platforms.",
      price: "$2000 - $10000",
      imageUrl: "/app.jpeg",
    },
    {
      name: "Billing Software",
      route: "/billing-software",
      description: "Efficient billing software to manage your business finances.",
      price: "$500 - $3000",
      imageUrl: "/billing.jpeg",
    },
    {
      name: "Digital Marketing",
      route: "/digital-marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence.",
      price: "$800 - $5000",
      imageUrl: "digital.png",
    },
    {
      name: "Game Development",
      route: "/game-development",
      description: "Creative and engaging game development services.",
      price: "$5000 - $20000",
      imageUrl: "/game.jpeg",
    },
    {
      name: "IoT Projects",
      route: "/iot-projects",
      description: "Innovative IoT solutions to connect your devices and streamline operations.",
      price: "$3000 - $15000",
      imageUrl: "/IOT.png",
    },
    {
      name: "Business Innovative Solution",
      route: "/business-innovative-solution",
      description: "Tailored business solutions to foster innovation and growth.",
      price: "$1000 - $10000",
      imageUrl: "/bussiness.jpeg"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <CommonTitle pageTitle={"Our Services"}/>
      {serviceList.map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 mb-6 flex items-center cursor-pointer"
          onClick={()=>router.push(service.route)}
        >
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <p className="text-gray-900 font-semibold"><strong>Price: </strong>{service.price}</p>
          </div>
          <img src={service.imageUrl} alt={service.name} className="w-32 h-32 object-cover ml-6 rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default Service;