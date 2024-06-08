// components/BillingSoftwareCard.js
import Image from 'next/image';

const BillingSoftwareCard = ({ software }:any) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="relative pb-3/4">
        <Image
          src={software.image}
          alt={software.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="pt-4">
        <h2 className="text-2xl font-bold text-gray-800">{software.name}</h2>
        <p className="mt-2 text-gray-600">{software.description}</p>
        <div className="mt-4">
          <span className="inline-block bg-green-200 text-green-800 text-lg font-semibold py-1 px-2 rounded-lg">
            ${software.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BillingSoftwareCard;
