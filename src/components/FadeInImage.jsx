// src/FadeInImage.js
import React from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInImage = ({ src, alt }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the image is in view
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={`transition-opacity duration-1000 delay-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

export default FadeInImage;
