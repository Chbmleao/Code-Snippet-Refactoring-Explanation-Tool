import '../../styles/Layouts/TitleBox.css';
import React from 'react';

interface TitleBoxProps {
  title: string;
  description: string;
  darkMode?: boolean;
}

/**
 * TitleBox component displays a title and a description with optional dark mode styling.
 *
 * @param {object} props - The properties object.
 * @param {string} props.title - The title text to display.
 * @param {string} props.description - The description text to display.
 * @param {boolean} [props.darkMode=false] - Optional flag to enable dark mode styling.
 *
 * @returns {JSX.Element} The rendered TitleBox component.
 */
const TitleBox: React.FC<TitleBoxProps> = ({
  title,
  description,
  darkMode = false,
}) => {
  const classStyle = `font-bold text-left py-10 ${darkMode ? 'text-white' : 'text-gray-900'}`;

  return (
    <div className="title-box w-full flex justify-between">
      <h1 className={`${classStyle} title text-4xl w-1/3`}>{title}</h1>
      <h2 className={`${classStyle} description text-base w-1/4`}>
        {description}
      </h2>
    </div>
  );
};

export default TitleBox;
