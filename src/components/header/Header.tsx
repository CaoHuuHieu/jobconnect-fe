import { BiSolidMessageDetail, BiSolidBell } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import AccountDropdown from "./AccountDropdown";

import "./Header.css";

const Header = () => {
  const isLogin: boolean = false;

  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const refAccountDropdown = useRef<HTMLDivElement>(null);
  const refAccountIcon = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        refAccountDropdown.current &&
        !refAccountDropdown.current.contains(event.target as Node) &&
        refAccountIcon.current &&
        !refAccountIcon.current.contains(event.target as Node)
      ) {
        setShowAccountDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center h-[73px] ">
      <div className="flex items-center h-full">
        <img src="/logo.png" alt="Logo" className="w-40 ml-[20px]" />
        <p className="pt-[16px] mx-[30px] flex items-center text-zinc-900 h-full border-b-2 border-transparent hover:border-(--color-main-color)">
          <a href="#">Home</a>
        </p>
        <p className="pt-[16px] flex items-center text-zinc-900 h-full border-b-2 border-transparent hover:border-(--color-main-color)">
          <a href="#">Company reviews</a>
        </p>
      </div>
      <div className="h-full">
        <div className="flex items-center h-full">
          <div className="pr-[20px] h-full">
            {isLogin ? (
              <div className=" h-full flex items-center pt-[16px] text-main-color font-bold border-b-2 border-transparent hover:border-(--color-main-color)">
                <a className="" href="#">
                  Sign in
                </a>
              </div>
            ) : (
              <div className="flex h-full">
                <div className="group mx-[10px]  h-full flex items-center text-zinc-900 relative border-b-2 border-transparent hover:border-(--color-main-color)">
                  <a
                    className="pt-[24px] pb-[4px] px-[8px] rounded-lg hover:bg-cyan-100"
                    href="#"
                  >
                    <BiSolidMessageDetail className="text-[24px]" />
                  </a>
                  <div className="absolute hidden bottom-[-46px] left-[-24px] bg-gray-950 text-gray-50 px-[6px] py-[4px] tooltip rounded-sm group-hover:block">
                    Messages
                  </div>
                </div>
                <div className="group mx-[10px]  h-full flex items-center text-zinc-900 relative border-b-2 border-transparent hover:border-(--color-main-color)">
                  <a
                    className="pt-[24px] pb-[4px] px-[8px] rounded-lg hover:bg-cyan-100"
                    href="#"
                  >
                    <BiSolidBell className="text-[24px]" />
                  </a>
                  <div className="absolute hidden bottom-[-46px] left-[-36px] bg-gray-950 text-gray-50 px-[6px] py-[4px] tooltip rounded-sm group-hover:block">
                    Notifications
                  </div>
                </div>
                <div
                  ref={refAccountIcon}
                  onClick={() => setShowAccountDropdown((prev) => !prev)}
                  className="group mx-[10px]  h-full flex items-center text-zinc-900 relative border-b-2 border-transparent hover:border-(--color-main-color)"
                >
                  <a
                    className="pt-[24px] pb-[4px] px-[8px] rounded-lg hover:bg-cyan-100"
                    href="#"
                  >
                    <FaUser className="text-[24px]" />
                  </a>
                  <div className="absolute hidden bottom-[-46px] left-[-20px] bg-gray-950 text-gray-50 px-[6px] py-[4px] tooltip rounded-sm group-hover:block">
                    Account
                  </div>
                  {showAccountDropdown && (
                    <AccountDropdown
                      ref={refAccountDropdown}
                      email="caohuuhieu12b8@gmail.com"
                      onSignOut={() => console.log("Signed out")}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="pt-[16px] h-full flex items-center mx-[20px] border-b-2 border-transparent hover:border-(--color-main-color) separate relative">
            <a className="" href="/recruitment">
              Employers / Post Job
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
