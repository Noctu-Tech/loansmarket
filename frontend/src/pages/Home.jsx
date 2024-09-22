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
    <div className="h-full w-full flex flex-col gap-3 bg-blue-100">
      <nav className=" text-white p-4 sticky -top-16 z-50 backdrop-blur-3xl rounded-3xl">
       <AppBar/>
      </nav>
      <div className="w-full h-full">
        <HeroSection />
      </div>
      <div className="w-full h-full">
        <WhyUs />
      </div>
      <div className="w-screen h-full">
        <UserJourney />
      </div>
      <div className="w-full h-80">
        <Partners />
      </div>
      <div className="w-full h-full">
        <Services />
      </div>
      <div className="w-full h-full">
        <Testimonial />
      </div>
      <div className="h-4/5 w-s">
        <FAQPage />
      </div>
      <div className="w-full h-2/3">
        <CallToAction />
      </div>
      <div className="w-full h-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
