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
            <button className="border px-5 py-2 border-sky-700 rounded-sm font-semibold text-sky-600 hover:shadow-md hover:text-sky-700">Login</button>
            </Link>
            <Link href={'/auth'}>
            <button className="px-5 py-2 bg-sky-500 hover:bg-sky-600 font-semibold text-white rounded-sm p-5 hover:shadow-md">Register</button>
            </Link>
            <Link href='/add'>
            <p className="text-white font-semibold cursor-pointer border rounded-sm w-32 p-2 text-center bg-sky-500 hover:bg-sky-600">Add</p>
           </Link>

           <Link href='/'>
            <button className="border px-5 py-2 border-sky-700 rounded-sm font-semibold text-sky-600 hover:shadow-md hover:text-sky-700">Log out</button>
            </Link>
         </div>
      </nav>
      </div>
//serachbar

    

   );
}

export default Navbar