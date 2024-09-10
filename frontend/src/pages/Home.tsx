import { Auth } from "@/components/Auth"

export const Home =()=>{
    return <div className="grid grid-cols-10 w-full h-screen ">
        <div className="col-span-4 bg-black flex flex-col justify-center items-center ">
            <p className="text-4xl font-bold mb-4 text-white ">
            Daily Code
            </p>
        </div>
        <div className="col-span-6 bg-[#111827]">
            <Auth />
        </div>
    </div>

 
}