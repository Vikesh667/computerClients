import React, { useState } from 'react';

const RatingStar = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      <div>
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            onClick={() => handleClick(index + 1)}
            style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default RatingStar;
