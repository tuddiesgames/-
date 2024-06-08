'use client'

import React from 'react';
import { useRouter } from 'next/navigation'; 
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import ProductCard, { WebsiteCardProps } from './productCard';

const ProductPage = (props:any) => {
    const {websites, pageTitle} = props
  const router = useRouter();
  
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <button onClick={handleBack} className="focus:outline-none"> 
          <ArrowLeftCircleIcon className="h-6 w-6 mr-2 text-gray-600" />
        </button>
        <h1 className="text-3xl font-bold">{pageTitle}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {websites.map((website: { name: string; description: string; price: string; media: { type: string; url: string; }; }, index: React.Key | null | undefined) => (
          <ProductCard
            key={index}
            name={website.name}
            description={website.description}
            price={website.price}
            media={website?.media}/>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;