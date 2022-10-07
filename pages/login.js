import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/router";
import { useRef } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


const login = () =>{
    const LemailRef = useRef();
    const LpasswordRef = useRef();
    const formRef = useRef();
    const route = useRouter()
    const Login=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/user/login", {
            email: LemailRef.current.value,
            password: LpasswordRef.current.value
        }).then((res) => {
            localStorage.setItem('i_shala_token',res.data.token);
            localStorage.setItem('i_shala_user_email',res.data.email)
            localStorage.setItem('i_shala_user_fname',res.data.Fname)
            localStorage.setItem('i_shala_isAuth',res.data.isAuth)
            toast("Login Successfull",{autoClose : 1500,position : "bottom-right"});



            route.push('/applications')
        }).catch((e)=>{
            console.log(e)
        })
        formRef.current.reset();
    }
   return(
     
    <div className="min-h-screen relative bg-[url('/public/inter.PNG')] "
    style={{ backgroundImage: "url('https://internshala.com/static/images/registration/student/background-1920.png')", backgroundRepeat: "no-repeat" }}
>

     <div className="max-w-screen-2xl mx-auto p-10 flex justify-around">
                    <div className="space-y-7">
                        <p className="font-bold text-4xl flex text-gray-700 ">Let's Login in I-Shala</p>
                        <div className="space-y-4 text-4xl text-gray-700">
                             <p className="font-semibold text-2xl p-4">Get ahead.Get an Internship!</p> 

                            <p className="flex font-semibold text-2xl">
                                <img src="https://internshala.com/static/images/common/check_box.svg" />
                                Internships 
                            </p>
                            <p className="flex font-semibold text-2xl">
                                <img src="https://internshala.com/static/images/common/check_box.svg" />
                                Internships with stipend
                            </p>
                            <p className="flex font-semibold text-2xl">
                                <img src="https://internshala.com/static/images/common/check_box.svg" />
                                Work from home Internships
                            </p>
                            <p className="flex font-semibold text-2xl">
                                <img src="https://internshala.com/static/images/common/check_box.svg" />
                                Apply for free
                            </p>
                        </div>
                    </div>

                    <form ref={formRef} className="border min-w-[400px] rounded-sm max-w-sm space-y-5 p-10  text-gray-600 shadow-xl bg-gray-50">
                        <div className="flex space-x-2 border rounded-sm max-w-full items-center justify-center bg-white">
                            <img src="https://internshala.com/static/images/login/google_logo.png " />
                            <p className="font-semibold justify-center items-center cursor-pointer p-2 bg-white">Sign Up With Google</p>
                        </div>
                        <div className='relative flex justify-center flex-col items-center'>
                            <p className='bg-slate-100 p-1 rounded-lg w-fit text-xs z-10 tracking-wider px-3'>OR</p>
                            <span className='border-b border-gray-300 block h-1 w-full absolute' />
                        </div>
                        <div className="space-y-1">
                            <label className="block font-semibold ">Email</label>
                            <input type='email' ref={LemailRef} placeholder="vidhi@example.com" className="shadow-md outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500 w-full" />
                        </div>
                        <div className="space-y-1">
                            <label className="block font-semibold">Password</label>
                            <input type='password'  ref={LpasswordRef} placeholder="must be atleast 6 characters" className="shadow-md outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500 w-full " />
                        </div>
                        <p className="text-sm font-semibold cursor-pointer text-sky-500 hover:text-sky-600">Forgot password?</p>

                        <button onClick={Login} className="bg-sky-500 text-xl font-semibold text-white border rounded-sm  cursor-pointer w-full p-2 hover:bg-sky-600 shadow-lg">Login</button>




                        <p>New to Internshala?
                            <Link href='/auth'>
                            <span className="p-2 font-semibold text-sky-500 hover:text-sky-600 cursor-pointer bg-gray-50">Register</span>
                            </Link>
                            </p>

                    </form> 


                    </div>


    </div>

   );
}

export default login





//  <div className="min-h-screen relative bg-[url('/public/inter.PNG')] p-12"
//                 style={{ backgroundImage: "url('https://internshala.com/static/images/registration/student/background-1920.png')", backgroundRepeat: "no-repeat" }}
//             >

//                        <div className="space-y-5">
//                         <p className="font-bold text-4xl flex ">Let's Login in I-Shala</p>
//                         <div className="justify-between space-y-6 text-4xl">
//                             {/* <p className="font-semibold text-2xl p-4">Register and apply to 10000+ opportunities</p> */}

//                             <p className="flex font-semibold text-2xl">
//                                 <img src="https://internshala.com/static/images/common/check_box.svg" />
//                                 Internships
//                             </p>
//                             <p className="flex font-semibold text-2xl">
//                                 <img src="https://internshala.com/static/images/common/check_box.svg" />
//                                 Internships with stipend
//                             </p>
//                             <p className="flex font-semibold text-2xl">
//                                 <img src="https://internshala.com/static/images/common/check_box.svg" />
//                                 Work from home Internships
//                             </p>
//                             <p className="flex font-semibold text-2xl">
//                                 <img src="https://internshala.com/static/images/common/check_box.svg" />
//                                 Apply for free
//                             </p>
//                         </div>
//                     </div>








                
//                  <div className="border min-w-[400px] rounded-sm max-w-sm space-y-5 p-10  text-gray-600 shadow-xl bg-gray-50 justify-around ml-[1080px]">
//                         <div className="flex space-x-2 border rounded-sm max-w-full items-center justify-center bg-white">
//                             <img src="https://internshala.com/static/images/login/google_logo.png " />
//                             <p className="font-semibold justify-center items-center cursor-pointer p-2 bg-white">Sign Up With Google</p>
//                         </div>
//                         <div className='relative flex justify-center flex-col items-center'>
//                             <p className='bg-slate-100 p-1 rounded-lg w-fit text-xs z-10 tracking-wider px-3'>OR</p>
//                             <span className='border-b border-gray-300 block h-1 w-full absolute' />
//                         </div>
//                         <div className="space-y-1">
//                             <label className="block font-semibold ">Email</label>
//                             <input type='email' placeholder="vidhi@example.com" className="outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500 w-full" />
//                         </div>
//                         <div className="space-y-1">
//                             <label className="block font-semibold">Password</label>
//                             <input type='password' placeholder="must be atleast 6 characters" className="outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500 w-full " />
//                         </div>
//                         <p className="text-sm font-semibold cursor-pointer text-sky-500 hover:text-sky-600">Forgot password?</p>

//                         <button className="bg-sky-500 text-xl font-semibold text-white border rounded-sm  cursor-pointer w-full p-2 hover:bg-sky-600 shadow-lg">Login</button>
                         
//                         <p>New to Internshala?
//                             <Link href='/auth'>
//                             <span className="p-2 font-semibold text-sky-500 hover:text-sky-600 cursor-pointer bg-gray-50">Register</span>
//                             </Link>
//                             </p>
//                     </div> 

                  







//             </div>