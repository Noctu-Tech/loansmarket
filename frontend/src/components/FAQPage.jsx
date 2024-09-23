import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-blue-700 py-4  rounded-xl ">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQPage = () => {
  const faqs = [
    {
      question: "What is a Loan Marketplace?",
      answer: "A loan marketplace connects borrowers with multiple lenders, helping users find the best loan options tailored to their needs."
    },
    {
      question: "How does the loan process work?",
      answer: "You can compare different loan offers, select the best option, and apply directly through our platform. Lenders will review your application and provide a decision."
    },
    {
      question: "What types of loans are available?",
      answer: "We offer a variety of loan options, including personal loans, business loans, auto loans, home loans, and more."
    },
    {
      question: "How do I qualify for a loan?",
      answer: "Loan qualification depends on several factors, including your credit score, income, and the lender's specific criteria."
    },
    {
      question: "How long does it take to get approved?",
      answer: "Approval times vary by lender, but some loans can be approved within minutes, while others may take a few business days."
    },
    {
      question: "Does applying for a loan affect my credit score?",
      answer: "Submitting a loan application might result in a hard inquiry, which can temporarily lower your credit score. However, comparing offers through our platform usually only triggers a soft inquiry."
    },
    {
      question: "What is the interest rate on loans?",
      answer: "Interest rates vary depending on the loan type, your credit score, and the lender’s terms. You can view specific rates when comparing loan offers."
    },
    {
      question: "Can I apply for a loan if I have bad credit?",
      answer: "Yes, some lenders specialize in loans for individuals with poor credit. However, terms may differ, and interest rates could be higher."
    },
    {
      question: "Are there fees for using this platform?",
      answer: "Our platform is free for borrowers to use. Lenders may charge origination or other fees depending on the loan type."
    },
    {
      question: "How secure is my personal information?",
      answer: "We use encryption and follow strict data privacy guidelines to ensure your personal information is secure during the loan application process."
    },
  ];
  

  return (
    <div className="max-w-2xl mx-auto p-4 text-blue-950">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      
    </div>
  );
};

export default FAQPage;