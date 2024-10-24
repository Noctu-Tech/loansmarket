import React from 'react';

const CallToAction = () => {
  return (<div className=""><div className='h-full w-full rounded-2xl z-[999] bg-blue-900 flex flex-col justify-center items-center text-center p-10'>
    <h2 className='text-3xl font-bold text-white mb-4'>
      Find the Right Loan for You
    </h2>
    <p className='text-lg text-white mb-6'>
      Compare loan offers from our trusted partners and get the financing you need with ease and transparency.
    </p>
    <div className='flex space-x-4'>
      <button className='bg-[#ec5f00fa] text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition'>
        Get Started
      </button>
      <button className='bg-transparent border border-white text-white px-6 py-3 rounded-lg shadow hover:bg-white hover:text-slate-500 transition'>
        Learn More
      </button>
    </div>
  </div></div>
    
  );
};

export default CallToAction;
