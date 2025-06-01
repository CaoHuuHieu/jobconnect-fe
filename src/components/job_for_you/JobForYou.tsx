import { CiShare1 } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa6";
import { MdDoNotDisturb } from "react-icons/md";
import { HiLink } from "react-icons/hi";
const JobForYou = () => {

    return (
        <>

            <div className="w-full max-w-3/4 mx-auto p-4">
              
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                     
                    <div className="md:col-span-2 space-y-4">
                         <p className="mb-[8px]">Jobs based on your activity on JobConnect</p>
                        <div className="border rounded-lg border-main-color p-4 shadow mb-[20px] cursor-pointer hover:shadow-md transition">
                            <h3 className="font-semibold text-lg hover:underline decoration-2">Agent Sales Team Lead I</h3>
                            <p className="text-sm text-gray-600 mt-[8px]">PropertyGuru Pte Ltd • <span className="font-bold">3.7 ★</span></p>
                            <p className="text-sm text-gray-500">Đà Nẵng</p>
                            <p className="text-sm mt-2 text-gray-700 line-clamp-2">Proven experience in sales leadership roles...</p>
                        </div>
                    </div>

                    <div className="md:col-span-3 border rounded-lg shadow mt-[10px]">
                        <div className= {`bg-[url(https://d2q79iu7y748jz.cloudfront.net/s/_headerimage/1960x400/86a3bbfe8c0c63ca2b95bb151735ef89)] w-full h-[160px] rounded-t-lg bg-cover relative`}>
                            <div className={`absolute bg-[url(https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/d027da212a65da531459f229ac134ecb)] border border-4 border-white rounded-lg bg-cover  w-[60px] h-[60px] bottom-[-40px] left-[20px]  `}></div>
                        </div>

                        <div className="p-4 mt-[40px]">
                            <h2 className="text-xl font-semibold mb-1 ">Fully Remote – Sales (Event Attendance Invites)</h2>
                            <p className="text-sm text-gray-600">
                                <a href="#" className="text-blue-600 underline font-bold underline-offset-4"> <span>OpenGov Asia <CiShare1 className="inline"/></span> </a> • 3.0 ★
                            </p>
                            <p className="text-sx text-gray-800">Việt Nam</p>

                            <p className="mt-2 font-semibold bg-gray-100 px-3 py-1 rounded inline-block">
                                19,000,000 VNĐ - 25,000,000 VNĐ a month
                            </p>

                            <div className="mt-4 flex gap-2">
                                <button className="cursor-pointer bg-main-color text-white px-4 py-2 rounded hover:bg-blue-700">Apply now</button>
                                <button className="cursor-pointer bg-zinc-300 p-2  rounded hover:bg-gray-200"><FaRegBookmark className="text-black text-[20px]"/></button>
                                <button className="cursor-pointer bg-zinc-300 p-2  rounded hover:bg-gray-200"><MdDoNotDisturb className="text-black text-[20px]"/></button>
                                <button className="cursor-pointer bg-zinc-300 p-2  rounded hover:bg-gray-200"><HiLink className="text-black text-[20px]"/></button>
                            </div>

                            <div className="mt-6 border-t pt-4">
                                <h3 className="font-semibold text-gray-700 mb-2">Job details</h3>
                                <p className="text-sm text-gray-700">19,000,000 VNĐ - 25,000,000 VNĐ a month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default JobForYou;