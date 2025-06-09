import { useState } from "react";

import { MdClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { FaUserGroup } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import "./SideBar.css";
import EmployeeHeader from "../Header/EmployerHeader";
import Jobs from "../EmployeeJob/EmployeeJob";

const sidebarItems = [
  {
    id: 1,
    icon: <FaPlus />,
    label: "New",
    childrens: [
      {
        id: "1.1",
        icon: <PiBagFill />,
        label: "Job",
        link: "#",
      },
      {
        id: "1.2",
        icon: <FaUser />,
        label: "User",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    icon: <PiBagFill />,
    label: "Jobs",
    childrens: [
      {
        id: "2.1",
        label: "All Jobs",
        icon: null,
        link: "#",
      },
      {
        id: "2.2",
        label: "Tags",
        link: "#",
      },
    ],
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
function SideBar() {
  const [collapse, setCollapse] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div
      className={`transition-all duration-100 ease-in-out  ${collapse ? "w-[250px]" : "w-[60px]"} h-screen bg-black p-[10px]`}
    >
      <button
        onClick={() => setCollapse((collapse) => !collapse)}
        className="mb-[10px] text-white p-2 flex items-center justify-between cursor-pointer font-medium rounded-xl w-full hover:bg-gray-200 hover:text-gray-900"
      >
        <div className="flex gap-2 items-center ">
          <span className="text-2xl ">
            {!collapse ? <GiHamburgerMenu /> : <MdClose />}
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
          {item.childrens && collapse && <FaChevronRight />}

          {item.childrens && (
            <div
              className={`absolute right-[-220px] top-0 p-[4px] rounded-2xl w-[200px] bg-black hidden group-hover:block left_bar_child`}
            >
              {item.childrens.map((child) => (
                <div
                  key={child.id}
                  className="flex gap-2 p-[6px] items-center rounded-2xl mb-[4px] text-sm text-white left_bar_child hover:bg-gray-400"
                >
                  {child.icon && <span>{child.icon}</span>}
                  <span>{child.label}</span>
                </div>
              ))}
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

export default function EmployerAdminPage() {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="w-full">
        <EmployeeHeader />
        <Jobs />
      </div>
    </div>
  );
}
