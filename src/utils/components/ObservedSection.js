import React, { useEffect, useRef } from 'react';

const ObservedSection = ({ sectionId, children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Apply styling or update state when element is in the viewport
          entry.target.classList.remove('section-hidden');
        } else {
          // Remove styling or update state when element is out of the viewport
          entry.target.classList.add('section-hidden');
        }
      });
    };

    const options = {
      root: null, // Use the viewport as the root element
      threshold: 0.5 // Trigger callback when at least 50% of the element is visible
    };

    const observer = new IntersectionObserver(observerCallback, options);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id={sectionId}
      className="section section-hidden"
    >
      {/* Content of the observed section */}
      {children}
    </div>
  );
};

export default ObservedSection;
