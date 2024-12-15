import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-md shadow hover:bg-blue-600 transition"
    >
      {text}
    </button>
  );
};

export default Button;
