
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

const Logo: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <Link to="/" className="inline-block">
      <div className="flex items-center">
        {isMobile ? (
          // Small logo for mobile
          <img 
            src="/lovable-uploads/618598fa-3509-4bd8-8308-b734433e1f2d.png" 
            alt="When Design Says..." 
            className="h-8"
          />
        ) : (
          // Large logo for desktop
          <img 
            src="/lovable-uploads/24bee958-7674-432a-85db-452e61f76fac.png" 
            alt="When Design Says..." 
            className="h-8"
          />
        )}
      </div>
    </Link>
  );
};

export default Logo;
