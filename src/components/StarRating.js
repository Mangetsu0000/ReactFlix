import { useState } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = { display: "flex" };

const StarRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 36,
  ratingNotes = [],
  defaultRating = 0,
  onSetMovieRating,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  const handleRating = (rating) => {
    setRating(rating);
    onSetMovieRating(rating);
  };
  const handleTempRating = (rating) => {
    setTempRating(rating);
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => handleTempRating(i + 1)}
            onHoverOut={() => handleTempRating(0)}
            full={rating >= i + 1 || tempRating >= i + 1}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {ratingNotes === maxRating
          ? ratingNotes[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};
StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  ratingNotes: PropTypes.array,
  onSetMovieRating: PropTypes.func,
};
export default StarRating;
