import { FaQuestionCircle, FaUser } from "react-icons/fa";
import { BiSolidBell } from "react-icons/bi";
import { Button } from "../../components/common/Button";

type StepCardProps = {
  step: string;
  title: string;
  description: string;
};

type FeatureCardProps = {
  img: string;
  title: string;
  description: string;
};

function EmployerHeader() {
  return (
    <header className="bg-gray-900 text-white h-[64px]">
      <div className="mx-auto px-6 flex justify-between items-center h-full">
        <div className="flex items-center gap-6 h-full">
          <div className="text-xl font-bold ">
            <span className="text-blue-500">
              <img src="../../../public/logo.png" alt="" className="h-[40px]" />
            </span>
          </div>
          <p className=" border-b-4 border-transparent hover:border-main-color h-full text-sm flex items-center">
            <a href="/" className="text-white ">
              Post a job
            </a>
          </p>
          <p className="border-b-4 border-transparent hover:border-main-color h-full text-sm flex items-center">
            <a href="/" className="text-white ">
              Find CVs
            </a>
          </p>
        </div>

        <div className="flex items-center gap-7 h-full">
          <a
            href="/"
            className="bg-blue-600 hover:bg-main-color text-white px-4 py-2 rounded font-bold text-lg"
          >
            Go to Dashboard
          </a>
          <div className="w-px h-6 bg-gray-400"></div>
          <div className="border-b-4 border-transparent hover:border-main-color h-full flex items-center">
            <a
              href="/"
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
  );
}

function FeatureCard({ img, title, description }: Readonly<FeatureCardProps>) {
  return (
    <div className="flex items-start gap-4 p-[20px] border border-red rounded-2xl max-w-[400px]">
      <div className="">
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function getStarted() {
  console.log("Click getStarted");
}

function FeatureSection() {
  const features = [
    {
      img: "https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/visibility-aurora-01633a.svg",
      title: "Get more visibility",
      description:
        "Sponsor your job to ensure it gets seen by the right people.",
    },
    {
      img: "https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/quality-aurora-6ce509.svg",
      title: "Find quality applicants",
      description:
        "List your required skills for the job so relevant candidates apply.",
    },
    {
      img: "https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/find-aurora-785c22.svg",
      title: "Verify their abilities",
      description: "Add screener questions to test applicants’s skills.",
    },
    {
      img: "https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/organize-aurora-dd7191.svg",
      title: "Organize your candidates",
      description:
        "View and sort resumes, send messages, and schedule interviews—all on Indeed.",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 justify-items-center">
        {features.map((f) => (
          <FeatureCard {...f} />
        ))}
      </div>
      <div className="flex ml-[40px]  gap-[40px] mt-[80px]">
        <Button label="Get started" onClick={getStarted}></Button>
        <p>
          You control your posts 24/7—edit, add, pause, or close them whenever
          you want. <br />
          <a href="/" className="font-bold text-main-color">
            Learn more about posting.
          </a>
        </p>
      </div>
    </>
  );
}

function PostingJobGuide() {
  const stepToPostJobs = [
    {
      step: "1",
      title: "Create your free account",
      description:
        "All you need is your email address to create an account and start building your job post.",
    },
    {
      step: "2",
      title: "Build your job post",
      description:
        "Then just add a title, description, and location to your job post, and you're ready to go.",
    },
    {
      step: "3",
      title: "Post your job",
      description:
        "After you post your job use our state of the art tools to help you find dream talent.",
    },
  ];

  return (
    <>
      <div className="pt-[150px] grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-6xl font-light leading-snug">
            Let's make your next <br />
            great hire. <em className="italic">Fast.</em>
          </h1>
          <a
            href="/post-job"
            className="mt-6 bg-main-color hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded"
          >
            Post a job
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src="../../../public/image_001.png"
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 mt-[80px]">
        {stepToPostJobs.map((card) => (
          <StepCard {...card} />
        ))}
      </div>
    </>
  );
}

function StepCard({ step, title, description }: Readonly<StepCardProps>) {
  return (
    <div className="rounded-xl border border-gray-300 p-6 shadow-sm">
      <p className="text-blue-600 font-bold text-lg mb-2">{step}</p>
      <h3 className="text-xl font-semibold mb-2 whitespace-pre-line">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

const HiringIntroSection = () => (
  <div>
    <h1 className="font-bold text-4xl mb-[20px]">
      Save time and effort in your hiring journey.
    </h1>
    <p>
      Finding the best fit for the job shouldn’t be a full-time job.
      JobConnect's simple and powerful tools let you source, screen, and hire
      faster.
    </p>
  </div>
);

const EmployerPage = () => {
  return (
    <>
      <div>
        <EmployerHeader />
      </div>

      <div className="max-w-[1142px] mx-auto ">
        <div>
          <PostingJobGuide />
        </div>
        <div className="pt-[120px] max-w-[700px]">
          <HiringIntroSection />
        </div>
        <div className="mt-[80px]">
          <FeatureSection />
        </div>
      </div>
    </>
  );
};

export default EmployerPage;
