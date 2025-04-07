
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

interface ConfettiEffectProps {
  trigger: boolean;
}

const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ trigger }) => {
  const [isActive, setIsActive] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (trigger) {
      setIsActive(true);
      
      // Set a timeout to hide the confetti after 5 seconds
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return isActive ? (
    <Confetti
      width={width}
      height={height}
      recycle={true}
      numberOfPieces={200}
      gravity={0.15}
    />
  ) : null;
};

export default ConfettiEffect;
