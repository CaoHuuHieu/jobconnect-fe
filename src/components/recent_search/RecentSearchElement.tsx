import { IoClose } from "react-icons/io5";
import { useState } from "react";
import type { RecentSearchItem } from "../../types/RecentSearchItem";




const RecentSearchElement = () => {

  const raw = localStorage.getItem("recentSearch");

  const [recentSearchData, setRecentSearchData] = useState<RecentSearchItem[]>(raw ? JSON.parse(raw) : []);

  const handleDelete = (id: number) => {
    const updatedRecentResearch = recentSearchData.filter(item => item.id !== id);
    setRecentSearchData(updatedRecentResearch);
    localStorage.setItem("recentSearch", JSON.stringify(updatedRecentResearch));
  };

  return (
    <div className="">
      {recentSearchData.map((item) => (
        <div className="w-[600px] bg-red mx-auto px-[8px] py-[12px] border-b-1 border-gray-200">
            <div key={item.id} className="flex justify-between items-center"  >
                <div className=" cursor-pointer flex-1"  onClick={() => console.log("Say close div")}>
                    <div className={` ${item?.keyword ? ' block ' : 'hidden'} `} >
                        {item.keyword}
                    </div>
                    <div>
                         {item.location}
                    </div>
                </div>
                <div>
                    <IoClose className="text-[30px] hover:bg-stone-100"  onClick={() => handleDelete(item.id)}/>
                </div>
            </div>
        </div>
       
      ))}
    </div>
  );

};

export default RecentSearchElement;