import { useState } from "react";

import { MdClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { FaUserGroup } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import "./LeftSideBar.css";

const sidebarItems = [
  {
    id: 1,
    icon: <FaPlus />,
    label: "Organization",
  },
  {
    id: 2,
    icon: <PiBagFill />,
    label: "Jobs",
  },
  {
    id: 3,
    icon: <FaUserGroup />,
    label: "Candidates",
  },
  {
    id: 4,
    icon: <FaCalendarAlt />,
    label: "Interviews",
    link: "#",
  },
];
export default function LeftSideBar() {
  const [collapse, setCollapse] = useState(true);
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div
      className={`transition-all duration-100 ease-in-out  ${collapse ? "w-[250px]" : "w-[60px]"} h-screen bg-[#0156A6] p-[10px]`}
    >
      <button
        onClick={() => setCollapse((collapse) => !collapse)}
        className="mb-[10px] text-white p-2 flex items-center justify-between cursor-pointer font-medium rounded-xl w-full hover:bg-gray-200 hover:text-gray-900"
      >
        <div className="flex gap-2 items-center ">
          <span className="text-2xl ">
            {collapse ? <MdClose /> : <GiHamburgerMenu />}
          </span>
          <span className={` text-sm ${collapse ? "block" : "hidden"}`}>
            Collapse
          </span>
        </div>
      </button>
      {sidebarItems.map((item) => (
        <button
          key={item.id}
          tabIndex={0}
          onClick={() => {
            setSelectedItem(item.id);
          }}
          className={`mb-[10px] p-2 flex items-center justify-between relative group cursor-pointer font-medium rounded-xl w-full hover:bg-gray-200 hover:text-gray-900 ${selectedItem === item.id ? " bg-gray-200 text-gray-900 " : "text-white"} `}
        >
          <div className="flex gap-2 items-center ">
            <span className="text-xl ">{item.icon}</span>
            <span className={` text-sm ${collapse ? "block" : "hidden"}`}>
              {item.label}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
