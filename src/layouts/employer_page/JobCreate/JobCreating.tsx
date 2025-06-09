import { MdDone, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { RiErrorWarningFill } from "react-icons/ri";

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import TextInput from "../../../components/common/TextInput";
import { Button } from "../../../components/common/Button";
import DropdownList from "../../../components/common/DropdownList";
import EmployeeHeader from "../Header/EmployerHeader";

type JobBannerProps = {
  stepName: string;
  image: string;
};

function JobBanner({ stepName, image }: JobBannerProps) {
  return (
    <>
      <div className="flex justify-around mt-[40px] items-center rounded-xl   bg-[#F7F6F5]">
        <h2 className="text-2xl font-semibold mb-2">{stepName}</h2>
        <img src={`../../../public/${image}`} alt="" />
      </div>
    </>
  );
}

const JobType = {
  FULL_TIME: "full_time",
  PART_TIME: "part_time",
  TEMPORARY: "temporary",
  CONTRACT: "contract",
  INTERSHIP: "internship",
  COMMISSION: "commission",
  PERMANENT: "permanent",
};

function toString(input: number | undefined | null) {
  if (input == undefined || input == null) return undefined;
  return input + "";
}

type Job = {
  companyName?: string;
  fullName?: string;
  phoneNumber?: string;
  language?: string | "vn";
  country?: string | "vn";
  title?: string;
  location?: string;
  partTimeJob?: {
    type?: string | null;
    fixed?: number | null;
    from?: number | null;
    to?: number | null;
  } | null;
  termContractJob?: {
    key?: string;
    length?: number;
    period?: string;
  } | null;
  payment?: {
    type?: string;
    from?: string;
    to?: string;
    rate?: string;
  };
  jobDescription?: string;
  numberCandidate?: string;
};

const jobTypes = [
  {
    key: JobType.FULL_TIME,
    name: "Full-time",
  },
  {
    key: JobType.PART_TIME,
    name: "Part-time",
  },
  {
    key: JobType.TEMPORARY,
    name: "Temporary",
  },
  {
    key: JobType.CONTRACT,
    name: "Contract",
  },
  {
    key: JobType.INTERSHIP,
    name: "Internship",
  },
  {
    key: JobType.COMMISSION,
    name: "Commission",
  },
  {
    key: JobType.PERMANENT,
    name: "Permanent",
  },
];

function JobCreateInformation() {
  const [showPayBy, setShowPayBy] = useState("range");
  const [rate, setRate] = useState("per_hour");

  const [jobTypeSelected, setJobTypeSelected] = useState<Set<string>>(
    new Set()
  );
  const [expectedHourShowby, setExpectedHourShowby] =
    useState<string>("fixed_hours");

  const toggleClick = (key: string) => {
    setJobTypeSelected((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };
  const [form, setForm] = useState<Job>({
    language: "vn",
    country: "vn",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="max-w-[820px] mx-auto p-6 bg-white rounded-lg ">
      <JobBanner stepName="Describe the job" image="image_003.png" />
      <form onSubmit={handleSubmit} className="space-y-4 mt-[16px] p-[32px]">
        {/* CONTACT */}
        <div className="my-[30px]">
          <div className="my-[30px]">
            <TextInput
              label="Company name"
              name="companyName"
              isRequired={true}
              value={form.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="my-[30px]">
            <TextInput
              label="First and last name"
              isRequired={true}
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-bold text-gray-700">
              Phone number
            </label>
            <p className="text-xs text-gray-500 mt-1">
              For account management communication. Not visible to job seekers.
            </p>
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex h-[40px] gap-4 items-center space-x-1 rounded-l-lg border  border-gray-300 p-2 bg-gray-100  focus:border-main-color focus:border-b-4">
                <img
                  src="https://flagcdn.com/w320/vn.png"
                  alt=""
                  className="w-[36px] h-[24px] rounded-sm "
                />
                <span className="font-bold">+84</span>
                <MdOutlineKeyboardArrowDown />
              </div>

              <input
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                className="w-full h-[40px] rounded-r-lg border border-gray-400 p-2 outline-none focus:border-main-color focus:border-b-4"
                placeholder="Phone number"
              />
            </div>
          </div>
        </div>
        <hr className="border-gray-300 " />

        {/* JOB BASIC INFORMATION */}
        <div className="">
          <div className="flex gap-4 items-center justify-between py-[20px]">
            <p className="font-bold">Job post will be in</p>
            <div className="min-w-[200px]">
              <DropdownList
                label="Language"
                name="language"
                value={form.language}
                items={[
                  { key: "en", value: "English" },
                  { key: "vn", value: "Việt Nam" },
                ]}
                onChange={handleChange}
              />
            </div>
            <div className="min-w-[200px]">
              <DropdownList
                label="Country"
                name="country"
                value={form.country}
                items={[{ key: "vn", value: "Việt Nam" }]}
                onChange={handleChange}
              />
            </div>
          </div>
          <hr className="border-gray-300 " />
          <div className="my-[32px]">
            <TextInput
              label="Job title"
              name="title"
              isRequired={true}
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <hr className="border-gray-300" />

          <div className="my-[32px]">
            <TextInput
              label="Where would you like to advertise this job?"
              description="Enter your location"
              isRequired={true}
              name="location"
              value={form.location}
              onChange={handleChange}
            />
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* TYPE OF JOB */}
        <div className="space-y-4 my-[32px]">
          <label className="font-bold ">
            What type of job is it? <span className="text-red-600"> * </span>
          </label>
          <div className="flex gap-2 flex-wrap my-[10px]">
            {jobTypes.map((type) => (
              <div
                key={type.key}
                onClick={() => toggleClick(type.key)}
                className={`px-[8px] py-[4px] ${jobTypeSelected.has(type.key) ? "bg-[#E4E2E0]" : "bg-white"} border cursor-pointer rounded-2xl flex items-center gap-1`}
              >
                {jobTypeSelected.has(type.key) ? <MdDone /> : <FiPlus />}
                <span>{type.name}</span>
              </div>
            ))}
          </div>
          {jobTypeSelected.size == 0 && (
            <p className="text-red-700 flex items-center">
              <RiErrorWarningFill /> <span>Make a selection.</span>
            </p>
          )}

          {jobTypeSelected.has(JobType.PART_TIME) && (
            <div className="my-[20px]">
              <p className="font-bold">Expected hours</p>
              <div className="flex gap-4 items-end">
                <div className="w-[200px]">
                  <DropdownList
                    label="Show by"
                    value={expectedHourShowby}
                    onChange={(e) => {
                      setForm((form) => ({
                        ...form,
                        partTimeJob: null,
                        termContractJob: null,
                      }));
                      setExpectedHourShowby(e.target.value);
                    }}
                    items={[
                      { key: "fixed_hours", value: "Fixed hours" },
                      { key: "range", value: "Range" },
                      { key: "maximum", value: "Maximum" },
                      { key: "minium", value: "Minium" },
                    ]}
                  />
                </div>
                {(() => {
                  switch (expectedHourShowby) {
                    case "range":
                      return (
                        <div className="flex gap-4">
                          <div>
                            <TextInput
                              name="partTimeJob.from"
                              type="number"
                              value={toString(form?.partTimeJob?.from)}
                              label="From"
                              onBlur={handleChange}
                            />
                          </div>
                          <div>
                            <TextInput
                              label="To"
                              type="number"
                              name="partTimeJob.to"
                              value={toString(form?.partTimeJob?.to)}
                              onBlur={handleChange}
                            />
                          </div>
                        </div>
                      );
                    case "maximum":
                      return (
                        <div>
                          <TextInput
                            label="No more than"
                            name="partTimeJob.to"
                            value={form?.partTimeJob?.to + ""}
                            onChange={handleChange}
                          />
                        </div>
                      );
                    case "minium":
                      return (
                        <div>
                          <TextInput
                            label="No less than"
                            name="partTimeJob.to"
                            value={
                              form?.partTimeJob?.from
                                ? form?.partTimeJob?.from + ""
                                : ""
                            }
                            onBlur={handleChange}
                          />
                        </div>
                      );
                    default:
                      return (
                        <div>
                          <TextInput
                            label="Fixed at"
                            name="partTimeJob.fixed"
                            value={
                              form?.partTimeJob?.fixed
                                ? form?.partTimeJob?.fixed + ""
                                : ""
                            }
                            onBlur={(e) => {
                              console.log("hihihj");
                              handleChange(e);
                            }}
                          />
                        </div>
                      );
                  }
                })()}
                <div className="mb-[10px] min-w-[200px]">Hours per week</div>
              </div>
            </div>
          )}

          {(jobTypeSelected.has(JobType.TEMPORARY) ||
            jobTypeSelected.has(JobType.CONTRACT) ||
            jobTypeSelected.has(JobType.INTERSHIP)) && (
            <div className="my-[20px]">
              <p className="font-bold">How long is the contract?</p>
              <div className="flex gap-4 items-end">
                <div>
                  <TextInput label="Length" />
                </div>
                <div className="w-[200px]">
                  <DropdownList
                    label="Period"
                    value={expectedHourShowby}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setExpectedHourShowby(e.target.value);
                    }}
                    items={[
                      { key: "day", value: "day(s)" },
                      { key: "week", value: "week(s)" },
                      { key: "month", value: "month(s)" },
                    ]}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <hr className="border-gray-300" />

        {/* PAYMENT */}
        <div className="space-y-4 my-[32px]">
          <p className="font-bold ">Payment</p>
          <div className="flex gap-2">
            <div className="flex-1">
              <DropdownList
                label="Show pay by"
                onChange={(e) => setShowPayBy(e.target.value)}
                items={[
                  { key: "range", value: "Range" },
                  { key: "starting_amount", value: "Starting amount" },
                  { key: "maximum_amount", value: "Maximum amount" },
                  { key: "exact_amount", value: "Exact amount" },
                ]}
              />
            </div>

            <div className="flex-2">
              {showPayBy === "range" ? (
                <div className="flex gap-2 items-end">
                  <div>
                    <TextInput label="Minimum" />
                  </div>
                  <p className="mb-[12px]">to</p>
                  <div>
                    <TextInput label="Maxium" />
                  </div>
                </div>
              ) : (
                <div>
                  <TextInput label="Amount" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <DropdownList
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                label="Rate"
                items={[
                  { key: "per_hour", value: "per hour" },
                  { key: "per_day", value: "per day" },
                  { key: "per_week", value: "per week" },
                  { key: "per_month", value: "per month" },
                  { key: "per_year", value: "per year" },
                ]}
              />
            </div>
          </div>
        </div>
        <hr className="border-gray-300" />

        {/* JOB DESCRIPTION */}
        <div className="space-y-4 my-[32px]">
          <p className="font-bold mb-[12px]">
            Job description <span className="text-red-500">*</span>
          </p>
          <ReactQuill
            className="h-[600px] rounded-xl"
            theme="snow"
            value={form.jobDescription}
            onChange={(e) => {
              console.log(e);
              setForm((form) => ({
                ...form,
                jobDescription: e,
              }));
            }}
          />
          ;
        </div>

        {/* NUMBER OF PEOPLE */}
        <hr className="border-gray-300 mt-[20px]" />
        <div className="space-y-4 my-[32px]">
          <TextInput
            name="numberCandidate"
            value={form.numberCandidate}
            onBlur={handleChange}
            label="Number of people to hire for this job"
            isRequired={true}
          />
        </div>
        <div className="pt-4 mt-[20px] flex justify-end">
          <Button label=" Continue →" type="submit"></Button>
        </div>
      </form>
    </div>
  );
}

function Feedback() {
  return (
    <>
      <p className="text-center mt-[30px]">
        Have feedback{" "}
        <a
          href="#"
          className="text-main-color cursor-pointer font-bold hover:text-blue-500"
        >
          Tell us more.
        </a>
      </p>
    </>
  );
}

function Footer() {
  return (
    <div className="flex justify-between px-[20px] h-[100px] items-center border-t mt-[20px]">
      <div className="underline">©2025 JobConnect</div>
      <div className="">
        <a href="#" className="underline mx-[4px] hover:text-main-color">
          Cookies, privacy and terms
        </a>
        –
        <a href="#" className="underline  mx-[4px] hover:text-main-color">
          Privacy center
        </a>
        –
        <a href="#" className="underline  mx-[4px] hover:text-main-color">
          Security
        </a>
        –
        <a
          href="#"
          className="underline  mx-[4px] hover:text-main-colorhover:text-main-color"
        >
          Billing
        </a>
        –
        <a href="#" className="underline  mx-[4px] hover:text-main-color">
          Contact
        </a>
      </div>
    </div>
  );
}

function JobCreating() {
  return (
    <>
      <EmployeeHeader />
      <JobCreateInformation />
      <Feedback />
      <Footer />
    </>
  );
}

export default JobCreating;
