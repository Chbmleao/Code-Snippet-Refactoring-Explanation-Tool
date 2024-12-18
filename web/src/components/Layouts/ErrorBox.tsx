import React from 'react';
import errorIcon from '../../assets/icons/error-icon.png';
import { Button } from '../';

interface ErrorBoxProps {
  title: string;
  onRetryClick: () => void;
}

/**
 * ErrorBox component displays an error message with a retry button.
 *
 * @component
 * @param {ErrorBoxProps} props - The properties for the ErrorBox component.
 * @param {string} props.title - The title of the error message.
 * @param {() => void} props.onRetryClick - The callback function to be called when the retry button is clicked.
 * @returns {JSX.Element} The rendered ErrorBox component.
 */
const ErrorBox: React.FC<ErrorBoxProps> = ({ title, onRetryClick }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col ">
      <h1 className="text-4xl font-bold text-gray-950 py-10">{title}</h1>
      <img src={errorIcon} alt="Erro icon" className="w-100 h-100 py-10" />
      <Button text="Retry" darkMode={false} onClick={onRetryClick} />
    </div>
  );
};

export default ErrorBox;
