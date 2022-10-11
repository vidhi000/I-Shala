import { DocumentDuplicateIcon, DocumentTextIcon, UsersIcon } from "@heroicons/react/outline"
import Link from "next/link"

const post_internship = () => {
    return (
        <>
            <div className="min-h-screen max-w-4xl mx-auto">
                <div className="flex space-x-40 justify-center p-20">
                    <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500 text-gray-800">
                        <Link href="/personal_details">
                            <UsersIcon className="h-12 w-12 cursor-pointer p-3 bg-sky-500 text-white rounded-full" />
                        </Link>
                        <p>Personal Details</p>
                    </div>
                    <span className="h-1 w-[245px] bg-sky-500 absolute top-[100px] left-[22px] ml-14"></span>
                    <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500 text-gray-800">
                        <Link href="/organization_details">
                            <DocumentDuplicateIcon className="h-12 w-12 cursor-pointer p-3 bg-sky-500 border border-2px border-sky-500 text-white rounded-full" />
                        </Link>
                        <p>Organization Details</p>
                    </div>

                    <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500  text-gray-800">
                        <DocumentTextIcon className="h-12 w-12 cursor-pointer p-3 border border-sky-500 text-sky-500 bg-white rounded-full" />
                        <p>Post Internship</p>

                    </div>
                </div>

                <div className="text-gray-800 font-semibold text-2xl text-center">
                    <p>Post Internship</p>

                </div>
                <p className="text-gray-700 font-semibold text-lg ml-28">Internship details</p>
                <div className="border rounded-md border-gray-300 max-w-xl mx-auto p-5">
                    <div>
                        <lable>Profile(Internship name)</lable>
                        <input type="text" className="border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full"></input>
                    </div>

                    <div>
                        <lable>Internship type</lable>
                        <input type="text" className="border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full"></input>
                    </div>
                </div>

            </div>
        </>
    )
}

export default post_internship