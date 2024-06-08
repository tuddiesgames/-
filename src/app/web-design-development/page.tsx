// pages/WebsiteTypes.tsx
'use client'

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter hook
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import ProductCard from '../component/productCard';
import ProductPage from '../component/ProductPage';

const WebsiteTypes: React.FC = () => {
  const router = useRouter(); // Initialize useRouter hook
  
  const handleBack = () => {
    router.back(); // Call router.back() to navigate back
  };

  return (
    <div className="container mx-auto p-4">
          <ProductPage
            websites={websites}
            pageTitle ="Our Website Services"
          />
      </div>
  );
};

export default WebsiteTypes;

const websites = [
  {
    name: "E-commerce Website",
    description: "Facilitates online buying and selling of goods or services.",
    price: "$1000 - $50000",
    media: {
      type: "image",
      url: "/eCommerce.png"
    }
  },
  {
    name: "Blog",
    description: "Consists of regularly updated posts or articles on various topics.",
    price: "$500 - $10000",
    media: {
      type: "image",
      url: "/blog.jpeg"
    }
  },
  {
    name: "Corporate Website",
    description: "Represents a company or organization online with information about its products or services.",
    price: "$500 - $10000",
    media: {
      type: "image",
      url: "/Corporate.jpeg"
    }
  },
  {
    name: "Portfolio Website",
    description: "Showcases the work or projects of individuals such as artists, designers, and photographers.",
    price: "$50 - $5000",
    media: {
      type: "image",
      url: "/portfolio.png"
    }
  },
  {
    name: "Educational Website",
    description: "Provides information, resources, and courses on academic subjects and skills development.",
    price: "$10 - $5000",
    media: {
      type: "image",
      url: "/educational.png"
    }
  },
  {
    name: "News Website",
    description: "Delivers current news, articles, and multimedia content on various topics.",
    price: "$1000 - $500000",
    media: {
      type: "image",
      url: "/news.jpeg"
    }
  },
  {
    name: "Social Networking Website",
    description: "Allows users to connect, communicate, and share content with others.",
    price: "$1000 - $500000",
    media: {
      type: "image",
      url: "/social.jpeg"
    }
  },
  {
    name: "Community Forum",
    description: "Enables users to engage in discussions, ask questions, and share information on specific topics.",
    price: "$100 - $500",
    media: {
      type: "image",
      url: "/community.jpeg"
    }
  },
  {
    name: "Government Website",
    description: "Provides information and services related to government agencies, departments, and programs.",
    price: "$1000 - $500000",
    media: {
      type: "image",
      url: "/bussiness.jpeg"
    }
  },
  {
    name: "Personal Website",
    description: "Showcases personal interests, hobbies, achievements, or creative projects.",
    price: "$100 - $5000",
    media: {
      type: "image",
      url: "/personal.png"
    }
  }
];
