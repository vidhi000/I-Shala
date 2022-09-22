const add = () => {
    return (
        <div className="min-h-screen">
            <div className="p-7 bg-white">
                <p className="text-gray-700 font-semibold text-2xl text-center mt-7 ">Add Internships</p>
                <div className="max-w-6xl mx-auto border border-gray-200 rounded-md p-12 shadow-xl flex justify-evenly">

                {/* <div className="space-y-1">
                        <label className="block font-semibold ">Email</label>
                        <input type='email' placeholder="vidhi@example.com"  className="outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500  w-full" />
                    </div> */}
                 <div>
                <div className="p-2">
                    <label className="text-gray-800 font-semibold text-lg block">Internship_Name</label>
                    <input type='text' placeholder="Enter internship name" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96 " />
                </div>

                <div className="p-2">
                    <label className="text-gray-800 font-semibold text-lg block">Location</label>
                    <input type='text' placeholder="Enter Location" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div>

                <div className="p-2">
                    <label className="text-gray-800 font-semibold text-lg block">Duration</label>
                    <input type='text' placeholder="Enter Duration" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div>

                <div className="p-2">
                    <label className="text-gray-800 font-semibold text-lg block">Start_date</label>
                    <input type='text' placeholder="Enter date" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div>

                <div className="p-2" >
                <label className="text-gray-900 font-semibold text-lg block">Stipend</label>
                    <input type='text' placeholder="Enter Stipend" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div>

                <div className="p-2">
                <label className="text-gray-900 font-semibold text-lg block">Apply By</label>
                    <input type='text' placeholder="Enter Apply date" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div>


                <div className="p-2">
                <label className="text-gray-900 font-semibold text-lg block">Required Skills</label>
                    <textarea type='text' placeholder="Enter Skills" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div>

                <div className="p-2">
                <label className="text-gray-900 font-semibold text-lg block">Learning Skills By Internshala</label>
                    <textarea type='text' placeholder="Enter Skills by internshala" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div>
                </div>

                <div>

                <div className="p-2">
                <label className="text-gray-900 font-semibold text-lg block">Who can apply</label>
                    <textarea type='text' placeholder="Enter Eligibility" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div>

                <div className="p-2">
                <label className="text-gray-900 font-semibold text-lg block">Perks</label>
                    <textarea type='text' placeholder="Enter perks" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div>

                <div className="p-2">
                <label className="text-gray-900 font-semibold text-lg block">Additional_information</label>
                    <textarea type='text' placeholder="Enter Information" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div>

                <div className="p-2">
                <label className="text-gray-900 font-semibold text-lg block">Total No Of Applicants</label>
                    <input type='text' placeholder="Enter Applicants" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div>

                <div className="p-2">
                <label className="text-gray-900 font-semibold text-lg block">No Of Opening</label>
                    <input type='text' placeholder="Enter Duration" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div>

                <div className="p-2">
                <label className="text-gray-900 font-semibold text-lg block">Islive</label>
                    <input type='text' placeholder="Enter Duration" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96 " />
                </div>
                   <div className="flex items-center justify-center mt-12">
                   <button className="text-white bg-sky-500 hover:bg-sky-600 border rounded-md px-6 p-2 justify-center shadow-lg">Create Internship</button>
                   </div>
                
                </div>
                </div>






            </div>
        </div>
    );

}
export default add