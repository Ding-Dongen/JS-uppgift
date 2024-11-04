import React, { useState, useEffect } from 'react';
// import Quotes from '../assets/quotes.svg';
import Star from '../assets/images/icons/star-solid.svg';
// import StarTransparent from '../assets/images/icons/star-transparent.svg';
  

const Testamonials = () => {
  // State to hold the fetched reviews
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReviews(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []); // Empty dependency array means this effect runs once on mount

  // Handle loading or error states
  if (isLoading) return <div>Loading reviews...</div>;
  if (error) return <div>Error fetching reviews: {error}</div>;
  if (reviews.length === 0) return <div>No reviews found.</div>;

  return (
    <section className="section-6-only-desktop" aria-label="Support and reviews overview">
      <div className="part-6">
        <h1>Clients are Loving Our App</h1>
        {/* Assuming Quotes are commented out or included somewhere else */}
        {reviews.map((review, index) => (
          <div key={review.id} className={`box box-${index + 1}`}>
            {[...Array(review.starRating)].map((_, i) => (
              <img key={`${review.id}-star-${i}`} src="../assets/images/icons/star-solid.svg" alt={`${i + 1} of five Stars solid`} />
            ))}
            {[...Array(5 - review.starRating)].map((_, i) => (
              <img key={`${review.id}-empty-star-${i}`} src="../assets/images/icons/star.svg" alt={`${5 - i} of five Stars, not solid`} />
            ))}
            <p className="par-main">{review.comment}</p>
            <div className="name-title">
              <img src={review.avatarUrl} alt={`${review.author}'s avatar`} />
              <div className="par-box1">
                <p className="par-name">{review.author}</p>
                <p className="par-designer">{review.jobRole}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testamonials;