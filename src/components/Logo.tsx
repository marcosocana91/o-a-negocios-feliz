
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

const Logo: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <Link to="/" className="inline-block">
      <div className="flex items-center">
        <img 
          src="/logo.png" 
          alt="When Design Says..." 
          className="h-6 md:h-8"
          style={{ maxHeight: isMobile ? '24px' : '32px' }} 
        />
      </div>
    </Link>
  );
};

export default Logo;
