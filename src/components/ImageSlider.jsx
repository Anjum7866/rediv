import React, { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';

const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    const startSlider = () => {
      scrollInterval = setInterval(() => {
        slider.scrollLeft -= slider.offsetWidth;
      }, 2000); // Adjust the interval as needed
    };

    const stopSlider = () => {
      clearInterval(scrollInterval);
    };

    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);

    startSlider();

    return () => {
      stopSlider();
      slider.removeEventListener('mouseenter', stopSlider);
      slider.removeEventListener('mouseleave', startSlider);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        className="flex"
        ref={sliderRef}
        style={{ scrollBehavior: 'smooth', width: '100%' }}
      >
        {/* Add your images here */}
        <img src="/baxter.jpg" alt="Image 1" className="w-1/2" />
        <img src="/controlprint.jpg" alt="Image 2" className="w-1/2" />
        <img src="/hal.png" alt="Image 3" className="w-1/2" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default ImageSlider;
