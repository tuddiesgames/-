'use client'
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid"
import { useRouter } from 'next/navigation'; 

const CommonTitle = (props:any)=>{
    const {pageTitle} = props
    const router = useRouter();
  
    const handleBack = () => {
      router.back();
    };
    return(
        <div className="flex items-center mb-8">
        <button onClick={handleBack} className="focus:outline-none"> 
          <ArrowLeftCircleIcon className="h-6 w-6 mr-2 text-gray-600" />
        </button>
        <h1 className="text-3xl font-bold">{pageTitle}</h1>
      </div>
    )
}

export default CommonTitle