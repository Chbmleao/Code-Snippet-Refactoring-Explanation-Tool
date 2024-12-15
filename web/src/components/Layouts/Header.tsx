import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 bg-gray-950 text-white flex items-center justify-between px-36 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-20 cursor-pointer" onClick={scrollToTop}>
        <svg fill="none" viewBox="0 0 69 15" width="100%">
          <path
            fill="currentColor"
            d="M3 3H0v3h3zm0 3H0v3h3zm3-6H3v3h3zM3 0H0v3h3zm6 9H6v3h3zM6 9H3v3h3zM3 9H0v3h3zm9-6H9v3h3zM9 0H6v3h3zm3 6H9v3h3zm18-3h-3v3h3zm3-3h-3v3h3zm-3 0h-3v3h3zm6 0h-3v3h3zm-3 9h-3v3h3zm3 0h-3v3h3zm3-3h-3v3h3zm6-3h-3v3h3zm6-3h-3v3h3zm-3 0h-3v3h3zm-3 0h-3v3h3zm9 3h-3v3h3zm0 6h-3v3h3zm0-3h-3v3h3zM39 3h-3v3h3zm6 6h-3v3h3zm0-3h-3v3h3zm0 6h-3v3h3zm9 0h-3v3h3zm-15 0h-3v3h3zm0-3h-3v3h3zm-9 0h-3v3h3zm0 3h-3v3h3zm0-6h-3v3h3zM3 12H0v3h3zm15-3h-3v3h3zm42 0h-3v3h3zm3-3h-3v3h3zm3-3h-3v3h3zm3-3h-3v3h3zm-3 9h-3v3h3zm3 3h-3v3h3zm-9 0h-3v3h3zM18 6h-3v3h3zm42 0h-3v3h3zM18 3h-3v3h3zm42 0h-3v3h3zM18 0h-3v3h3zm42 0h-3v3h3zM21 12h-3v3h3zm3 0h-3v3h3z"
          ></path>
        </svg>
      </div>
    </nav>
  );
};

export default Header;
