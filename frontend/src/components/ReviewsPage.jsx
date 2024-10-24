import React from 'react';
import { Star, User } from 'lucide-react';
import review from '../info/reviews.json';
const StarRating = ({ rating }) => {
  return (
    <div className="flex overflow-auto">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`h-6 w-6 transition-colors duration-300 ${
            index < rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
          fill={index < rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white p-6 h-fit rounded-3xl shadow-lg transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex items-center mb-6">
        <div className="bg-gray-300 rounded-full p-3 mr-4">
          <User className="h-10 w-10 text-gray-600" />
        </div>
        <div>
          <h3 className="font-semibold text-sm text-gray-800">{review.name}</h3>
          <p className="text-gray-500 text-xs">{review.date}</p>
        </div>
      </div>
      <StarRating rating={review.rating} />
      <p className="mt-6 text-gray-700 text-base leading-relaxed">
        {review.text}
      </p>
    </div>
  );
};

const ReviewsPage = () => {
  const reviews = review;

  return (
    <div className="max-w-7xl h-full mx-auto p-3 flex flex-col lg:flex-1 ">
      <div className="flex gap-4 overflow-auto h-full flex-col lg:flex-row items-center">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
