import { CalendarIcon, ChevronRightIcon, ClockIcon, CurrencyRupeeIcon, HomeIcon, LocationMarkerIcon, MapIcon, PlayIcon, TrendingUpIcon } from '@heroicons/react/outline'
import Link from 'next/link';


const Internship = () => {
    return (

        <div className="bg-white p-5 w-full space-y-5 border rounded-md shadow-lg">
            <div className='border rounded-md inline-flex'>
                <TrendingUpIcon className='h-5 w-5 text-sky-600' />
                <p className='text-gray-800  text-sm inline p-1'>Actively hiring</p>
            </div>
            <div className='space-y-1'>
                <p className="text-gray-900 font-semibold text-xl cursor-pointer">Web Development</p>
                <p className="text-gray-500 font-semibold cursor-pointer">sp</p>
            </div>
            <div className="flex space-x-1">
                <HomeIcon className='h-5 w-5 text-gray-500' />
                <p className='text-gray-700'>Work From Home</p>
            </div>
            <div className="flex space-x-1">
                <LocationMarkerIcon className='h-5 w-5 text-gray-500' />
                <p className='text-gray-700'>Location</p>
            </div>
            <div className="flex space-x-10 text-sm">
                <div className='space-x-1 space-y-1 '>
                    <div className='flex text-gray-400 space-x-1'>
                    <PlayIcon className='h-5 w-5 ' />
                    <p className='font-semibold text-sm'>START DATE</p> 
                    </div>
                    <p className='text-gray-800 text-base'>Immediatly</p>
                </div>
                <div className='space-x-1 space-y-1'>
                    <div className='flex text-gray-400 space-x-1'>
                    <CalendarIcon className='h-5 w-5' />
                    <p className='font-semibold text-sm'>DURATION</p>
                    </div>
                    <p className='text-gray-800 text-base'>6 months</p>
                </div>
                <div className='space-x-1 space-y-1'>
                    <div className='flex text-gray-400 space-x-1'>
                    <CurrencyRupeeIcon className='h-5 w-5 ' />
                    <p className='font-semibold text-sm'>STIPEND</p>
                    </div>
                    <p className='text-gray-800 text-base'>20,000-50,000/month</p>

                </div>
            </div>

            <div className='flex space-x-10 text-sm'>
                <div className='bg-green-100 flex space-x-1 p-1'>
                <ClockIcon className='h-5 w-5 text-green-700' />
                <p className='text-green-700'>Just now</p>
                </div>
                <p className='bg-gray-200 border rounded-md text-gray-700 p-1'>Internship</p>
                <p className='bg-gray-200 border rounded-md text-gray-700 p-1'>Internship with job offer</p>
                 <div className='flex text-sky-500 hover:text-sky-600 cursor-pointer'>
                    <Link href="/internship_details">
                   <p className='font-semibold text-right ml-44'>View details</p>
                   </Link>
                   <ChevronRightIcon className='h-5 w-5 '/>
                 </div>
              
            </div>

           
            

        </div>


    );
}

export default Internship