import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
   return (
      <div className="border-b-[1px] p-4 shadow-md bg-gray-50 z-50">
      <nav className="flex mx-96 ">
         <div>
            <Link href='/' >
               <img src="https://internshala.com/static/images/common/new_internshala_logo.svg" className="cursor-pointer" height={70} width={100} />
               </Link>      
         </div>
         <div className="flex flex-grow justify-end items-center space-x-10">
            <p className="font-semibold cursor-pointer text-gray-500 hover:text-sky-500">Internships</p>
            <button className="border px-5 py-2 border-sky-700 rounded-sm font-semibold text-sky-600 hover:shadow-md hover:text-sky-700">Login</button>
            <Link href={'/auth'}>
            <button className="px-5 py-2 bg-sky-500 hover:bg-sky-600 font-semibold text-white rounded-sm p-5">Register</button>
            </Link>
         </div>
      </nav>
      </div>
//serachbar

    

   );
}

export default Navbar