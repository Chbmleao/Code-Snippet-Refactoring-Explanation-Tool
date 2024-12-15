import '../../styles/UI/Button.css';
import React from 'react';

interface TitleBoxProps {
  title: string;
  description: string;
  darkMode?: boolean;
}

const TitleBox: React.FC<TitleBoxProps> = ({
  title,
  description,
  darkMode = false,
}) => {
  const classStyle = `font-bold text-left py-10 ${darkMode ? 'text-white' : 'text-gray-900'}`;

  return (
    <div className="w-full flex justify-between">
      <h1 className={`${classStyle} text-4xl w-1/3`}>{title}</h1>
      <h2 className={`${classStyle} text-m w-1/4`}>{description}</h2>
    </div>
  );
};

export default TitleBox;
