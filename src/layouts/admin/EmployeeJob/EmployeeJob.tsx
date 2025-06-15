import { useRef, useState } from "react";
import { Button } from "../../../components/common/Button";
import { IoIosArrowDown } from "react-icons/io";
import HandleClick from "../../../utils/clickUtils";

import "./EmployeeJob.css";
const jobStatus = ["Open", "Paused", "Closed"];

function JobFilter() {
  const [status, setStatus] = useState<string[]>(["Open", "Paused"]);
  const [title, setTitle] = useState<string>("");

  const [showStatusDiv, setShowStatusDiv] = useState(false);
  const [showTitleDiv, setShowTitleDiv] = useState(false);
  const [showLocationDiv, setShowLocationDiv] = useState(false);

  const refStatusButton = useRef<HTMLDivElement>(null);
  const refStatusContainer = useRef<HTMLDivElement>(null);

  const refTitleButton = useRef<HTMLDivElement>(null);
  const refTitleContainer = useRef<HTMLDivElement>(null);

  const refLocationButton = useRef<HTMLDivElement>(null);
  const refLocaltionContainer = useRef<HTMLDivElement>(null);

  HandleClick(setShowStatusDiv, refStatusButton, refStatusContainer);
  HandleClick(setShowTitleDiv, refTitleButton, refTitleContainer);
  HandleClick(setShowLocationDiv, refLocationButton, refLocaltionContainer);

  const handleCheckboxChange = (item: string) => {
    setStatus((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
    );
  };

  const handleClearStatus = () => {
    setStatus([]);
  };

  return (
    <div className="flex p-[20px] gap-3">
      {/* STATUS */}
      <div className="relative">
        <p
          ref={refStatusButton}
          onClick={() => setShowStatusDiv((showStatusDiv) => !showStatusDiv)}
          className="px-[12px] py-1 border flex items-center gap-3 rounded-xl font-bold cursor-pointer"
        >
          <span>Status</span>{" "}
          <span className="text-xl">
            <IoIosArrowDown />
          </span>
        </p>
        <div
          ref={refStatusContainer}
          className={`absolute bottom-[-220px] z-10 border bg-zinc-50 p-[10px] rounded-xl ${showStatusDiv ? "block" : "hidden"}`}
        >
          {jobStatus.map((item) => (
            <div
              key={item}
              className=" w-[200px] rounded-xl  hover:bg-gray-400"
            >
              <label className=" p-[12px] block w-full cursor-pointer">
                <input
                  className="mr-2"
                  type="checkbox"
                  name={item}
                  value={item}
                  checked={status.includes(item)}
                  onChange={() => handleCheckboxChange(item)}
                />
                {item}
              </label>
            </div>
          ))}
          <div className="pt-[10px] border-t border-gray-300 flex justify-between">
            <button
              className="underline text-blue-500"
              onClick={handleClearStatus}
            >
              Clear all
            </button>
            <button className="p-[6px] bg-main-color text-white rounded-xl">
              View result
            </button>
          </div>
        </div>
      </div>

      {/* TITLE */}
      <div className="relative">
        <p
          ref={refTitleButton}
          onClick={() => setShowTitleDiv((showTitleDiv) => !showTitleDiv)}
          className="px-[12px] py-1 border flex items-center gap-3 rounded-xl font-bold cursor-pointer"
        >
          <span>Title</span>{" "}
          <span className="text-xl">
            <IoIosArrowDown />
          </span>
        </p>
        <div
          ref={refTitleContainer}
          className={`absolute bottom-[-120px] z-1 w-[300px] border bg-zinc-50 border p-[10px] rounded-xl ${showTitleDiv ? "block" : "hidden"}`}
        >
          <div>
            <input
              className="mr-2 w-full border rounded-sm p-1"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Search by job title"
            />
          </div>
          <div className="pt-[10px] mt-2 border-t border-gray-300 flex justify-end">
            <button className="p-[6px] bg-main-color text-white rounded-xl">
              View result
            </button>
          </div>
        </div>
      </div>

      {/* LOCATION */}
      <div className="relative">
        <p
          ref={refLocationButton}
          onClick={() =>
            setShowLocationDiv((showLocationDiv) => !showLocationDiv)
          }
          className="px-[12px] py-1 border flex items-center gap-3 rounded-xl font-bold cursor-pointer"
        >
          <span>Location</span>{" "}
          <span className="text-xl">
            <IoIosArrowDown />
          </span>
        </p>
        <div
          ref={refLocaltionContainer}
          className={`absolute bottom-[-120px] z-1 w-[300px] border bg-zinc-50 border p-[10px] rounded-xl ${showLocationDiv ? "block" : "hidden"}`}
        >
          <div>
            <input
              className="mr-2 w-full border rounded-sm p-1"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Search by location"
            />
          </div>
          <div className="pt-[10px] mt-2 border-t border-gray-300 flex justify-end">
            <button className="p-[6px] bg-main-color text-white rounded-xl">
              View result
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobHeader() {
  const [tab, setTab] = useState("job");
  return (
    <div className="flex justify-between h-[68px] items-center pr-[20px] border border-gray-300">
      <div className="flex justify-between gap-7 items-center">
        <p className="font-bold text-2xl border-r px-[20px]">Jobs</p>
        <div>
          <a
            onClick={() => setTab("job")}
            href="#"
            className={`p-[10px] rounded-xl  mr-4  border-gray-400" ${tab === "job" ? "border bg-[#595959] text-white" : " bg-white"}`}
          >
            All Jobs
          </a>
          <a
            onClick={() => setTab("tag")}
            href="#"
            className={`p-[10px] rounded-xl  mr-4  " ${tab === "tag" ? "border bg-[#595959] text-white" : " bg-white"}`}
          >
            Tags
          </a>
        </div>
      </div>
      <div>
        <Button label="Post a job"></Button>
      </div>
    </div>
  );
}

function JobList() {
  return (
    <div className="p-[20px]">
      <table className="w-full">
        <tr>
          <th className="max-w-[40px]">
            <input type="checkbox" name="" id="" />
          </th>
          <th className="min-w-[350px]">Job title</th>
          <th>Candidates</th>
          <th>Sponsorship status</th>
          <th>Date posted</th>
          <th>Email</th>
          <th>Job status</th>
          <th></th>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td className="text-left">
            <p className="font-bold text-xl ">Java developer</p>
            <p>Da Nang</p>
          </td>
          <td>10</td>
          <td>No support</td>
          <td>12-12-2022</td>
          <td>caohuuhieu12b8@gmail.com</td>
          <td>OPEN</td>
          <td className="font-bold text-2xl">...</td>
        </tr>
      </table>
    </div>
  );
}

export default function Jobs() {
  return (
    <>
      <JobHeader />
      <JobFilter />
      <JobList />
    </>
  );
}
