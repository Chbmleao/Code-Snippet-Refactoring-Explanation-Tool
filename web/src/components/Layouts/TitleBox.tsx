import '../../styles/UI/Button.css';
import React from 'react';

interface TitleBoxProps {
  title: string;
  description: string;
}

const TitleBox: React.FC<TitleBoxProps> = ({ title, description }) => {
  return (
    <div className="w-full flex justify-between">
      <h1 className="text-4xl font-bold text-left text-gray-900 py-10 w-1/3">
        {title}
      </h1>
      <h2 className="text-m font-bold text-left text-gray-900 py-10 w-1/4">
        {description}
      </h2>
    </div>
  );
};

export default TitleBox;
