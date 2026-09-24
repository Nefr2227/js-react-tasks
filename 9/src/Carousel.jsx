import React, { useState } from 'react';
import cn from 'classnames';

const Carousel = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  const goTo = (offset) =>
    setActiveIndex((prev) => (prev + offset + images.length) % images.length);

  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={image}                       // стабильный ключ — сам URL
            className={cn('carousel-item', { active: index === activeIndex })}
          >
            <img alt="" className="d-block w-100" src={image} />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        data-bs-target="#carousel"
        type="button"
        data-bs-slide="prev"
        onClick={() => goTo(-1)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        data-bs-target="#carousel"
        type="button"
        data-bs-slide="next"
        onClick={() => goTo(1)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;