
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Logo: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex items-center">
      <span className="font-mono font-bold tracking-wider text-black">
        {isMobile ? 'W-D-S' : 'WHEN DESIGN SAYS...'}
      </span>
    </div>
  );
};

export default Logo;
