import React from "react";

// Sample review data
const reviews = [
  {
    id: 1,
    rating: 10,
    name: "Anika",
    date: "19 February, 2024",
    review:
      "Excellent service provided at a reasonable cost, when I came with a very last minute request to pick up a large dining table I was buying from someone. The company had clear and prompt communication from both the Wise Move platform, to Whatsapp, and this gave me a lot of peace of mind! I will consider them for all my storage/furniture transportation needs from now on. Thank you! 🙏🙏",
    price: "AED 250",
    item: "Dining Table, Bench",
    from: "دبي",
    to: "Dubai, Jumeirah Village",
  },
  {
    id: 2,
    rating: 9,
    name: "Sarah",
    date: "18 February, 2024",
    review:
      "Very professional movers. They handled my furniture with care and were punctual. Great experience overall! Would definitely recommend. 👍",
    price: "AED 350",
    item: "Sofa Set",
    from: "دبي",
    to: "Dubai Marina",
  },
  {
    id: 3,
    rating: 10,
    name: "Mohammed",
    date: "17 February, 2024",
    review:
      "Outstanding service! The team was very efficient and careful with my belongings. Fair pricing and excellent communication throughout. ⭐️",
    price: "AED 200",
    item: "Bedroom Set",
    from: "دبي",
    to: "Palm Jumeirah",
  },
  {
    id: 4,
    rating: 8,
    name: "Lisa",
    date: "16 February, 2024",
    review:
      "Quick response and good service. Moved my items safely and on time. Will use again! 📦✨",
    price: "AED 180",
    item: "Office Desk",
    from: "دبي",
    to: "Business Bay",
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm h-full">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded flex items-center justify-center font-bold">
          {review.rating}
        </div>
        <div>
          <h2 className="text-xl font-semibold">{review.name}</h2>
          <p className="text-gray-600 text-sm">Reviewed {review.date}</p>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed">{review.review}</p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold">{review.price}</span>
        <div className="flex items-center gap-3">
          <img
            src="/api/placeholder/80/60"
            alt="Item"
            className="rounded object-cover"
          />
          <div>
            <h3 className="font-semibold">{review.item}</h3>
            <div className="flex items-center text-gray-600">
              <span className="text-sm">{review.from}</span>
              <span className="mx-2">→</span>
              <span className="text-sm">{review.to}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WiseMoveReviews = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">
        Recently completed on Wise Move
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default WiseMoveReviews;
