import { FaQuestionCircle } from "react-icons/fa";
import { BiSolidBell } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

const EmployerPage = () => {
  return (
    <>
      <header className="bg-gray-900 text-white h-[64px]">
        <div className="mx-auto px-6 flex justify-between items-center h-full">
          <div className="flex items-center gap-6 h-full">
            <div className="text-xl font-bold ">
              <span className="text-blue-500">
                <img
                  src="../../../public/logo.png"
                  alt=""
                  className="h-[40px]"
                />
              </span>
            </div>
            <p className=" border-b-4 border-transparent hover:border-main-color h-full text-sm flex items-center">
              <a href="#" className="text-white ">
                Post a job
              </a>
            </p>
            <p className="border-b-4 border-transparent hover:border-main-color h-full text-sm flex items-center">
              <a href="#" className="text-white ">
                Find CVs
              </a>
            </p>
          </div>

          <div className="flex items-center gap-7 h-full">
            <a
              href="#"
              className="bg-blue-600 hover:bg-main-color text-white text-sm px-4 py-2 rounded font-bold text-lg"
            >
              Go to Dashboard
            </a>
            <div className="w-px h-6 bg-gray-400"></div>
            <div className="border-b-4 border-transparent hover:border-main-color h-full flex items-center">
              <a
                href="#"
                className="text-sm inline-flex justify-center items-center gap-1 "
              >
                <span>Help Center</span>{" "}
                <span>
                  <FaQuestionCircle />
                </span>
              </a>
            </div>

            <div className="w-px h-6 bg-gray-400"></div>
            <span className="text-sm">Binh Minh Company</span>
            <div className="w-px h-6 bg-gray-400"></div>
            <div className="flex h-full">
              <div className="group mr-[10px]  h-full flex items-center text-zinc-900 relative border-b-4 border-transparent hover:border-(--color-main-color)">
                <a
                  className="p-[8px] rounded-lg text-white  hover:text-black hover:bg-white"
                  href="/"
                >
                  <BiSolidBell className="text-[24px] " />
                </a>
                <div className="absolute hidden bottom-[-46px] left-[-30px] bg-gray-950 text-gray-50 px-[6px] py-[4px] tooltip rounded-sm group-hover:block">
                  Notifications
                </div>
              </div>
              <div className="group mr-[10px]  h-full flex items-center text-zinc-900 relative border-b-2 border-transparent hover:border-(--color-main-color)">
                <a
                  className="p-[8px] rounded-lg text-white  hover:text-black hover:bg-white"
                  href="/"
                >
                  <FaUser className="text-[24px] " />
                </a>
                <div className="absolute hidden bottom-[-46px] left-[-18px] bg-gray-950 text-gray-50 px-[6px] py-[4px] tooltip rounded-sm group-hover:block">
                  Account
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold leading-snug">
            Let's make your next <br />
            great hire. <em className="italic">Fast.</em>
          </h1>
          <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded">
            Post a job
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="https://i.imgur.com/N65pZbH.png"
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </main>
    </>
  );
};

export default EmployerPage;
