import { DocumentDuplicateIcon, DocumentTextIcon, UsersIcon } from "@heroicons/react/outline"
import Link from "next/link";

const Personal_details = () => {
    return (
        <>
            <div className="min-h-screen max-w-4xl mx-auto">
                <div className="flex space-x-40 justify-center p-20">
                    <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500 text-gray-800">
                        <UsersIcon className="h-12 w-12 cursor-pointer text-sky-500 border p-3 border-2px border-sky-500 bg-white rounded-full" />
                        <p>Personal Details</p>
                    </div>
                    <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500 text-gray-800">
                        <Link href="/organization_details">
                        <DocumentDuplicateIcon className="h-12 w-12 cursor-pointer p-3 text-white hover:bg-sky-500 bg-gray-400 rounded-full" />
                        </Link>
                        <p>Organization Details</p>
                    </div>
                    <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500  text-gray-800">
                        <DocumentTextIcon className="h-12 w-12 cursor-pointer p-3  text-white bg-gray-400 hover:bg-sky-500 rounded-full" />
                        <p>Post Internship</p>
                    </div>
                </div>

                <div className="text-gray-700 font-semibold text-4xl p-10 text-center">
                    <p>Personal details</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="border border-gray-200 rounded-md p-7 space-y-4 max-w-xl mx-auto">

                        <div className="flex space-x-5">
                            <div className="flex flex-col flex-1 space-y-1">
                                <label className="block font-semibold ">First Name</label>
                                <input type='first name' placeholder="Vidhi"
                                    className=" outline-none border inline rounded-sm
                             border-gray-300 hover:border-sky-500 p-[6px] w-full" />
                            </div>
                            <div className="flex flex-col flex-1 space-y-1">
                                <label className="block font-semibold">Last Name</label>
                                <input type='first name' placeholder="Rana"
                                    className="outline-none border inline rounded-sm
                             border-gray-300 hover:border-sky-500 p-[6px] w-full" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="block font-semibold ">Email</label>
                            <input type='email' placeholder="vidhi@example.com"
                                className="outline-none p-[6px] border rounded-sm
                         border-gray-300 hover:border-sky-500 w-full" />
                        </div>

                        <div className="space-y-1">
                            <label className="block font-semibold">Contact</label>
                            <input type='' placeholder="must be atleast 10 numbers"
                                className="outline-none p-[6px] border rounded-sm
                         border-gray-300 hover:border-sky-500  w-full" />
                        </div>
                    </div>
                    <Link href="/organization_details">
                    <button className="text-white bg-sky-500 hover:bg-sky-600 
                shadow-lg font-semibold text-lg text-center p-2 w-24 border rounded-md mt-6">Next</button>
                 </Link>
                </div>
            </div>
        </>
    );
}


export default Personal_details