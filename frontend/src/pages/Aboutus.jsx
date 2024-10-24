import React from "react";
import Footer from "../components/Footer";
import AppBar from "../components/AppBar";
import CompanyHighlights from "../components/CompanyHighlights";

const Aboutus = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-100">
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <AppBar />
      </nav>
      <CompanyHighlights/>
      <main className="flex-grow p-4 md:p-8">
        <h1 className="text-4xl font-bold text-center text-blue-50 mb-12">
          About Us
        </h1>

        <section className="mb-12 bg-blue-600 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-4xl font-extrabold text-blue-50 mb-4">Our Story</h2>
            <div className="flex flex-col md:flex-row items-center">
              {/* <div className="md:w-full mb-4 mx-4 md:mb-0">
                <div className="bg-white w-full h-64 rounded-lg shadow-inner">
                  <img src="/api/placeholder/300/300" alt="Founder" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div> */}
              <div className=" p-6 rounded-lg shadow-lg">
      
      <div className="space-y-6">
        <p className="text-lg text-blue-50 border-l-4 border-blue-50 pl-4">
          In the bustling heart of Delhi, where dreams are as vibrant as the city itself, LoansMarket was born from a simple yet powerful idea: 
          <span className="font-bold text-blue-50"> that every person deserves the opportunity to turn their aspirations into reality.</span>
        </p>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-blue-700">
            Our founder, <span className="font-bold">Amandeep Singh Ahluwalia</span>, grew up witnessing the struggles of hardworking individuals who were denied the financial support they needed to flourish. As a young man, Amandeep was deeply moved by the stories he heard of rejected loan applications and shattered dreams. These experiences ignited a passion within him to make a difference in the lives of those seeking financial support.
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-1/4 h-1 bg-orange-50 rounded"></div>
          <p className="text-lg font-semibold text-blue-50 w-3/4">With determination in his heart and a vision in his mind, Amandeep embarked on a journey to bridge the gap between deserving individuals and the financial institutions that could fuel their ambitions.</p>
        </div>
        
        <p className="text-lg text-blue-50">
          He started small, helping friends and family navigate the complex world of loans, and soon word spread of the <span className="italic font-semibold text-blue-50">"Loan Whisperer"</span> who could open doors that seemed forever closed.
        </p>
        
        <div className=" p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-50 mb-2">Our Impact</h3>
          <p className="text-blue-50">
            Over two decades, Amandeep's passion has blossomed into LoansMarket – a beacon of hope for millions. We've walked alongside:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-blue-50">
            <li>Countless entrepreneurs as they opened their first shops</li>
            <li>Families as they received keys to their dream homes</li>
            <li>Students as they embarked on educational journeys that once seemed impossible</li>
          </ul>
        </div>
        
        <p className="text-lg text-blue-50 italic">
          Our story is written in the smile of every successful loan applicant, in the sigh of relief from every worried parent, and in the gleam of pride in every small business owner's eyes.
        </p>
        
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">Over ₹7,000 crores in loans disbursed</p>
          <p className="text-lg mt-2">Each rupee represents a dream realized, a burden lifted, and a future brightened.</p>
        </div>
      </div>
    </div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-orange-600 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-4xl font-extrabold text-orange-50 mb-4">
              Our Mission
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3 mb-4 md:mb-0">
                {/* <div className="bg-white w-full h-64 rounded-lg shadow-inner">
                  <img
                    src="/api/placeholder/300/300"
                    alt="Our Mission"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div> */}
              </div>
              <div className="md:w-2/3 md:pr-6">
              <div className=" p-6 rounded-lg shadow-lg">

      
      <p className="text-xl text-orange-50 mb-6">
        At LoansMarket, our mission pulses through every conversation, every handshake, and every approval letter: 
        <span className="font-bold text-orange-50"> to ensure that no worthy dream withers for lack of financial nourishment.</span>
      </p>
      
      <p className="text-lg text-orange-50 mb-6">
        We are committed to being the bridge that connects aspirations to opportunities, 
        treating each loan not as a transaction, but as a transformative journey.
      </p>
      
      <h3 className="text-2xl font-semibold text-orange-50 mb-4">We pledge to:</h3>
      
      <ul className="list-none space-y-4">
        <li className="flex items-start">
          <svg className="w-6 h-6 text-orange-50 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="text-lg text-orange-50">
            <strong className="text-orange-50">Listen with empathy</strong> to every story, understanding that behind each application is a unique human experience.
          </span>
        </li>
        <li className="flex items-start">
          <svg className="w-6 h-6 text-orange-50 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="text-lg text-orange-50">
            <strong className="text-orange-50">Navigate the labyrinth</strong> of financial institutions with unwavering dedication, leaving no stone unturned in our quest to secure the right loan for each individual.
          </span>
        </li>
        <li className="flex items-start">
          <svg className="w-6 h-6 text-orange-50 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="text-lg text-orange-50">
            <strong className="text-orange-50">Educate and empower</strong> our clients, turning complex financial jargon into clear, actionable knowledge.
          </span>
        </li>
        <li className="flex items-start">
          <svg className="w-6 h-6 text-orange-50 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="text-lg text-orange-50">
            <strong className="text-orange-50">Celebrate every success</strong>, no matter how small, recognizing that each approved loan is a step towards a brighter future for our community.
          </span>
        </li>
      </ul>
    </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-blue-700 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-4xl font-extrabold text-blue-50 mb-4">
              Our Vision
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              {/* <div className="md:w-1/3 mb-4 md:mb-0"> */}
                {/* <div className="bg-white w-full h-64 rounded-lg shadow-inner">
                  <img
                    src="/api/placeholder/300/300"
                    alt="Our Vision"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div> */}
              {/* </div> */}
              <div className="md:w-2/3 md:pl-6">
              <p className="text-lg md:text-xl text-white leading-relaxed">
              We envision an India where financial barriers crumble in the face of determination and potential. A nation where:
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>The spark of entrepreneurship is never extinguished by lack of capital.</li>
                <li>Education is limited only by curiosity, not by financial constraints.</li>
                <li>Families can build homes that echo with laughter, not stress over EMIs.</li>
                <li>Small businesses become the backbone of thriving local economies.</li>
              </ul>
              <span className="block mt-6">
                LoansMarket doesn't just aim to be a company; we strive to be a movement. A force that transforms the very landscape of financial accessibility in India. We see a future where our model of personalized, compassionate loan facilitation becomes the gold standard, inspiring a revolution in how financial services are delivered.
              </span>
              <span className="block mt-6">
                In this vision, the phrase "loan denied" becomes a relic of the past. Instead, we look forward to a chorus of "dreams approved" echoing across the nation, from the narrow lanes of Old Delhi to the tech hubs of Bangalore, from the coastal villages of Kerala to the mountain towns of Uttarakhand.
              </span>
              <span className="block mt-6 font-semibold">
                Join us in this journey. At LoansMarket, we don't just process loans; we nurture hopes, fuel ambitions, and craft legacies – one approval at a time.
              </span>
            </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Aboutus;
