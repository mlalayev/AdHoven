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
      <RightPart
        currentPath={location.pathname}
        isNewsTrue={isNewsTrue}
        isTextPart={isTextPart}
      />
    </div>
  );
}

export default AboutMe;
