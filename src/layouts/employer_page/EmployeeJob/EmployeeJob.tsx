import { useState } from "react";
import { Button } from "../../../components/common/Button";
import { IoIosArrowDown } from "react-icons/io";

const jobStatus = ["Open", "Paused", "Closed"];

function JobFilter() {
  const [status, setStatus] = useState<string[]>(["Open", "Paused"]);
  const [title, setTitle] = useState<string>("");
  const [showStatusDiv, setShowStatusDiv] = useState(false);
  const [showTitleDiv, setShowTitleDiv] = useState(false);

  const handleCheckboxChange = (item: string) => {
    setStatus((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
    );
  };

  return (
    <div className="flex p-[20px]">
      {/* STATUS */}
      <div className="relative">
        <p
          onClick={() => setShowStatusDiv((showStatusDiv) => !showStatusDiv)}
          className="px-[12px] py-1 border flex items-center gap-3 rounded-xl font-bold cursor-pointer"
        >
          <span>Status</span>{" "}
          <span className="text-xl">
            <IoIosArrowDown />
          </span>
        </p>
        <div
          className={`absolute bottom-[-170px] border bg-zinc-50 p-[10px] rounded-xl ${showStatusDiv ? "block" : "hidden"}`}
        >
          {jobStatus.map((item) => (
            <div
              key={item}
              className="p-[12px] w-[200px] rounded-xl  hover:bg-gray-400"
            >
              <label>
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
        </div>
      </div>

      {/* TITLE */}
      <div className="relative">
        <p
          onClick={() => setShowTitleDiv((showTitleDiv) => !showTitleDiv)}
          className="px-[12px] py-1 border flex items-center gap-3 rounded-xl font-bold cursor-pointer"
        >
          <span>Title</span>{" "}
          <span className="text-xl">
            <IoIosArrowDown />
          </span>
        </p>
        <div
          className={`absolute bottom-[-20px] border bg-zinc-50 p-[10px] rounded-xl ${showTitleDiv ? "block" : "hidden"}`}
        >
          <input
            className="mr-2"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Search by job title"
          />
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

export default function Jobs() {
  return (
    <>
      <JobHeader />
      <JobFilter />
    </>
  );
}
