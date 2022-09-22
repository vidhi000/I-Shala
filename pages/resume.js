
import { PencilIcon } from '@heroicons/react/outline';
const resume = () => {
    return (
        <>
            <div className="min-h-screen max-w-screen-lg mx-auto">
                <div className="border border-sky-400 rounded-md p-5 mt-7 bg-sky-50 text-sky-600">
                    <p className="font-semibold">Applying to this Internship </p>
                    <div className="flex space-x-6 ">
                        <p>
                            This is the resume that the employer will see, make sure it is up to date. You can add or edit details below.
                        </p>
                        <button className="bg-sky-500 text-white shadow-lg hover:bg-sky-600 border rounded-md  w-60 font-semibold">Proceed to an Application</button>
                    </div>
                </div>
                <div className="justify-center flex mt-10">
                    <p className="text-gray-700 font-semibold text-2xl items-center justify-center">Resume</p>
                </div>

                <div className="border border-gray-300 rounded-md mt-6 p-12">
                    <div className='space-y-1'>
                    <div className='flex space-x-2'>
                    <p className="text-4xl text-gray-700 font-semibold">Vidhi Rana</p>
                    <PencilIcon className='h-7 w-7' />
                    </div>
                    <div className='text-gray-500 font-semibold text-sm'>
                    <p>vidhi5410rana@gmail.com</p>
                    <p>+91 9157419206</p>
                    <p>Khambhat, Anand</p>
                </div>
                </div>
                <hr className='mt-7'></hr>

                <div className='mt-4 flex flex-auto gap-x-40'>
                    <p className='text-gray-500 font-semibold text-sm'>EDUCATION</p>
                    <div className='text-gray-500 font-semibold'>
                        <p className='text-gray-800 font-semibold'>B.Tech,AIT</p>
                        <p>College Of Agricultural Information Technology</p>
                        <p>2019 - 2023</p>
                        <p>CGPA: 7.92/10</p>
                    </div>
                </div>

                <hr className='mt-7'></hr>
                <div>
                    
                </div>

                </div>
                
            </div>

        </>
    );
}

export default resume