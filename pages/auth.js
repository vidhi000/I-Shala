import axios from "axios";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from "recoil";
import { loginState } from "../atom/loginAtom";
toast.configure();



const Auth = () => {

    const [isLogin, setIsLogin] = useRecoilState(loginState)

    const emailRef = useRef();
    const passwordRef = useRef();
    const LemailRef = useRef();
    const LpasswordRef = useRef();
    const fnameRef = useRef();
    const lnameRef = useRef();
    const contactRef = useRef();
    const formRef = useRef();
    const route = useRouter()
    const userReg = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value, passwordRef.current.value, fnameRef.current.value,
            lnameRef.current.value, contactRef.current.value)
        axios.post("http://localhost:5000/user/signup", {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            Contact: contactRef.current.value,
            firstName: fnameRef.current.value,
            lastName: lnameRef.current.value
            
        }).then((res) => {
            console.log(res.data)
            toast("Signup Successfull",{autoClose : 1500,position : "bottom-right"})
            setLoginSignup(false)
        })
       
        formRef.current.reset();
    }

    const userLogin = (e) => {

        e.preventDefault();
        // console.log(LemailRef.current.value, LpasswordRef.current.value)
        axios.post("http://localhost:5000/user/login", {
            email: LemailRef.current.value,
            password: LpasswordRef.current.value
        }).then((res) => {
            setIsLogin(true)
            localStorage.setItem('i_shala_token',res.data.token);
            localStorage.setItem('i_shala_user_email',res.data.email)
            localStorage.setItem('i_shala_user_fname',res.data.Fname)
            localStorage.setItem('i_shala_isAuth',res.data.isAuth)
           route.push("/applications")
           toast("Login Successfull",{autoClose : 1500,position : "bottom-right"})
        }).catch((e)=>{
            console.log(e)
        })
       
        formRef.current.reset();
    }







    const [loginSignup, setLoginSignup] = useState(true);
    return (
        <>

            <form className="min-h-screen relative " ref={formRef}
                style={{ backgroundImage: "url('backg.jpg')",
                 backgroundRepeat: "no-repeat" , backgroundSize : "1500px"}}
            >


                <div className="max-w-screen-2xl mx-auto p-10 flex justify-around">
                    <div>
                        <p className="font-bold text-4xl flex">A
                            <span className="relative">
                                <img src="https://internshala.com/static/images/registration/student/brush_stroke.svg" />
                                <span className="absolute z-10 top-0 right-3 text-white">Free</span>
                            </span>
                            ride to your dream career</p>
                        <div className="justify-between space-y-3 text-4xl">
                            <p className="font-semibold text-2xl p-4 text-gray-700">Register and apply to 10000+ opportunities</p>

                            <p className="flex font-semibold text-2xl text-gray-700">
                                <img src="https://internshala.com/static/images/common/check_box.svg" />
                                Internships
                            </p>
                            <p className="flex font-semibold text-2xl text-gray-700">
                                <img src="https://internshala.com/static/images/common/check_box.svg" />
                                Work from home Internships
                            </p>
                        </div>
                    </div>



                    {
                        loginSignup ?

                            <div className="border rounded-sm min-w-[400px] max-w-md space-y-3 p-8 shadow-xl text-gray-600 bg-gray-50 ml-24">
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
                                    <input type='email' ref={emailRef} placeholder="vidhi@example.com" className="outline-none p-[6px] border shadow-md rounded-sm border-gray-300 hover:border-sky-500  w-full" />
                                </div>
                                <div className="space-y-1">
                                    <label className="block font-semibold">Password</label>
                                    <input type='password' ref={passwordRef} placeholder="must be atleast 6 characters" className="shadow-md outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500  w-full" />
                                </div>

                                <div className="space-y-1">
                                    <label className="block font-semibold">Contact</label>
                                    <input type='number' ref={contactRef} placeholder="must be atleast 10 numbers" className="shadow-md outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500  w-full" />
                                </div>

                                <div className="grid w-fit grid-cols-2 gap-10">
                                    <div className="flex flex-col space-y-1">
                                        <label className="block font-semibold ">First Name</label>
                                        <input type='first name' ref={fnameRef} placeholder="Vidhi" className="shadow-md outline-none border inline rounded-sm border-gray-300 hover:border-sky-500 p-[6px]" />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <label className="block font-semibold">Last Name</label>
                                        <input type='first name' ref={lnameRef} placeholder="Rana" className="shadow-md outline-none border inline rounded-sm border-gray-300 hover:border-sky-500 p-[6px]" />
                                    </div>
                                </div>
                                <div className="justify-center space-y-5">
                                    <p className="text-sm justify-center">By signing up, you agree to our <span className="text-sky-500 font-semibold text-sm cursor-pointer hover:text-sky-600">Terms and Conditions.</span></p>
                                    <button className="bg-sky-500 text-xl font-semibold text-white border rounded-sm  cursor-pointer w-full p-2 hover:bg-sky-600 shadow-lg" onClick={userReg}>Sign up</button>
                                    
                                </div>
                                <div className="flex justify-center">
                                    <p>Already registered?<span className="p-2 font-semibold text-sky-500 cursor-pointer hover:text-sky-600" onClick={() => setLoginSignup(false)}>Login</span></p>
                                </div>
                            </div>

                            :

                            <div className="border min-w-[400px] rounded-sm max-w-sm space-y-5 p-10  text-gray-600 shadow-xl bg-gray-50">
                                <div className="flex space-x-2 border rounded-sm max-w-full items-center justify-center bg-white shadow-md">
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
                                    <input type='password' ref={LpasswordRef} placeholder="must be atleast 6 characters" className="shadow-md outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500 w-full " />
                                </div>
                                <p className="text-sm font-semibold cursor-pointer text-sky-500 hover:text-sky-600">Forgot password?</p>

                                <button className="bg-sky-500 text-xl font-semibold text-white border rounded-sm  cursor-pointer w-full p-2 hover:bg-sky-600 shadow-lg" onClick={userLogin}>Login</button>
                                <p>New to Internshala?<span className="p-2 font-semibold text-sky-500 hover:text-sky-600 cursor-pointer bg-gray-50" onClick={() => setLoginSignup(true)}>Register</span></p>

                            </div>






                    }  </div>

            </form>

        </>

    );

}

export default Auth