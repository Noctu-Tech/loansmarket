import React from "react";
import AppBar from "../components/AppBar";
import HeroSection from "../components/HeroSection";
import WhyUs from "../components/WhyUs";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import UserJourney from "../components/UserJourney";
import FAQPage from "../components/FAQPage";
function Home() {
  return (
    <div className="h-full w-full flex flex-col gap-10 bg-blue-200 p-0 m-0">
      <nav className=" text-white sticky -top-16 z-50 bg-white rounded-3xl p-0 m-0">
       <AppBar/>
      </nav>
      <div className="w-full h-full">
        <HeroSection />
      </div>
      <div className="w-full h-full">
        <WhyUs />
      </div>
      <div className="w-full h-full ">
        <UserJourney />
      </div>
      <div className="w-full h-72">
        <Partners />
      </div>
      <div className="w-full h-full">
        <Services />
      </div>
      <div className="w-full h-full">
        <Testimonial />
      </div>
      <div className="h-full w-full">
        <FAQPage />
      </div>
      <div className="w-full h-full">
        <CallToAction />
      </div>
      <div className="w-full h-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
