
import TextInput from "../../../components/common/TextInput";
import DropdownList from "../../../components/common/DropdownList";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Button } from "../../../components/common/Button";
import EmployeeHeader from "../Header/EmployerHeader";
import { useState } from "react";

function EmployerAccountForm() {
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

  const handleSubmit = () => {};

  const heardOptions = [
    { key: "", value: "Select an option" },
    { key: "online_video", value: "Online video" },
    { key: "mail", value: "Mail" },
    { key: "billboard", value: "Billboard" },
    { key: "radio", value: "Radio (AM/FM/XM)" },
    { key: "newspaper", value: "Newspaper" },
    { key: "social_media", value: "Social media" },
    { key: "word_of_mouth", value: "Word of mouth" },
    { key: "tv", value: "TV" },
    { key: "search_engine", value: "Search engine (ex. Google, Bing, Yahoo)" },
    { key: "podcast", value: "Podcast" },
    { key: "streaming_audio", value: "Streaming audio (ex. Spotify, Pandora)" },
    { key: "other", value: "Other" },
  ];

  return (
    <>
      <EmployeeHeader />
      <div className="max-w-[768px] mx-auto p-6 bg-white rounded-lg ">
        <div className="flex justify-around mt-[60px] items-center">
          <h2 className="text-2xl font-semibold mb-2">
            Create an employer account
          </h2>
          <img src="../../../public/image_002.png" alt="" />
        </div>
        <a
          href="#"
          className="text-blue-600 text-sm mb-6 inline-block font-bold hover:underline"
        >
          I'm looking for a job →
        </a>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <div className="my-[30px]">
            <DropdownList
              label="How did you hear about us?"
              name="howHeard"
              value={form.howHeard}
              onChange={handleChange}
              items={heardOptions}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
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
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full h-[40px] rounded-r-lg border border-gray-400 p-2 outline-none focus:border-main-color focus:border-b-4"
                placeholder="Phone number"
              />
            </div>
          </div>

          <div className="pt-4 mt-[20px] flex justify-end">
            <Button label=" Continue →" onClick={() => {}}></Button>
          </div>
        </form>
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

export default EmployerAccountForm;
