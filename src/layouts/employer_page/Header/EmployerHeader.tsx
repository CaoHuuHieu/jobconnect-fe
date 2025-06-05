
import { BiSolidMessageDetail, BiSolidBell } from "react-icons/bi";
import { useState, useEffect, useRef, forwardRef } from "react";
import { IoIosHelpCircle, IoIosSettings } from "react-icons/io";
import { FaMoneyBills } from "react-icons/fa6";
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

export default function EmployeeHeader() {
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
                    companyName="caohuuhieu12b8@gmail.com"
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
