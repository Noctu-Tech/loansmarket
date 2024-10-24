import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ApplyForm() {
  const location = useLocation();
  const initialFormData = {
    full_name: '',
    mobile_number: '',
    employment_type: '',
    email: '',
    pan: '',
    aadhar_number: '',
    dob: '',
    gender: '',
    state: '',
    city: '',
    pin_code: '',
    loan_amount: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    // Check if location.state exists and has values for pre-filling
    if (location.state) {
        console.log(location.state);
      setFormData((prev) => ({
        ...prev,
        ...location.state, // Fill the fields from the EMI Calculator state
      }));
    }
  }, [location.state]);  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/forms/submit_form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        // Show success message or redirect to another page if needed
        alert(`Form submitted successfully!`);
      } else {
        const error = await response.json();
        console.error('Error submitting form:', error);
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Apply for Loan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="mobile_number" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="text"
              id="mobile_number"
              name="mobile_number"
              value={formData.mobile_number}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your mobile number"
            />
          </div>
          <div>
            <label htmlFor="employment_type" className="block text-sm font-medium text-gray-700">Employment Type</label>
            <input
              type="text"
              id="employment_type"
              name="employment_type"
              value={formData.employment_type}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter employment type"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="pan" className="block text-sm font-medium text-gray-700">PAN</label>
            <input
              type="text"
              id="pan"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your PAN"
            />
          </div>
          <div>
            <label htmlFor="aadhar_number" className="block text-sm font-medium text-gray-700">Aadhar Number</label>
            <input
              type="text"
              id="aadhar_number"
              name="aadhar_number"
              value={formData.aadhar_number}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your Aadhar number"
            />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your state"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your city"
            />
          </div>
          <div>
            <label htmlFor="pin_code" className="block text-sm font-medium text-gray-700">Pin Code</label>
            <input
              type="text"
              id="pin_code"
              name="pin_code"
              value={formData.pin_code}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your pin code"
            />
          </div>
          <div>
            <label htmlFor="loan_amount" className="block text-sm font-medium text-gray-700">Loan Amount</label>
            <input
              type="number"
              id="loan_amount"
              name="loan_amount"
              value={formData.loan_amount}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter loan amount"
              disabled={Boolean(location.state)} // Disable if value is coming from state
            />
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded shadow hover:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ApplyForm;
