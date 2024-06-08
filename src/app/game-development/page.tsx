'use client'
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import BillingSoftwareCard from "../component/BillingSoftwareCard";
import { useRouter } from 'next/navigation';

const gameSoftwares = [
    {
      name: 'GameMaster Pro',
      description: 'Advanced game development software with powerful features for professional game developers.',
      price: 199.99,
      image: '/images/game-master-pro.png',
    },
    {
      name: 'QuickGame Studio',
      description: 'Fast and efficient game development software suitable for indie game developers.',
      price: 49.99,
      image: '/images/quickgame-studio.png',
    },
    {
      name: 'GameHub Enterprise',
      description: 'Comprehensive game development platform for large game studios and enterprises.',
      price: 499.99,
      image: '/images/gamehub-enterprise.png',
    },
    {
      name: 'EasyGame Lite',
      description: 'User-friendly game creation software for hobbyists and beginners.',
      price: 29.99,
      image: '/images/easygame-lite.png',
    },
    {
      name: 'FinGame Suite',
      description: 'Full-featured game development suite with built-in analytics and monetization tools.',
      price: 149.99,
      image: '/images/fingame-suite.png',
    },
    {
      name: 'SimpleGame Basic',
      description: 'Straightforward game development solution for small game projects and startups.',
      price: 9.99,
      image: '/images/simplegame-basic.png',
    },
  ];

  export default function GameProjects() {
    const router = useRouter(); 
  
    const handleBack = () => {
      router.back();
    };
  return (
    <div className="min-h-screen bg-gray-50 py-10">
        <div className="flex flex-row justify-center mb-12">
        <button onClick={handleBack} className="focus:outline-none"> 
          <ArrowLeftCircleIcon className="h-6 w-6 mr-2 text-gray-600" />
        </button>
        <h1 className="text-4xl font-bold text-center text-gray-800">Billing Software Solutions</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-5">
          {gameSoftwares.map((software) => (
            <BillingSoftwareCard key={software.name} software={software} />
          ))}
        </div>
    </div>
  );
}  