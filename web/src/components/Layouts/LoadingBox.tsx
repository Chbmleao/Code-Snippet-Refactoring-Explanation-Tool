import React, { useState, useEffect } from 'react';
import image1 from '../../assets/cat1.png';
import image2 from '../../assets/cat2.png';

interface LoadingBoxProps {
  message: string;
}

/**
 * TitleBox component displays a message and alternates between two cat images every second.
 *
 * @component
 * @param {LoadingBoxProps} props - The properties for the TitleBox component.
 * @param {string} props.message - The message to be displayed in the TitleBox.
 *
 * @example
 * <TitleBox message="Loading..." />
 *
 * @returns {JSX.Element} The rendered TitleBox component.
 */
const TitleBox: React.FC<LoadingBoxProps> = ({ message }) => {
  const [catImage, setCatImage] = useState<string>(image1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCatImage(prevImage => (prevImage === image1 ? image2 : image1));
    }, 1000); // 1-second delay

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1 className="text-xl font-bold text-gray-950 py-10">{message}</h1>
      <img src={catImage} alt="cat animation" className="w-100 h-100" />
    </div>
  );
};

export default TitleBox;
