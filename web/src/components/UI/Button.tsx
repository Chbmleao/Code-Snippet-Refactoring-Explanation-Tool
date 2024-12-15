import '../../styles/UI/Button.css';
import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      id="dotted-btn"
      type="submit"
      className="mt-4 px-6 py-3 bg-gray-950 text-white font-bold transition ease-in-out duration-500 uppercase tracking-widest hover:bg-white hover:text-gray-950 text-sm"
    >
      {text}
    </button>
  );
};

export default Button;
