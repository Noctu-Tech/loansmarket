import React from 'react';
import { Building2, User, Calendar, CreditCard, Award } from 'lucide-react';

const HighlightCard = ({ icon, title, value }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
    <div className="bg-blue-100 p-2 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-lg font-semibold text-blue-600">{value}</p>
    </div>
  </div>
);

const CompanyHighlights = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-orange-500 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Loans Market at a Glance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <HighlightCard
          icon={<Building2 className="text-blue-500" />}
          title="Company Name"
          value="LoansMarket"
        />
        <HighlightCard
          icon={<User className="text-blue-500" />}
          title="Founder"
          value="Amandeep Singh Ahluwalia"
        />
        <HighlightCard
          icon={<Calendar className="text-blue-500" />}
          title="Years in Business"
          value="20+"
        />
        <HighlightCard
          icon={<CreditCard className="text-blue-500" />}
          title="Loans Disbursed"
          value="₹7,000+ Crores"
        />
        <HighlightCard
          icon={<Award className="text-blue-500" />}
          title="Specialty"
          value="Personalized Loan Facilitation"
        />
      </div>
    </div>
  );
};

export default CompanyHighlights;