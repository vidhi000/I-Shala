import { BookmarkIcon, CalendarIcon, ClipboardCheckIcon, ClockIcon, CurrencyRupeeIcon, HomeIcon, LocationMarkerIcon, PlayIcon, TrendingUpIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/outline';
// import { useRouter } from 'next/router';
import Link from 'next/link';

import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';

const Index = ({ internship }) => {

    const router = useRouter()

    const id = router.query.id;

    // console.log(internship);
    return (
        <div>
            {/* {id} */}
            {/* <div className='max-w-screen-lg border-sky-500 rounded-md bg-gradient-to-l bg-sky-100 h-52 ml-[440px] mt-8'>
             <div className='flex'>
             <div className='space-y-5 p-5'>
                <p className='text-gray-800 font-semibold text-lg'>Upskill yourself with Internshala</p>
                <div className='space-y-1'>
                <p className='text-sky-600 font-semibold text-lg'>Learn Web Development</p>
                <p className='text-sky-600 font-semibold text-lg'>Learn React js</p>
                <p className='text-sky-600 font-semibold text-lg'>Learn Node js</p>
                </div>
             </div>
             <div>
             <img src="https://blooming-bastion-29120.herokuapp.com/static/images/page_3rd_image.png" height={200} width={200} className="ml-96"/>
             </div>
             </div>
            </div> */}
            
            <div className='p-8 justify-center text-center text-4xl mt-0'>
                <p className=' font-semibold text-gray-800'>{internship.Internship_Name} Internship At {internship.company_id ? internship.company_id.Name : 'sp'}</p>
            </div>
            <div>

                <div className="max-w-screen-lg min-h-screen border rounded-lg mx-auto mb-12">
                    {/* <Internship/> */}

                    <div className="bg-white p-5 w-full space-y-5 ">
                        <div className='border rounded-md inline-flex'>
                            <TrendingUpIcon className='h-5 w-5 text-sky-600' />
                            <p className='text-gray-800  text-sm inline p-1'>Actively hiring</p>
                        </div>
                        <div className='space-y-1'>
                            <p className="text-gray-800 font-semibold text-xl cursor-pointer">{internship.Internship_Name}</p>
                            <p className="text-gray-500 font-semibold cursor-pointer">{internship.company_id ? internship.company_id.Name : 'sp'}</p>
                        </div>
                        {internship.Location == 'Work from home' ?
                            <div className="flex space-x-1">
                                <HomeIcon className='h-5 w-5 text-gray-500' />
                                <p className='text-gray-700'>Work From Home</p>
                            </div>
                            :
                            <div className="flex space-x-1">
                                <LocationMarkerIcon className='h-5 w-5 text-gray-500' />
                                <p className='text-gray-700'>{internship.Location}</p>
                            </div>
                        }
                        <div className="flex space-x-10 text-sm">
                            <div className='space-x-1 space-y-1 '>
                                <div className='flex text-gray-500 space-x-1'>
                                    <PlayIcon className='h-5 w-5 ' />
                                    <p className='font-semibold text-sm'>START DATE</p>
                                </div>
                                <p className='text-gray-800 text-base'>{internship.start_date}</p>
                            </div>
                            <div className='space-x-1 space-y-1'>
                                <div className='flex text-gray-500 space-x-1'>
                                    <CalendarIcon className='h-5 w-5' />
                                    <p className='font-semibold text-sm'>DURATION</p>
                                </div>
                                <p className='text-gray-800 text-base'>{internship.Duration}</p>
                            </div>
                            <div className='space-x-1 space-y-1'>
                                <div className='flex text-gray-500 space-x-1'>
                                    <CurrencyRupeeIcon className='h-5 w-5 ' />
                                    <p className='font-semibold text-sm'>STIPEND</p>
                                </div>
                                <p className='text-gray-800 text-base'>{internship.Stipend}</p>

                            </div>
                        </div>

                        <div className='flex space-x-10 text-sm'>
                            <div className='bg-green-100 flex space-x-1 p-1'>
                                <ClockIcon className='h-5 w-5 text-green-700' />
                                <p className='text-green-700'>Just now</p>
                            </div>
                            <p className='bg-gray-200 border rounded-md text-gray-700 p-1 font-semibold'>Internship</p>
                            <p className='bg-gray-200 border rounded-md text-gray-700 p-1 font-semibold'>Internship with job offer</p>
                        </div>
                        <div className='flex text-gray-500 space-x-2'>
                            <UserGroupIcon className='h-5 w-5' />
                            <p>315 applicants</p>
                        <div>
                            <BookmarkIcon className='h-5 w-5 text-sky-600 cursor-pointer'/>
                        </div>
                        </div>
                        

                        <hr></hr>

                        <div className='space-y-2'>
                            <p className='font-semibold text-gray-800 text-xl'>About {internship.company_id ? internship.company_id.Name : 'sp'}</p>
                            <p className='text-base text-gray-500'>{ internship.company_id?.About_company}</p>
                        </div>

                        <div className='border rounded-md p-3 space-y-1'>
                            <div>
                                <p className='text-gray-700 text-base font-semibold'>Activity on Internshala</p>
                            </div>
                            <div className='flex space-x-12'>
                                <div className='flex space-x-1 text-gray-600 font-semibold'>
                                    <CalendarIcon className='h-5 w-5' />
                                    <p>Hiring since December 2019</p>
                                </div>
                                <div className='flex space-x-1 text-gray-600 font-semibold'>
                                    <ClipboardCheckIcon className='h-5 w-5' />
                                    <p>3674 opportunities posted</p>
                                </div>
                                <div className='flex space-x-1 text-gray-600 font-semibold'>
                                    <UsersIcon className='w-5 h-5' />
                                    <p>10252 candidates hired</p>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <p className='text-gray-800 font-semibold text-xl'>
                                About the work from home job/internship
                            </p>
                            <p className='text-gray-600 font-semibold'>Selected intern's day-to-day responsibilities include:</p>
                        </div>
                        <div className='text-gray-600 font-normal'>

                            <p>1. Creating fundraising campaigns</p>
                            <p>2. Formalizing growth strategy</p>
                            <p>3. Working on the execution of various strategies</p>
                        </div>

                        <div className='text-xl text-gray-800 font-semibold'>
                            <p>Who can apply</p>
                        </div>
                        <div className='text-gray-600 '>
                            {/* <p>Only those candidates can apply who:</p>
                            <p>1. are available for the work from home job/internship</p>
                            <p>2. can start the work from home job/internship between 8th Sep'22 and 13th Oct'22</p>
                            <p>3. are available for duration of 1 week</p>
                            <p>4. have relevant skills and interests</p> */}
                            <p>{internship.whocanapply}</p>
                        </div>

                        <div className='space-y-1'>
                            <p className='text-xl text-gray-800 font-semibold'>
                                Perks
                            </p>
                            <div className='flex space-x-10 text-gray-700'>
                                {/* <p className='border rounded-md bg-gray-100 p-1 outline-none'>Certificate</p>
                                <p className='border rounded-md bg-gray-100 p-1'>Letter of recommendation</p>
                                <p className='border rounded-md bg-gray-100 p-1'>Flexible work hours</p> */}
                                <p>{internship.perks}</p>
                            </div>

                        </div>
                        <div className='space-y-2'>
                            <p className='text-xl text-gray-800 font-semibold'>Additional Information</p>
                            <p className='text-gray-700'>Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also
                                be paid a performance-linked incentive (10% of total funds raised).</p>
                        </div>
                        {/* <p className='text-gray-700'>Incentives shall be awarded to the intern based on the performance.</p> */}

                        <div>
                            <p className='text-xl text-gray-800 font-semibold'>Number of openings</p>
                            <p>{internship.NoOfOpening}</p>
                        </div>

                        {/* <p className='bg-sky-400 text-white font-semibold border rounded-md p-3 w-32 text-lg cursor-pointer hover:bg-sky-500 shadow-lg text-center mx-auto'>Apply now</p> */}
                        <div className='flex items-center justify-center'>
                            <Link href={{
                                pathname: '/resume',
                                query : {id}
                            }}>
                                <button className='bg-sky-400 text-white font-semibold border rounded-md p-3 w-32 text-lg 
                             cursor-pointer hover:bg-sky-500 shadow-lg text-center mx-auto'>Apply now</button>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Index

export async function getStaticProps(context) {
    const { id } = context.params;
    const res = await axios.get('http://localhost:5000/internship/' + id);
    const internship = res.data;
    return {
        props: {
            internship
        }
    }
}

export async function getStaticPaths() {
    const res = await axios.get('http://localhost:5000/internship');
    const internship = res.data;
    const ids = internship.map((inter) => inter._id);
    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false
    }
}