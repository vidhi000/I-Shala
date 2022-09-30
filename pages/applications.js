import { DocumentReportIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline"
import axios from "axios";
import { useEffect, useState } from "react"



const application = () => {

    const [app, setapp] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/application/app").then((res) => {
            setapp(res.data);
            console.log(res.data);
        }).catch((ex) => {
            console.log(ex)
        })


    }, [])

    return (
        <>
            <div className="min-h-screen max-w-screen-xl mx-auto">
                <div>
                    <p className="text-gray-800 font-semibold text-4xl p-12 ml-72">My Applications</p>
                </div>
                <section>

                    <div className="border border-gray-300 rounded-md shadow-xl ">
                        <div className="grid grid-cols-9 text-gray-500 font-semibold  p-3  bg-gray-50">
                            <p>COMPANY</p>
                            <p className="col-span-2">PROFILE</p>
                            <p>APPLIED ON</p>
                            <p>NUMBER OF APPLICANTS</p>
                            <p className="col-span-2">APPLICATION STATUS</p>
                            <p>REVIEW APPLICATION</p>
                        </div>


                        {
                            app.map((app,i) => (
                                <div key={i} className="grid grid-cols-9 p-4">
                                    <p>{app.company_id.Name}</p>
                                    <p className="col-span-2">{app.Internship_id.Internship_Name}</p>
                                    <p>{app.createdAt.split('T')[0]}</p>
                                    <p>{app.Internship_id.TotalNoOfApplicants}</p>
                                    <div className="flex space-x-1 col-span-2">
                                        <p className="text-sky-500 bg-sky-100 font-semibold text-base border rounded-lg w-20 text-center">Applied</p>
                                        <QuestionMarkCircleIcon className="h-6 w-6" />
                                    </div>
                                    <DocumentReportIcon className="h-5 w-5" />
                                </div>
                            ))
                        }
                        <div className="grid grid-cols-9 p-4">
                            <p>TCS</p>
                            <p className="col-span-2">Software Engineer</p>
                            <p>27 sep 22022</p>
                            <p>38</p>
                            <div className="flex space-x-1 col-span-2">
                                <p className="text-sky-500 bg-sky-100 font-semibold text-base border rounded-lg w-20 text-center">Applied</p>
                                <QuestionMarkCircleIcon className="h-6 w-6" />
                            </div>
                            <DocumentReportIcon className="h-5 w-5" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default application