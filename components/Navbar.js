import Link from "next/link";

const Navbar = () => {
   return (
      <div className="border-b-[1px] p-4 shadow-md bg-white z-50">
      <nav className="flex mx-96 ">
         <div>
            <Link href='/' >
               <img src="https://internshala.com/static/images/common/new_internshala_logo.svg" className="cursor-pointer" height={70} width={100} />
               </Link>      
         </div>
         <div className="flex flex-grow justify-end items-center space-x-10">
            <Link href="/internships">
            <p className="font-semibold cursor-pointer text-gray-500 hover:text-sky-500">Internships</p>
            </Link>
            <Link href='/login'>
            <button className="border px-5 py-2 border-sky-700 rounded-sm font-semibold text-sky-500 shadow-md hover:shadow-lg text-lg">Login</button>
            </Link>
            {/* <Link href={'/auth'}> */}
            <div>
            <button className="px-5 py-2 bg-sky-400 hover:bg-sky-500 font-semibold text-white rounded-sm p-5 hover:shadow-lg shadow-lg text-lg">Register</button>
            {/* </Link> */}
            <div className=" flex-col bg-gray-100 mt-1 p-2 w-40 hidden">
               <a href="#" className="py-1 px-2 hover:bg-sky-200 rounded">As a student</a>
               <a href="#" className="py-1 px-2 hover:bg-sky-200 rounded">As an Employee</a>
            </div>
            </div>
            
            <Link href='/add'>
            <p className="text-white font-semibold cursor-pointer border rounded-sm w-28 px-5 py-2 text-center bg-sky-400 hover:bg-sky-500 shadow-lg hover:shadow-lg">Add</p>
           </Link>
   
           <Link href='/'>
            <button className="border px-5 py-2 border-sky-700 rounded-sm font-semibold text-sky-500 shadow-md hover:shadow-lg hover:text-sky-600 text-lg">Log out</button>

            </Link>
         </div>
      </nav>
      </div>
//serachbar

    

   );
}

export default Navbar