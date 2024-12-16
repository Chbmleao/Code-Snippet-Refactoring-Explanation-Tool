import '../../styles/UI/Button.css';
import React from 'react';

interface ButtonProps {
  text: string;
  darkMode?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  darkMode = true,
  onClick = () => {},
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`mt-4 px-6 py-3 font-bold transition ease-in-out duration-500 uppercase tracking-widest text-sm 
        ${
          darkMode
            ? 'bg-gray-950 text-white hover:bg-white hover:text-gray-950 dotted-dark-btn'
            : 'bg-white text-gray-950 hover:bg-gray-950 hover:text-white dotted-light-btn'
        }`}
    >
      {text}
    </button>
  );
};

export default Button;
