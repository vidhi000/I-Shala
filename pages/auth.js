import { useState } from "react";

const Auth = () => {
    const [loginSignup, setLoginSignup] = useState(true);
    return (
        <>
        <title>
            Register/Login
        </title>
            <div className="min-h-screen relative bg-[url('/public/inter.PNG')] "
                style={{ backgroundImage: "url('https://internshala.com/static/images/registration/student/background-1920.png')", backgroundRepeat: "no-repeat" }}
            >


                <div className="max-w-screen-2xl mx-auto p-10 flex justify-around">
                    <div>
                        <p className="font-bold text-4xl flex ">A
                            <img src="https://internshala.com/static/images/registration/student/brush_stroke.svg" />
                            ride to your dream career</p>
                        <div className="justify-between space-y-3 text-4xl">
                            <p className="font-semibold text-2xl p-4">Register and apply to 10000+ opportunities</p>

                            <p className="flex font-semibold text-2xl">
                                <img src="https://internshala.com/static/images/common/check_box.svg" />
                                Internships
                            </p>
                            <p className="flex font-semibold text-2xl">
                                <img src="https://internshala.com/static/images/common/check_box.svg" />
                                Work from home Internships
                            </p>
                        </div>
                    </div>



                {
                    loginSignup ?  
                    
                    <div className="border rounded-sm min-w-[400px] max-w-sm space-y-5 p-10 shadow-xl text-gray-600 bg-gray-50">
                    <div className="flex space-x-2 border rounded-sm max-w-full items-center justify-center bg-white">
                        <img src="https://internshala.com/static/images/login/google_logo.png " />
                        <p className="font-semibold justify-center items-center cursor-pointer p-2">Sign Up With Google</p>
                    </div>
                    <div className='relative flex justify-center flex-col items-center'>
                        <p className='bg-slate-100 p-1 rounded-lg w-fit text-xs z-10 tracking-wider px-3'>OR</p>
                        <span className='border-b border-gray-300 block h-1 w-full absolute' />
                    </div>
                    <div className="space-y-1">
                        <label className="block font-semibold ">Email</label>
                        <input type='email' placeholder="vidhi@example.com"  className="outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500  w-full" />
                    </div>
                    <div className="space-y-1">
                        <label className="block font-semibold">Password</label>
                        <input type='password' placeholder="must be atleast 6 characters" className="outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500  w-full" />
                    </div>
                    <div className="grid w-fit grid-cols-2 gap-10">
                        <div className="flex flex-col space-y-1">
                            <label className="block font-semibold ">First Name</label>
                            <input type='first name' placeholder="Vidhi" className="outline-none border inline rounded-sm border-gray-300 hover:border-sky-500 p-[6px]" />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="block font-semibold">Last Name</label>
                            <input type='first name' placeholder="Rana" className="outline-none border inline rounded-sm border-gray-300 hover:border-sky-500 p-[6px]" />
                        </div>
                    </div>
                    <div className="justify-center space-y-5">
                        <p className="text-sm justify-center">By signing up, you agree to our <span className="text-sky-500 font-semibold text-sm cursor-pointer hover:text-sky-600">Terms and Conditions.</span></p>
                        <button className="bg-sky-500 text-xl font-semibold text-white border rounded-sm  cursor-pointer w-full p-2 hover:bg-sky-600 shadow-lg">Sign up</button>
                    </div>
                    <div className="flex justify-center">
                        <p>Already registered?<span className="p-2 font-semibold text-sky-500 cursor-pointer hover:text-sky-600" onClick={()=>setLoginSignup(false)}>Login</span></p>
                    </div>
                </div>
                    
                    :

                    <div className="border min-w-[400px] rounded-sm max-w-sm space-y-5 p-10  text-gray-600 shadow-xl bg-gray-50">
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
                            <input type='email' placeholder="vidhi@example.com" className="outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500 w-full" />
                        </div>
                        <div className="space-y-1">
                            <label className="block font-semibold">Password</label>
                            <input type='password' placeholder="must be atleast 6 characters" className="outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500 w-full " />
                        </div>
                        <p className="text-sm font-semibold cursor-pointer text-sky-500 hover:text-sky-600">Forgot password?</p>

                        <button className="bg-sky-500 text-xl font-semibold text-white border rounded-sm  cursor-pointer w-full p-2 hover:bg-sky-600 shadow-lg">Login</button>
                        <p>New to Internshala?<span className="p-2 font-semibold text-sky-500 hover:text-sky-600 cursor-pointer" onClick={()=>setLoginSignup(true)}>Register</span></p>

                    </div> 

                  




                }  </div>

            </div>

        </>

    );

}

export default Auth