"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {useState } from "react";
import { useRouter } from 'next/navigation';


export default function Login() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleLoginClick = () => {
    if (name.trim() === "" || phone.trim() === "") {
      alert("Please enter your name and phone number.");
      return;
    }
    setTimeout(()=>{
      setShowOtp(true);
    },2000)
  };

  return (
    <main className="bg-[color:var(--agrisim-background)] min-h-screen">
      <Navbar />
      <div className="justify-self-center mx-auto mb-6 p-12 ">
        <h1 className="text-[1.8rem] font-semibold mb-4 ">Login</h1>
        <h2>Name</h2>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border text-black border-gray-300 rounded"
        />
        <h2>Phone</h2>
        <input
          type="text"
          placeholder="Enter Your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border text-black border-gray-300 rounded"
        />

        {!showOtp && (
          <button
            className="px-4 py-2 rounded-full cursor-pointer bg-[#0E7D20] mt-4 w-full h-12 flex items-center justify-center font-bold"
            onClick={handleLoginClick}
          >
            Send OTP
          </button>
        )}

        {showOtp && (
          <div>
            <h2>OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
            <button
            className="px-4 py-2 rounded-full cursor-pointer bg-[#0E7D20] mt-4 w-full h-12 flex items-center justify-center font-bold"
            onClick={()=>{
              router.push("/") ;
            }}
          >
            Sign in
          </button>
          </div>
        )}
      </div>
    </main>
  );
}
