
import { IoSearchSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import type { RecentSearchItem } from "../../types/RecentSearchItem";
import RecentSearchElement from "../../components/recent_search/RecentSearchElement";
import JobForYou from "../../components/job_for_you/JobForYou";

const addValueToLocalStorage = ({ keyword, location }: { keyword: string; location: string }) => {

  const recentResearchRaw = localStorage.getItem("recentSearch");
  const recentResearchData: RecentSearchItem[] = recentResearchRaw ? JSON.parse(recentResearchRaw) : [];

  const maxId = recentResearchData.reduce((max, item) => Math.max(max, item.id), 0);
  const newResearch: RecentSearchItem = {
    id: maxId + 1,
    keyword,
    location,
    result: 1 
  };

  recentResearchData.unshift(newResearch);

  localStorage.setItem("recentSearch", JSON.stringify(recentResearchData));
};

const Home = () => {

    const [jobForYouSelected, setJobForYouSelect] = useState(false);

    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
     
    const findJobs = () => {

        addValueToLocalStorage({keyword:keyword, location:location});
    };

    return (
        <>
            <div>
                <div className="max-w-3xl mx-auto mt-[24px]">
                    <div className="flex border items-center bg-white rounded-md border-stone-700 shadow-xl/20 px-[6px] py-[10px] space-x-4">
                        <div className="flex items-center space-x-2 flex-1">
                            <IoSearchSharp className="text-gray-500 text-[30px] mx-[8px]" />
                            <input type="text" placeholder="Job title, keywords, or company"
                                className="w-full outline-none text-lg placeholder-gray-500"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                        </div>

                        <div className="w-px h-6 bg-gray-300"></div>

                        <div className="flex items-center space-x-2 flex-1">
                            <FaLocationDot className="text-gray-500 text-[22px] mx-[8px]" />
                            <input type="text" placeholder='City, state, zip code, or "remote"'
                                className="w-full outline-none text-lg placeholder-gray-500"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <button onClick={() => findJobs()} className="bg-main-color text-white text-sm font-medium px-4 py-2 rounded-md cursor-pointer hover:bg-blue-800 transition">
                            Find jobs
                        </button>
                    </div>
                </div>
                <div className="mt-[40px] flex justify-center border-b-1 border-stone-200">
                    <button className={`w-[300px] cursor-pointer py-[20px] text-lg font-normal border-b-2 ${jobForYouSelected ? "border-main-color " : "border-transparent"
                        }`} onClick={() => setJobForYouSelect(true)} >Jobs for you</button>

                    <button className={`w-[300px] cursor-pointer py-[20px] text-lg font-normal border-b-2 ${!jobForYouSelected ? "border-main-color" : "border-transparent"
                        }`} onClick={() => setJobForYouSelect(false)} >Recent searchs</button>
                </div>


            </div>
            <div>
                {jobForYouSelected ? <JobForYou /> : <RecentSearchElement />}
            </div>
        </>
    )
};

export default Home;