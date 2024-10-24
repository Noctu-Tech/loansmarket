import React from 'react';
import Reviews from './ReviewsPage';
import CountUp from 'react-countup';
import { Users, ThumbsUp } from 'lucide-react';

const StatCard = ({ icon: Icon, count, text }) => (
  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
    <Icon className="w-16 h-16 mb-4 text-white opacity-90" />
    <div className="text-5xl font-extrabold mb-2">
      <CountUp 
        start={1} 
        end={count} 
        enableScrollSpy={true}
        scrollSpyDelay={10}
        scrollSpyOnce={true}
      />
      +
    </div>
    <p className="text-lg font-medium">{text}</p>
  </div>
);

const Testimonial = () => {
  return (
    <div className="px-8">
      <div className="max-w-7xl mx-auto flex flex-col">
        <h1 className="text-5xl font-bold text-center text-blue-800 mb-16">
          Our Success Stories
        </h1>
        <div className="flex flex-col lg:flex-row">
          {/* Stat Card 1 */}
         <div className="gap-5 flex flex-col"> <StatCard 
            icon={ThumbsUp} 
            count={20} 
            text="Years of Successful Loan Approvals"
          />
 <StatCard 
            icon={Users} 
            count={1000} 
            text="Loan Applications Approved"
          /></div>
          {/* Reviews Section */}
          <div className=" rounded-2xl shadow-xl overflow-hidden flex flex-col justify-center">
            <div className="p-6">
              <h2 className="text-3xl font-semibold text-gray-700 mb-2 text-center">
                What Our Clients Say
              </h2>
              <div className="h-full w-full overflow-y-auto scrollbar-hide flex flex-col">
                <Reviews />
              </div>
            </div>
          </div>

          {/* Stat Card 2 */}
         
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
