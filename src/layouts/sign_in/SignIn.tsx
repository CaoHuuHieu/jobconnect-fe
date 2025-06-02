import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import "./SignIn.css";
import { useState } from "react";

interface GoogleUser {
  email: string;
  email_verified: boolean;
  name: string;
  picture: string;
  sub: string;
}

const SignIn = () => {
  const [currentPage, setCurrenPage] = useState("signIn");
  const [email, setEmail] = useState("");

  const handleLoginSuccess = (response: CredentialResponse) => {
    if (response.credential) {
      const user = jwtDecode<GoogleUser>(response.credential);
      console.log("User info:", user);
    }
  };

  return (
    <div className="pt-[60px]">
      <div className="flex items-center justify-center">
        <img
          src="../../../public/logo.png"
          alt="Indeed Logo"
          className="mb-[32px]"
        />
      </div>

      {currentPage === "signIn" ? (
        <div>
          <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto border">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                Ready to take the next step?
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Create an account or sign in.
              </p>

              <p className="text-xs text-gray-500 mb-6">
                By creating an account or signing in, you understand and agree
                to Indeed’s
                <a href="/" className="text-blue-600 underline px-[4px]">
                  Terms
                </a>
                . You also acknowledge our
                <a href="/" className="text-blue-600 underline px-[4px]">
                  Cookie
                </a>
                and
                <a href="/" className="text-blue-600 underline px-[4px]">
                  Privacy
                </a>
                policies. You will receive marketing messages from Indeed and
                may opt out at any time by following the unsubscribe link in our
                messages, or as detailed in our terms.
              </p>

              <div className="mb-[20px] cursor-pointer">
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={() => console.log("Login Failed")}
                />
              </div>

              {/* <div className="cursor-pointer">
                    <FacebookLogin
                    appId="YOUR_FACEBOOK_APP_ID"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    icon="fa-facebook"
                    textButton="Đăng nhập bằng Facebook"
                    />
                </div> */}

              <div className="flex items-center justify-between mb-4">
                <hr className="w-full border-gray-300" />
                <span className="px-2 text-gray-500 text-sm">or</span>
                <hr className="w-full border-gray-300" />
              </div>

              <span className="block text-sm font-medium text-gray-900 mb-1">
                Email address <span className="text-red-500">*</span>
              </span>
              <input
                onChange={(element) => setEmail(element.target.value)}
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <button
                onClick={() => setCurrenPage("signInViaEmail")}
                className="w-full bg-main-color text-white py-2 rounded-md hover:bg-blue-600 font-medium text-sm cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : currentPage === "signInViaEmail" ? (
        <div>
          <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto border">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                Create your account
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Keep your account safe.
              </p>

              <p className="text-xs text-gray-600 mb-6">
                Continue as <span>{email}</span>
                <a href="#" className="text-blue-600 underline px-[4px]">
                  (not you?)
                </a>
                .
              </p>

              <div className="mb-[20px] cursor-pointer">
                <GoogleLogin
                  useOneTap={false}
                  onSuccess={handleLoginSuccess}
                  onError={() => console.log("Login Failed")}
                  hint={email}
                />
              </div>
              <p className="text-xs/6 text-gray-600 ">
                JobConnect will only use your information as described in our{" "}
                <a href="/">privacy policy</a>. Google may ask for your
                permission to share with Indeed details like your name, profile
                picture, public profile information, and email address.
              </p>
              <div className="mt-[20px]">
                <a
                  href="/"
                  className="py-[8px] underline text-main-color cursor-pointer text-sm hover:text-blue-500"
                >
                  Sign up with login code instead
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Say hello</div>
      )}
    </div>
  );
};

export default SignIn;
