'use client'
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import BillingSoftwareCard from "../component/BillingSoftwareCard";
import { useRouter } from 'next/navigation';

const billingSoftwares = [
  {
    name: 'InvoiceMaster Pro',
    description: 'Advanced invoicing and billing software with automation features.',
    price: 99.99,
    image: '/images/invoice-master-pro.png',
  },
  {
    name: 'QuickBill Express',
    description: 'Fast and efficient billing software for small businesses.',
    price: 49.99,
    image: '/images/quickbill-express.png',
  },
  {
    name: 'BillingHub Enterprise',
    description: 'Comprehensive billing solution for large enterprises.',
    price: 199.99,
    image: '/images/billinghub-enterprise.png',
  },
  {
    name: 'EasyInvoice Lite',
    description: 'User-friendly invoicing software for freelancers.',
    price: 29.99,
    image: '/images/easyinvoice-lite.png',
  },
  {
    name: 'FinBilling Suite',
    description: 'Full-featured financial billing software with analytics.',
    price: 149.99,
    image: '/images/finbilling-suite.png',
  },
  {
    name: 'SimpleBill Basic',
    description: 'Straightforward billing solution for startups.',
    price: 19.99,
    image: '/images/simplebill-basic.png',
  },
];

export default function BillingSoftware() {
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
          {billingSoftwares.map((software) => (
            <BillingSoftwareCard key={software.name} software={software} />
          ))}
        </div>
    </div>
  );
}
