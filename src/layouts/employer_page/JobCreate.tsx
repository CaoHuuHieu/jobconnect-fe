import { BiSolidMessageDetail, BiSolidBell } from "react-icons/bi";
import  { useState, useEffect, useRef } from "react";
import { IoIosHelpCircle } from "react-icons/io";
import AccountDropdown from "../../components/header/AccountDropdown";


function Header() {
    
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
                        <IoIosHelpCircle className="text-[24px]" /> <span>Helps</span>
                      </a>
                
                    </div>

                     <div className="group  h-full flex items-center text-zinc-900 relative border-b-2 border-transparent hover:border-(--color-main-color)">
                      <a
                        className="py-[6px] px-[10px] rounded-lg hover:bg-gray-100   flex justify-center gap-1"
                        href="#"
                      >
                        <BiSolidBell className="text-[24px]" />Notifications
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
                  ref={refAccountIcon}
                  onClick={() => setShowAccountDropdown((prev) => !prev)}
                  className="group mx-[10px]  h-full flex items-center text-zinc-900 relative "
                >
                  <a
                    className="py-[6px] px-[10px] rounded-lg hover:bg-gray-100"
                    href="#"
                  >
                    caohuuhieu12b8@gmail.com
                  </a>
            
                  {showAccountDropdown && (
                            <AccountDropdown
                            ref={refAccountDropdown}
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


function EmployerAccountForm() {
  const [form, setForm] = useState({
    companyName: "",
    fullName: "",
    howHeard: "",
    phone: "",
  });

  const handleChange = () => {
  };

  const handleSubmit = () => {
 
  };

  return (
    <>
        <Header />
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Create an employer account</h2>
      <a href="#" className="text-blue-600 text-sm mb-6 inline-block hover:underline">
        I'm looking for a job →
      </a>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Company name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Full name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First and last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* How did you hear */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            How did you hear about us?
          </label>
          <select
            name="howHeard"
            value={form.howHeard}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select an option</option>
            <option value="google">Google</option>
            <option value="social">Social Media</option>
            <option value="friend">Friend</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Phone number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone number</label>
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex items-center space-x-1 border border-gray-300 rounded-md p-2 bg-gray-100">
              <span className="text-lg">🇻🇳</span>
              <span className="text-sm">+84</span>
            </div>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-md p-2"
              placeholder="Phone number"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            For account management communication. Not visible to job seekers.
          </p>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700"
          >
            Continue →
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default EmployerAccountForm;