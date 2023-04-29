import React, { useState } from "react";
import Hero from "./Hero";

function ReviewsPage() {
  const [review, setReview] = useState("");

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(review);
    setReview("");
  };

  return (
    <div>
      <Hero text="Reviews given Recently" />
      <h1>Reviews</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="review">Write a review:</label>
        <textarea
          id="review"
          name="review"
          value={review}
          onChange={handleReviewChange}
        ></textarea>
        <button type="submit">Submit review</button>
      </form>
    </div>
  );
}

export default ReviewsPage;
