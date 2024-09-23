import React from 'react';

const WhyUs = () => {
  return (
    <div className='h-full w-full bg-[#09095c] rounded-2xl p-10'>
      
      <div className='w-full flex justify-center items-center text-5xl text-white font-bold mb-8'>
        Why Choose Us?
      </div>

      <div className='w-full h-auto lg:flex flex-1 gap-6'>
        {/* Cash Rewards */}
        <div className='w-full h-full flex justify-center items-center p-4'>
          <div className='w-full h-full rounded-xl bg-white shadow-lg flex flex-col text-center text-3xl p-6 transition-transform transform hover:scale-105'>
            <span className='text-5xl mb-4'>💸</span>
            <h3 className='font-semibold mb-2'>Cash Rewards</h3>
            <p className='text-sm text-gray-600'>
              Earn cash rewards on every loan you take through us. It's our way of giving back for trusting us with your financial needs.
            </p>
          </div>
        </div>

        {/* 0 Fees */}
        <div className='w-full h-full flex justify-center items-center p-4'>
          <div className='w-full h-full rounded-xl bg-white shadow-lg flex flex-col text-center text-3xl p-6 transition-transform transform hover:scale-105'>
            <span className='text-5xl mb-4'>🤑</span>
            <h3 className='font-semibold mb-2'>Zero Fees</h3>
            <p className='text-sm text-gray-600'>
              No hidden fees or extra costs. We believe in transparency and ensuring you only pay what you’re comfortable with.
            </p>
          </div>
        </div>

        {/* Instant Approval */}
        <div className='w-full h-full flex justify-center items-center p-4'>
          <div className='w-full h-full rounded-xl bg-white shadow-lg flex flex-col text-center text-3xl p-6 transition-transform transform hover:scale-105'>
            <span className='text-5xl mb-4'>📝</span>
            <h3 className='font-semibold mb-2'>Instant Approval</h3>
            <p className='text-sm text-gray-600'>
              Apply in minutes and get instant approval. We make the process fast and hassle-free so you can focus on what matters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
