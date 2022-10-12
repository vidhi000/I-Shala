import { DocumentDuplicateIcon, DocumentTextIcon, UsersIcon,ArrowRightIcon } from "@heroicons/react/outline"
import Link from "next/link"
import {useState} from "react"

const post_internship = () => {
    const [model,setModel] = useState()
    return (
        <>
            <div className="min-h-screen max-w-4xl mx-auto relative justify-center">
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
                    <span className="h-1 w-[245px] bg-sky-500 absolute top-[100px] left-[310px] ml-14"></span>
                    <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500  text-gray-800">
                        <DocumentTextIcon className="h-12 w-12 cursor-pointer p-3 border border-sky-500 text-sky-500 bg-white rounded-full" />
                        <p>Post Internship</p>

                    </div>
                </div>

                <div className="text-gray-800 font-semibold text-2xl text-center">
                    <p>Post Internship</p>

                </div>
                <p className="text-gray-700 font-semibold text-lg  ml-40">Internship details</p>
                <div className="border rounded-md border-gray-300 max-w-xl mx-auto p-5 space-y-3 mt-2">
                    <div className="space-y-1">
                        <lable>Profile(Internship name)</lable>
                        <input type="text" className="outline-none border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full"></input>
                    </div>

                    <div className="space-y-1">
                        <lable>Internship type</lable>
                        <input type="text" className="outline-none border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full"></input>
                    </div>

                    <div className="space-y-1">
                        <lable>City/Cities</lable>
                        <input type="text" className="outline-none border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full"></input>
                    </div>

                    <div className="space-y-1">
                        <lable>Number of openings</lable>
                        <input type="text" className="outline-none border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full"></input>
                    </div>

                    <div className="space-y-1">
                        <lable>Internship start date</lable>
                        <input type="text" className="outline-none border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full"></input>
                    </div>

                    <div className="space-y-1">
                        <lable>Internship duration</lable>
                        <input type="text" className="outline-none border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full"></input>
                    </div>

                    <div className="space-y-1">
                        <label>Intern’s responsibilities</label>
                        <textarea type="text" placeholder="Selected intern's day-to-day responsibilities include:" className="border rounded-md
                         border-gray-300 hover:border-sky-500 outline-none block w-full h-32 p-1" />
                    </div>

                </div>

                {/* stipend */}
                <p className="text-lg font-semibold text-gray-700 ml-40 mt-10">Stipend & perks</p>
                <div className="border rounded-md border-gray-300 max-w-xl mx-auto mt-2 mb-5">
                    <div className="p-5 space-y-1">
                  <p>Skills required</p>
                  <textarea type="text" placeholder="e.g. Javascript , Java" className="border rounded-md
                 border-gray-300 hover:border-sky-500 outline-none block w-full h-16 p-2" />
                 </div>
                </div>

                {/* cover */}
                {/* <div className="text-lg font-semibold text-gray-700 ml-40 mt-10">
                    <p>Cover letter and availability</p>
                </div>
                <div className="border rounded-md border-gray-300 max-w-xl mx-auto mt-2 mb-14 space-y-2 p-4">
                  <p className="text-sm font-semibold text-gray-600 ">Cover letter & availability question will be asked to every applicant by default. 
                    If you wish, you may ask two more customized questions as an assessment.</p>
                    <p className="font-semibold text-gray-800 ">Cover letter</p>
                    <p className="font-semibold text-gray-600 ">Why should you be hired for this role?</p>
                    <div className="mt-4 text-gray-800">
                    <textarea placeholder="Mention in detail what relevant skill or past experience you have for this internship.What excites you about this internship ? why would you be a good fit?"
                        className="p-3 border rounded-md border-gray-300 hover:border-sky-600 h-28 w-full outline-none"></textarea>
                </div>
                </div> */}
                <Link href="/internship_created">
            {/* <button onClick={()=>{setModel(true) }}  */}
            <button className="text-white mb-10 shadow-lg bg-sky-500 ml-[350px] hover:bg-sky-600 font-semibold text-lg text-center p-2 w-40 
            border rounded-md mt-6">
            Post internship</button>
            </Link>

{/* 
            {
                model ? (
                    <>
                      <div className="min-h-min max-w-screen-sm mx-auto mb-32 mt-24 border rounded-lg p-8 shadow-2xl">
            <div className="max-w-screen-lg mx-auto border rounded-md p-8 bg-green-100 flex justify-evenly shadow-lg">
           <img src="https://internshala.com/static/images/common/modal_success.svg" height={70} width={70}
            className="ml-12 justify-center" />
            <div>
                <p className="text-gray-700 font-semibold text-2xl mt-6">Your internship has been posted!</p>
            </div>
            </div>
            <div className="flex mt-20 space-x-3 ml-72">
                <Link href="/internships">
                <button className="text-sky-500  hover:text-sky-600  hover:border-sky-600 font-semibold text-xl">Go To Internship dashboard</button>
                </Link>
                <ArrowRightIcon className="text-sky-500 hover:text-sky-600 h-5 w-5 mt-2" />
            </div>

            <div>
             <img src="https://careerheight.in/wp-content/uploads/2021/08/join-our-team-concept_25147-48-1-8.webp"
              height={450} width={450} className="ml-16 mt-10 "/>
             </div>
             <button
                    className="text-sky-500 bg-white border border-sky-500 hover:border-sky-600 shadow-lg ml-[500px] mt-3 text-center font-semibold p-2 w-20"
                    onClick={() => setModel(false)} >
                    Close
                  </button>
        </div>
                    </>
                )
                : null

            }
 */}


            {/* </Link> */}
            </div>
        </>
    )
}

export default post_internship