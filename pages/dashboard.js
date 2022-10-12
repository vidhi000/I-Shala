const Dashboard = ()=>{
    return(
        <>
        <div className="min-h-screen max-w-screen-xl mx-auto">
                <div>
                    <p className="font-semibold text-4xl p-12 text-center text-gray-700">My Internships</p>
                </div>
                <section className="text-gray-600">
                    <div className="border border-gray-300 rounded-md shadow-xl">
                        <div className="grid grid-cols-5 text-gray-500 font-semibold p-3 bg-gray-100">
                            <p>PROFILE</p>
                            <p>STATUS</p>
                            <p>ACTION</p>
                        </div>
                    </div>
                </section>  
        </div>
        </>
    );
}
export default Dashboard