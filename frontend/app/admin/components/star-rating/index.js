"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./style.module.css";

export default function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className={styles.star_rating}>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              className={styles.star}
              size={16}
              color={currentRating <= (hover || rating) ? "#FCD233" : "#fcd0334d"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
