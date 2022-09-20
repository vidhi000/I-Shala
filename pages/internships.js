// import {funnel} from  '@heroicons/react'
const internships = () =>{
    return(
     <div className="bg-gray-200 min-h-screen">
        {/* left */}
        <div className="bg-white border rounded-sm flex flex-col p-3">
            <div className="flex p-3">
             <img src="https://cdn2.iconfinder.com/data/icons/e-commerce-line-8-1/1024/filter8-256.png" 
             className="textsk" height={10} width={20}/>   
             <p className="font-semibold text-xl text-gray-700">Filters</p>
            </div>
            <div className="space-y-2">
                <label className="text-gray-600 font-semibold">Category</label>
                <input type='category' placeholder="e.g. Web Developer" className="p-[6px] border rounded-sm border-gray-300 hover:border-sky-500  w-full" />
            </div>

            <div className="space-y-2">
                <label className="text-gray-600 font-semibold">Location</label>
                <input type='Location' placeholder="e.g. Ahemdabad" className="p-[6px] border rounded-sm border-gray-300 hover:border-sky-500  w-full" />
            </div>
            <div>
                <input className=""/>
                <label className="text-gray-600 text-sm font-semibold">Work from home</label>
            </div>

            <div>
                <input className=""/>
                <label className="text-gray-600 text-sm font-semibold">Part-time</label>
            </div>

            <p className="text-gray-600 font-semibold">Desired minimum monthly stipend (₹)</p>
            <div>
                <input type='range' />
            </div>
            
        </div>
     </div>


    );
}

export default internships