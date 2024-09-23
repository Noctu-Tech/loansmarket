import React from 'react';
import { ArrowRight, FileText, CheckCircle, IndianRupee, PhoneCall, Briefcase, Home, Shield, BadgeCheck, AlertCircle } from 'lucide-react';
import Footer from '../components/Footer'
import AppBar from '../components/AppBar';
const ServiceCard = ({ title, icon, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-indigo-500">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-3">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-indigo-100 p-6 rounded-lg">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-gray-700">{description}</p>
  </div>
);

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className=" text-white sticky -top-16 z-50 backdrop-blur-3xl rounded-3xl">
       <AppBar/>
      </nav>

      <header className="bg-gradient-to-r from-indigo-800 to-blue-700 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">Unlock Your Financial Potential</h1>
        <p className="text-xl max-w-2xl mx-auto">Discover tailored loan solutions that fit your unique needs. Our expert brokers are here to guide you every step of the way.</p>
      </header>

      <main className="container mx-auto py-16 px-4">
        <section id="loan-list" className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Comprehensive Loan Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Personal Loans"
              icon={<IndianRupee className="text-indigo-600" size={32} />}
              description="Whether it's for debt consolidation, home improvements, or unexpected expenses, our personal loans offer competitive rates and flexible terms to suit your lifestyle."
            />
            <ServiceCard
              title="Business Loans"
              icon={<Briefcase className="text-indigo-600" size={32} />}
              description="Fuel your business growth with our range of commercial financing options. From startup capital to expansion funds, we've got your business covered."
            />
            <ServiceCard
              title="Mortgage Loans"
              icon={<Home className="text-indigo-600" size={32} />}
              description="Turn your dream home into reality with our tailored mortgage solutions. We offer fixed and variable rates, as well as specialized programs for first-time buyers."
            />
            <ServiceCard
              title="Auto Loans"
              icon={<IndianRupee className="text-indigo-600" size={32} />}
              description="Drive away in your dream car with our competitive auto loan rates. New or used, we have financing options to get you on the road."
            />
            <ServiceCard
              title="Student Loans"
              icon={<BadgeCheck className="text-indigo-600" size={32} />}
              description="Invest in your future with our flexible student loan options. We offer both federal and private student loans to support your educational journey."
            />
            <ServiceCard
              title="Debt Consolidation"
              icon={<Shield className="text-indigo-600" size={32} />}
              description="Simplify your finances and potentially lower your monthly payments by consolidating your debts into one manageable loan."
            />
          </div>
        </section>

        <section id="features" className="mb-24 bg-white py-16 px-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose LoanPro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<CheckCircle size={40} />}
              title="Expert Guidance"
              description="Our team of experienced loan specialists will help you navigate the complexities of lending to find the best solution for your needs."
            />
            <FeatureCard
              icon={<Shield size={40} />}
              title="Competitive Rates"
              description="We leverage our extensive network of lenders to secure the most favorable rates and terms for our clients."
            />
            <FeatureCard
              icon={<ArrowRight size={40} />}
              title="Fast Approvals"
              description="Our streamlined process ensures quick decisions, often with same-day approvals for eligible applicants."
            />
          </div>
        </section>

        <section id="eligibility" className="mb-24">
          <div className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white p-12 rounded-lg shadow-xl">
            <h2 className="text-4xl font-bold mb-8">Eligibility Criteria</h2>
            <p className="mb-6 text-lg">While specific requirements may vary depending on the loan type and amount, here are some general eligibility criteria:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Personal Loans</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Age: 21-65 years old</li>
                  <li>Minimum income: ₹30,000 per annum</li>
                  <li>Credit score: 650 or higher</li>
                  <li>Employment: Minimum 2 years of work experience</li>
                  <li>Residency: Must be a permanent resident or citizen</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Business Loans</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Business age: At least 2 years in operation</li>
                  <li>Annual revenue: Minimum ₹100,000</li>
                  <li>Credit score: 680 or higher for primary business owner</li>
                  <li>Documentation: Business plan and financial statements required</li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-lg">
              Don't meet these criteria? Don't worry! We have options for various situations. Contact us to discuss your specific case.
            </p>
          </div>
        </section>

        <section id="document" className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Required Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Identification"
              icon={<FileText className="text-indigo-600" size={32} />}
              description="Valid government-issued ID (e.g., driver's license, passport). We may also require a secondary form of ID for verification purposes."
            />
            <ServiceCard
              title="Proof of Income"
              icon={<IndianRupee className="text-indigo-600" size={32} />}
              description="Recent pay stubs (last 3 months), tax returns (last 2 years), or bank statements (last 6 months) showing consistent income."
            />
            <ServiceCard
              title="Employment Verification"
              icon={<Briefcase className="text-indigo-600" size={32} />}
              description="Letter from employer on company letterhead or recent employment contract. For self-employed individuals, we may require additional business documentation."
            />
            <ServiceCard
              title="Proof of Address"
              icon={<Home className="text-indigo-600" size={32} />}
              description="Recent utility bill, lease agreement, or any official document showing your current residential address (dated within the last 3 months)."
            />
            <ServiceCard
              title="Credit Report"
              icon={<AlertCircle className="text-indigo-600" size={32} />}
              description="We will obtain this with your permission, but you're welcome to provide a recent copy if you have one available."
            />
            <ServiceCard
              title="Additional Documents"
              icon={<FileText className="text-indigo-600" size={32} />}
              description="Depending on the loan type, we may require additional documents such as business financial statements, property appraisals, or college enrollment verification."
            />
          </div>
        </section>

        <section id="example" className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Loan Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-indigo-500">
              <h3 className="text-2xl font-semibold mb-4">Personal Loan: ₹25,000</h3>
              <ul className="space-y-3">
                <li><strong>Interest Rate:</strong> 7.5% APR</li>
                <li><strong>Loan Term:</strong> 5 years</li>
                <li><strong>Monthly Payment:</strong> ₹500.57</li>
                <li><strong>Total Interest Paid:</strong> ₹5,034.20</li>
                <li><strong>Total Amount Repaid:</strong> ₹30,034.20</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold mb-4">Business Loan: ₹100,000</h3>
              <ul className="space-y-3">
                <li><strong>Interest Rate:</strong> 6.5% APR</li>
                <li><strong>Loan Term:</strong> 7 years</li>
                <li><strong>Monthly Payment:</strong> ₹1,498.12</li>
                <li><strong>Total Interest Paid:</strong> ₹25,841.82</li>
                <li><strong>Total Amount Repaid:</strong> ₹125,841.82</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-gray-600">
            Note: These are just examples. Actual rates and terms may vary based on individual circumstances and credit assessment. Contact us for a personalized quote.
          </p>
        </section>

        <section id="cta" className="text-center bg-gradient-to-r from-indigo-600 to-blue-500 p-16 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold mb-8 text-white">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white mb-8">Our loan experts are standing by to help you find the perfect financial solution.</p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-xl font-semibold hover:bg-indigo-100 transition-colors duration-300 flex items-center mx-auto">
            Apply Now
            <ArrowRight className="ml-2" size={24} />
          </button>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default ServicesPage;