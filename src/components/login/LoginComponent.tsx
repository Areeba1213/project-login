'use client'
import  {signIn} from "next-auth/react";

export default function signInPage(){
    return(
        <div 
  className="flex items-end justify-evenly min-h-screen  bg-cover bg-center"
  style={{ backgroundImage: "url('/clas12.webp')" }}>

            {/* <div className="flex items-center justify-center min-h-screen bg-gray-100"> */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>
        <p className="text-center text-gray-600 mb-6">Sign up using your GitHub account.</p>
            <button onClick={() => signIn("github")}  className="w-full flex items-center justify-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition">sign In with Github
            
            </button>
        </div>
        </div>
        // </div>
    )
}