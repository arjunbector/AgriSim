import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[color:var(--agrisim-background)] min-h-screen">
      <Navbar />
      <div className="justify-self-center mx-auto mb-6 p-12 ">
            <h1 className="text-[1.8rem] font-semibold mb-4 ">Login</h1>
            <h2>Name</h2>
            <input
              type="text"
              placeholder="Enter Your  Name"
              // value={}
              // onChange={(e) => setTeamName(e.target.value)}
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
            <h2>Phone</h2>
            <input
              type="text"
              placeholder="Enter Team Name"
              // value={}
              // onChange={(e) => setTeamName(e.target.value)}
              className="w-full p-2 border text-black border-gray-300 rounded"
            />

            <button
              className="px-4 py-2 rounded-full cursor-pointer bg-[#0E7D20] mt-4 w-full h-12 flex items-center justify-center font-bold"
              // onClick={() => handleCreateTeam()}
            >
              Login
            </button>

          </div>
    </main>
  );
}
