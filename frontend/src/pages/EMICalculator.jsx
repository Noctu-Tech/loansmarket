import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState(12); // Default tenure to 12 months
  const [emi, setEmi] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');
  const history = useNavigate(); 

  const calculateEMI = async () => {
    if (loanAmount && interestRate && tenure) {
      try {
        // Clear previous errors
        setError('');

        const response = await axios.post('http://localhost:5000/api/emi/calculate_emi', {
          loan_amount: parseFloat(loanAmount),
          interest_rate: parseFloat(interestRate),
          tenure: parseInt(tenure),
        });

        if (response.data.error) {
          setError(response.data.error);
        } else {
          setEmi(response.data.emi_amount);
          setIsModalOpen(true);
        }
      } catch (error) {
        console.error("Error calculating EMI:", error);
        setError('Failed to calculate EMI. Please try again.');
      }
    } else {
      setError('Please fill out all fields');
    }
  };

  const resetForm = () => {
    setLoanAmount('');
    setInterestRate('');
    setTenure(12); // Reset tenure slider to 12 months
    setIsModalOpen(false);
    setError('');
  };

  const goToApplyForm = () => {
    // Navigate to the ApplyForm with pre-filled data
    history({
      pathname: '/apply',
      state: {
        loan_amount: loanAmount,
      },
    });
  };
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 flex justify-center items-center">
      {/* EMI Calculator Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">EMI Calculator</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form className="space-y-4">
          <div>
            <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">Loan Amount</label>
            <input
              type="number"
              id="loanAmount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter loan amount"
            />
          </div>
          <div>
            <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
            <input
              type="number"
              id="interestRate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter interest rate"
            />
          </div>
          <div>
            <label htmlFor="tenure" className="block text-sm font-medium text-gray-700">Tenure (in months)</label>
            <input
              type="range"
              id="tenure"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              min="6"
              max="120"
              step="1"
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-sm text-gray-600 mt-1">Tenure: {tenure} months</div>
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={calculateEMI}
              className="bg-blue-900 text-white px-4 py-2 rounded shadow hover:bg-blue-800"
            >
              Calculate EMI
            </button>
          </div>
        </form>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">EMI Calculation Result</h3>
            <p className="text-lg">Your monthly EMI is ₹{emi}</p>
            <div className="flex justify-between mt-6">
              <button
                onClick={resetForm}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Recalculate
              </button>
              <button
                onClick={goToApplyForm} 
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EMICalculator;
