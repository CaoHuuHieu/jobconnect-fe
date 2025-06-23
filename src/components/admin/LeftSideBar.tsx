import { useState } from "react";

import { MdClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";

import "./LeftSideBar.css";
import { useNavigate } from "react-router-dom";

const sidebarItems = [
  {
    id: 1,
    icon: <FaPlus />,
    label: "Organization",
    link: "/admin/organizations",
  },
  {
    id: 2,
    icon: <RiAdminFill />,
    label: "Admin",
    link: "/admin/admins",
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
  const navigate = useNavigate();
  const [collapse, setCollapse] = useState(true);
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div
      className={`transition-all duration-100 ease-in-out  ${collapse ? "w-[250px]" : "w-[60px]"}  bg-blue-color p-[10px]`}
    >
      <button
        onClick={() => setCollapse((collapse) => !collapse)}
        className="mb-[10px] text-white p-2 flex items-center justify-between cursor-pointer font-bold rounded-xl w-full hover:bg-gray-200 hover:text-blue-color"
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
          onClick={(e) => {
            e.preventDefault();
            setSelectedItem(item.id);
            navigate(item.link ?? "#");
          }}
          className={`mb-[10px] p-2 flex items-center justify-between relative group cursor-pointer font-bold rounded-xl w-full hover:bg-gray-200 hover:text-blue-color ${selectedItem === item.id ? " bg-gray-200 text-blue-color " : "text-white"} `}
        >
          <div className="flex gap-2 items-center ">
            <span className="text-xl ">{item.icon}</span>
            <span className={` text-sm ${collapse ? "block " : "hidden"}`}>
              {item.label}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
