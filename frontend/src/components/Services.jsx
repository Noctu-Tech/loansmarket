import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{service}</h3>
      <p className="text-gray-600 mb-4">Explore our {service.toLowerCase()} options tailored to your needs.</p>
      <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  </div>
);

const Services = () => {
  const services = [
    "Home Loan",
    "Car Loan",
    "Used Car Loan",
    "Loan Against Property",
    "Personal Loan",
    "Business Loan",
    "Credit Card",
    "Mortgage Loan",
    "Gold Loan"
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Explore Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;