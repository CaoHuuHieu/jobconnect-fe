import { MdEdit } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { RiErrorWarningFill } from "react-icons/ri";

import { useState } from "react";

import TextInput from "../../../components/common/TextInput";
import { Button } from "../../../components/common/Button";
import DropdownList from "../../../components/common/DropdownList";
import EmployeeHeader from "../Header/EmployerHeader";

type JobBannerProps = {
  stepName: string,
  image: string
}

function JobBanner({ stepName, image }: JobBannerProps) {
  return (
    <>
      <div className="flex justify-around mt-[40px] items-center rounded-xl   bg-[#F7F6F5]">
        <h2 className="text-2xl font-semibold mb-2">
          {stepName}
        </h2>
        <img src={`../../../public/${image}`} alt="" />
      </div>
    </>
  )
}




const  JobType = {
  FULL_TIME: "full_time",
  PART_TIME: "part_time",
  TEMPORARY: "temporary",
  CONTRACT: "contract",
  INTERSHIP: "internship",
  COMMISSION: "commission",
  PERMANENT: "permanent"
}

function AddJobType() {

  const jobTypes = [
    {
      key: JobType.FULL_TIME,
      name: "Full-time"
    },
    {
      key: JobType.PART_TIME,
      name: "Part-time"
    },
    {
      key: JobType.TEMPORARY,
      name: "Temporary"
    },
    {
      key: JobType.CONTRACT,
      name: "Contract"
    },
    {
      key: JobType.INTERSHIP,
      name: "Internship"
    },
    {
      key: JobType.COMMISSION,
      name: "Commission"
    },
    {
      key: JobType.PERMANENT,
      name: "Permanent"
    },
  ];


  const [jobTypeSelected, setJobTypeSelected] = useState<Set<string>>(new Set());
  const [expectedHourShowby, setExpectedHourShowby] = useState<string>("fixed_hours");


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

  
  return (
    <>
      <JobBanner stepName="Add job details" image="image_004.png" />
      <form className="space-y-4 mt-[40px] p-[20px]">

        <label className="font-bold ">
          What type of job is it? <span className="text-red-600"> * </span>
        </label>
        <div className="flex gap-2 flex-wrap my-[10px]">
            {
          jobTypes.map((type) => (
            <div key={type.key} 
              onClick={() => toggleClick(type.key)} 
              className={`px-[8px] py-[4px] ${jobTypeSelected.has(type.key) ? "bg-[#E4E2E0]" : "bg-white" } border cursor-pointer rounded-2xl flex items-center gap-1`}>
              {
                 jobTypeSelected.has(type.key) ? <MdDone /> : <FiPlus />
              }
              <span>{type.name}</span>
            </div>
          ))
        }</div>
        {
          jobTypeSelected.size == 0 && <p className="text-red-700 flex items-center"><RiErrorWarningFill /> <span>Make a selection.</span></p>
        }

        {
          jobTypeSelected.has(JobType.PART_TIME) && (
            <div className="my-[20px]">
              <p className="font-bold">Expected hours</p>
              <div className="flex gap-4 items-end">
                  <div className="w-[200px]">
                    <DropdownList label="Show by"
                      value={expectedHourShowby}
                      onChange={(e) => {console.log(e.target.value);setExpectedHourShowby(e.target.value);}}
                      items={[
                        {key: "fixed_hours", value: "Fixed hours"},
                        {key: "range", value: "Range"},
                        {key: "maximum", value: "Maximum"},
                        {key: "minium", value: "Minium"}
                      ]}  
                    />
                  </div>
                  {
                    (() => {
                      switch (expectedHourShowby) {
                        case 'range':
                          return (
                            <div className="flex gap-4">
                              <div><TextInput label="From" /></div>
                              <div><TextInput label="To" /></div>
                            </div>
                          );
                        case 'maximum':
                          return (
                            <div>
                              <TextInput label="No more than" />
                            </div>
                          );
                        case 'minium':
                          return (
                            <div>
                              <TextInput label="No less than" />
                            </div>
                          );
                        default:
                          return (
                            <div>
                              <TextInput label="Fixed at" />
                            </div>
                          );
                      }
                    })()
                  }
                  <div className="mb-[10px] min-w-[200px]">Hours per week</div>
                </div>
              </div>
          ) 
        }

        {
          (jobTypeSelected.has(JobType.TEMPORARY) || jobTypeSelected.has(JobType.CONTRACT) ||jobTypeSelected.has(JobType.INTERSHIP))  && (
            <div className="my-[20px]">
              <p className="font-bold">How long is the contract?</p>
              <div className="flex gap-4 items-end">
                  <div>
                    <TextInput label="Length" />
                  </div>
                  <div className="w-[200px]">
                    <DropdownList label="Period"
                      value={expectedHourShowby}
                      onChange={(e) => {console.log(e.target.value);setExpectedHourShowby(e.target.value);}}
                      items={[
                        {key: "day", value: "day(s)"},
                        {key: "week", value: "week(s)"},
                        {key: "month", value: "month(s)"}
                      ]}  
                    />
                  </div>
                </div>
              </div>
          )

        }
    
        <div className="pt-4 mt-[20px] flex justify-end">
          <Button label=" Continue →" onClick={() => { }}></Button>
        </div>
      </form>
    </>
  )
}


type AddJobBasicInformationProps = {
  onContinue: () => void;
}
function AddJobBasicInformation({onContinue}: AddJobBasicInformationProps) {
  const [form, setForm] = useState({
    companyName: "",
    fullName: "",
    howHeard: "",
    phone: "",
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
    onContinue(); 
  };
  return (
    <>
      <JobBanner stepName="Add job basics" image="image_003.png" />
      <form onSubmit={handleSubmit} className="space-y-4 mt-[16px]">
        <div className="flex gap-2 p-[32px] ">
          Job post will be in <span className="font-bold">English</span> in <span className="font-bold">VietNam</span> <span><MdEdit className="text-main-color text-xl" /></span>
        </div>
        <hr className="border-gray-300 mx-[20px]" />
        <div className="p-[32px]">
          <TextInput
            label="Job title"
            name="jobTitle"
            isRequired={true}
            value={form.companyName}
            onChange={handleChange}
          />
        </div>
        <hr className="border-gray-300 mx-[20px]" />

        <div className="p-[32px]">
          <TextInput
            label="Where would you like to advertise this job?"
            description="Enter your location"
            isRequired={true}
            name="location"
            value={form.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="pt-4 mt-[20px] flex justify-end">
          <Button label=" Continue →" buttonType="submit"></Button>
        </div>
      </form>

    </>
  )

}

function JobCreating() {
  const [step, setStep] = useState(1);
  return (
    <>
      <EmployeeHeader />
      <div className="max-w-[768px] mx-auto p-6 bg-white rounded-lg ">
        {
          (() => {
            console.log("hi", step);
            switch(step) {
              case 1: return <AddJobBasicInformation onContinue={() => setStep((prev) => ++prev)}/>;
              case 2: return <AddJobType />
              default: return <>Say hi</>
            }
          })()
        }
        <AddJobType />
        <p className="text-center mt-[30px]">
          Have feedback{" "}
          <a
            href="#"
            className="text-main-color cursor-pointer font-bold hover:text-blue-500"
          >
            Tell us more.
          </a>
        </p>
      </div>
    </>
  );
}

export default JobCreating;
