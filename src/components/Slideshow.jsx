
import React, { useState, useEffect } from 'react';
import image1 from '../assets/eh1.png';
import image2 from '../assets/eh2.png';
import image3 from '../assets/eh3.png';
import image4 from '../assets/eh4.png';

const Slideshow = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        className="w-[38rem] h-[38rem] object-contain"
      />
    </div>
  );
};

export default Slideshow;
