// components/WebsiteCard.tsx

import React from 'react';
import Image from 'next/image';

export interface WebsiteCardProps {
  name: string;
  description: string;
  price: string;
  media: {
    type: string;
    url: string;
  };
}

const ProductCard: React.FC<WebsiteCardProps> = ({ name, description, price, media }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transform hover:scale-110 transition-transform duration-300 hover:bg-blue-200">
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      {media.type === 'image' ? (
        <div className="mb-4">
          <Image src={media.url} alt={name} width={300} height={200} />
        </div>
      ) : (
        <div className="mb-4">
          <iframe
            width="100%"
            height="200"
            src={media.url}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-900 font-semibold"><strong>Price: </strong>{price}</p>
    </div>
  );
};

export default ProductCard;
