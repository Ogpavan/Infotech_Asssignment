import React from "react";

function Reviews() {
  const reviews = [
    {
      name: "John Smith",
      date: "2025-04-09",
      stars: 4,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci.",
    },
    {
      name: "Bill Harrison",
      date: "2025-04-09",
      stars: 5,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      name: "Robert Richardson",
      date: "2025-04-09",
      stars: 5,
      image: "https://randomuser.me/api/portraits/men/14.jpg",
      text: "Vestibulum ultricies aliquam. Donec rutrum congue leo eget malesuada.",
    },
  ];

  return (
    <div>
      {/* Reviews Section */}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold">Reviews:</h3>
          <button className="text-orange-600 font-semibold hover:underline">
            + Leave Feedback
          </button>
        </div>

        {reviews.map((review, idx) => (
          <div key={idx} className="flex gap-4 mb-6 border-b pb-4 items-start">
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-semibold">{review.name}</h4>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <div className="flex gap-1 text-orange-400 mb-1">
                {Array.from({ length: review.stars }, (_, i) => (
                  <span key={i}>★</span>
                ))}
                {Array.from({ length: 5 - review.stars }, (_, i) => (
                  <span key={i} className="text-gray-300">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-sm">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
