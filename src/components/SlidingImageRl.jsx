// src/components/SlidingImage.js
import React from 'react';
import { useInView } from 'react-intersection-observer';

const SlidingImageRl = ({ src }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the image is in view
  });

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <img 
        ref={ref}
        src={src} 
        alt="Sliding" 
        className={`w-full transition-transform duration-1000 ${inView ? 'slide-in-rl-animation' : ''}`}
      />
    </div>
  );
};

export default SlidingImageRl;
