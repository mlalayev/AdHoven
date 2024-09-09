import React, { useState, useEffect } from 'react';
import RightPart from '../PageRightPart/RightPart';

interface RightPartProps {
  isNewsTrue: boolean;
}

function AboutMe({ isNewsTrue }: RightPartProps) {
  const [isTextPart, setIsTextPart] = useState(false);
  const currentPath = window.location.pathname;

  useEffect(() => {
    setIsTextPart(true);
  }, []);

  return (
    <div>
      {/* Pass isNewsTrue, isTextPart, and currentPath to RightPart */}
      <RightPart isNewsTrue={isNewsTrue} isTextPart={!isTextPart} currentPath={currentPath} />
    </div>
  );
}

export default AboutMe;
