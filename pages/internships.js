// import {funnel} from  '@heroicons/react'

import axios from "axios";
import { useEffect, useState } from "react";
import Internship from "../components/Internship";
const data = Array(10).fill(1)

const internships = () => {

    const [intern, setIntern] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/internship').then((res)=>{
            setIntern(res.data);
            console.log(res.data);
        }).catch((ex)=>{
            console.log(ex);
        })
    },[])
   
    return (
        <div className="bg-gray-50 min-h-screen ">
            {/* left */}
            <div className="max-w-screen-xl mx-auto pt-24 flex">
                <div className="bg-white border rounded-md flex flex-col max-w-xs p-5 space-y-4 max-h-[500px] shadow-lg">
                    <div className="flex p-3 justify-center">
                        <img src="https://cdn2.iconfinder.com/data/icons/e-commerce-line-8-1/1024/filter8-256.png"
                            className="textsk" height={10} width={20} />
                        <p className="font-semibold text-xl text-gray-700">Filters</p>
                    </div>
                    <div className="space-y-2">
                        <label className="text-gray-600 font-semibold">Category</label>
                        <input type='category' placeholder="e.g. Web Developer" className="outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500  w-full" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-gray-600 font-semibold">Location</label>
                        <input type='Location' placeholder="e.g. Ahemdabad" className="outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500  w-full" />
                    </div>
                    <div className="space-y-1">
                        <div className="space-x-1">
                            <input type='checkbox' />
                            <label className="text-gray-600 text-sm font-semibold">Work from home</label><br />
                        </div>
                        <div className="space-x-1">
                            <input type='checkbox' className="mt-2" />
                            <label className="text-gray-600 text-sm font-semibold">Part-time</label>
                        </div>
                    </div>

                    <p className="text-gray-600 font-semibold">Desired minimum monthly stipend (₹)</p>
                    <div className="w-52">
                        <input type='range' className="w-52" />
                        <div className="flex justify-evenly text-gray-500">
                            <span>0</span>
                            <span>2k</span>
                            <span>4k</span>
                            <span>6k</span>
                            <span>8k</span>
                            <span>10k</span>
                        </div>
                    </div>
                    <p className="text-sky-500 hover:text-sky-600 font-semibold text-right cursor-pointer">Clear all</p>
                </div>
                <section className="ml-10 space-y-5 mx-auto">
                    {
                        intern.map((i,_j)=>(
                            <Internship key={_j} i={i}/>
                        ))
                    }
                </section>
            </div>

        </div>


    );
}

export default internships