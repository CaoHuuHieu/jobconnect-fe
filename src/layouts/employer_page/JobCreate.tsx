import { BiSolidMessageDetail, BiSolidBell } from "react-icons/bi";
import { useState, useEffect, useRef, forwardRef } from "react";
import { IoIosHelpCircle } from "react-icons/io";
import TextInput from "../../components/common/TextInput";
import DropdownList from "../../components/common/DropdownList";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Button } from "../../components/common/Button";

function Header() {
  const [showEmployerDropdown, setShowEmployerDropdown] = useState(false);
  const refEmployerDropdown = useRef<HTMLDivElement>(null);
  const refEmployerButton = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        refEmployerDropdown.current &&
        !refEmployerDropdown.current.contains(event.target as Node) &&
        refEmployerButton.current &&
        !refEmployerButton.current.contains(event.target as Node)
      ) {
        setShowEmployerDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center h-[56px] border-b-1 border-neutral-400">
        <div className="flex items-center h-full">
          <img src="/logo.png" alt="Logo" className="w-40 ml-[20px]" />
        </div>
        <div className="h-full">
          <div className="flex items-center h-full">
            <div className="pr-[20px] h-full">
              <div className="flex h-full items-center ">
                <div className="group mx-[10px]  h-full flex items-center text-zinc-900 relative border-b-2 border-transparent hover:border-(--color-main-color)">
                  <a
                    className="py-[6px] px-[10px] rounded-lg hover:bg-gray-100 flex justify-center gap-1"
                    href="#"
                  >
                    <IoIosHelpCircle className="text-[24px]" />{" "}
                    <span>Helps</span>
                  </a>
                </div>

                <div className="group  h-full flex items-center text-zinc-900 relative border-b-2 border-transparent hover:border-(--color-main-color)">
                  <a
                    className="py-[6px] px-[10px] rounded-lg hover:bg-gray-100   flex justify-center gap-1"
                    href="#"
                  >
                    <BiSolidBell className="text-[24px]" />
                    Notifications
                  </a>
                </div>

                <div className="group mx-[10px]  h-full flex items-center text-zinc-900 relative border-b-2 border-transparent hover:border-(--color-main-color)">
                  <a
                    className="py-[6px] px-[10px] rounded-lg hover:bg-gray-100   flex justify-center gap-1"
                    href="#"
                  >
                    <BiSolidMessageDetail className="text-[24px]" /> Messages
                  </a>
                </div>
              </div>
            </div>
            <div className=" h-full flex items-center mx-[20px] separate relative">
              <div
                ref={refEmployerButton}
                onClick={() => setShowEmployerDropdown((prev) => !prev)}
                className="group mx-[10px]  h-full flex items-center text-zinc-900 relative "
              >
                <a
                  className="py-[6px] px-[10px] rounded-lg hover:bg-gray-100"
                  href="#"
                >
                  caohuuhieu12b8@gmail.com
                </a>

                {showEmployerDropdown && (
                  <EmployerDropdown
                    ref={refEmployerDropdown}
                    email="caohuuhieu12b8@gmail.com"
                    onSignOut={() => console.log("Signed out")}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import { FaMoneyBills } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { RiPagesFill } from "react-icons/ri";
import { GrShare } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

type EmployeeDropdownItemType = {
  link: string;
  leftIcon: React.ReactNode;
  label: string;
  rightIcon: React.ReactNode;
};
type EmployeeDropdownProp = {
  companyName: string;
};
const EmployerDropdown = forwardRef<HTMLDivElement, EmployeeDropdownProp>(
  ({ companyName }, ref) => {
    const employeeItems: EmployeeDropdownItemType[] = [
      {
        link: "",
        leftIcon: <FaMoneyBills />,
        label: "Billing and invoices",
        rightIcon: null,
      },
      {
        link: "",
        leftIcon: <IoIosSettings />,
        label: "Employee settings",
        rightIcon: null,
      },
      {
        link: "",
        leftIcon: <RiPagesFill />,
        label: "Company page",
        rightIcon: <GrShare />,
      },
      {
        link: "",
        leftIcon: <FaUser />,
        label: "Users",
        rightIcon: null,
      },
      {
        link: "",
        leftIcon: <MdContactPhone />,
        label: "Contact us",
        rightIcon: null,
      },
    ];

    return (
      <>
        <div
          ref={ref}
          className="absolute top-[70px] right-[-30px] border border-zinc-300 bg-white w-[320px] rounded-sm account_dropdown"
        >
          <p className="text-stone-800 font-bold p-[10px]">{companyName}</p>
          <div>
            {employeeItems.map((item) => (
              <a
                href={item.link}
                className="inline-flex w-full items-center gap-4 px-[20px] py-[10px] text-blue-600 text-stone-700 font-medium hover:bg-sky-50"
              >
                <span>
                  {" "}
                  {item.leftIcon}
                  <span>{item.label}</span>
                </span>
                {item.rightIcon ?? <span>{item.rightIcon}</span>}
              </a>
            ))}
          </div>
          <div className="text-xs text-center border-y-1 p-[8px]">
            © 2025 Indeed -{" "}
            <a href="#" className="hover:underline">
              Terms
            </a>{" "}
            -{" "}
            <a href="#" className="hover:underline">
              Accessibility at Indeed
            </a>
          </div>
        </div>
      </>
    );
  }
);

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
      <Header />
      <div className="max-w-[768px] mx-auto p-6 bg-white rounded-lg shadow-md">
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
