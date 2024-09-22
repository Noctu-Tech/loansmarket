import React from "react";
import bgfoot from "../assets/bgfoot.png"; // Uncomment this if you want to use a background image
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Footer = () => {
  return (
    <div className="h-full w-full text-white">
      <div className="h-full bg-cover bg-indigo-950">
        <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-8 bg-opacity-80">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-200 mb-4">Loan Market</h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
              At Loan Market, our vision is to revolutionize the way people access financial solutions by creating a seamless, transparent, and trusted platform. We believe in empowering individuals and businesses with the financial tools they need to thrive, whether it's through personal loans, home financing, or business capital.
            </p>
            <div className="flex space-x-4">
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'X', 'WhatsApp'].map((platform) => (
                  <div key={platform} className="rounded-full bg-blue-100 flex justify-center items-center p-2">
                    {/* Replace the SVG with appropriate icons */}
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>{platform}</title>
                      {/* You can replace these paths with actual SVG paths for each platform */}
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold mb-4">Explore</h1>
            <ul className="space-y-2">
              {[
                "Home Loan",
                "Car Loan",
                "Used Car Loan",
                "Loan Against Property (L.A.P)",
                "Personal Loan",
                "Business Loan",
                "Credit Card",
                "Mortgage Loan",
                "Gold Loan"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-gray-100 transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <div className="space-y-4">
              <div className="flex items-center">
                <EmailOutlinedIcon className="mr-2" />
                <div>
                  <span className="font-medium">Write to us:</span>
                  <p className="text-gray-300">nimritsingh377@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <PhoneInTalkOutlinedIcon className="mr-2" />
                <div>
                  <span className="font-medium">Give us a call:</span>
                  <p className="text-gray-300">+91 991589863</p>
                </div>
              </div>
              <div className="flex items-center">
                <LocationOnOutlinedIcon className="mr-2" />
                <div>
                  <span className="font-medium">Meet us at:</span>
                  <p className="text-gray-300">Kalka ji</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-sky-800 w-full h-16 flex items-center justify-center font-semibold">
        Copyright © 2024 All rights reserved, Logo | Designed with ❤ by&nbsp;
        <a href="https://www.noctu.tech/" className="text-gray-200 hover:underline">Noctu Tech</a>
      </div>
    </div>
  );
};

export default Footer;
