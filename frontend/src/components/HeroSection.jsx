import React from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import family1 from '../assets/happyfamily.jpg';
import business1 from '../assets/indianbusiness.png';
import home1 from '../assets/carloan.jpg';
import data from '../info/info.json'

const HeroSection = () => {
  const bookcall = () => {
    const phoneNumber = data.whatsappnumber; // Replace with your number
    const message = encodeURIComponent('Hello, I would like to book a call.'); // Customize your message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect to the WhatsApp link
    window.open(whatsappLink, '_blank');
};

  return (
    <div className="w-full flex flex-col lg:flex-row h-full rounded-3xl px-4">
      <div className="w-full lg:w-1/2 font-bold flex flex-col justify-center gap-4 p-4 text-left h-screen text-blue-900">
        <span className="text-lg">Unlock Your Financial Freedom</span>
        <span className="text-3xl lg:text-5xl">Welcome to India’s Premier Loan Marketplace</span>
        <p className="text-sm lg:text-base">
          At Loan Market, we simplify your journey to financial solutions. Whether you’re looking to purchase a new home, fund your dream car, or grow your business, we’ve got you covered. Explore tailored loan options designed just for you. Our seamless process and expert guidance ensure you find the best rates and terms, empowering you to make informed decisions with confidence.
        </p>
        <div className="w-fit h-fit m-3 rounded-lg text-zinc-200 bg-[#ec5f00fa] text-xl flex justify-evenly place-items-center mt-11" onClick={bookcall}>
          <button className="flex gap-4 h-full w-full p-2 justify-between items-center">
            Book a Call
            <div className="w-fit h-fit text-lg">
              <span className="relative flex h-10 w-10 items-center">
                  <ArrowOutwardIcon />
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 h-full w-full p-4 ">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-80 w-full">
            <img src={family1} alt="Happy Family" className="h-full w-full object-cover rounded-full" />
          </div>
          <div className="h-72 w-full">
            <img src={home1} alt="Car Loan" className="h-full w-full object-cover rounded-t-full rounded-b-xl" />
          </div>
          <div className="h-72 lg:w-full m-auto">
            <img src={business1} alt="Indian Business" className="h-full w-full object-center rounded-tr-[4.1rem] rounded-bl-[4.1rem] rounded-tl-xl rounded-br-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
