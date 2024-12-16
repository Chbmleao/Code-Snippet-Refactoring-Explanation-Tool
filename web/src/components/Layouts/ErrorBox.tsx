import React from 'react';
import errorIcon from '../../assets/error-icon.png';
import Button from '../UI/Button';

interface ErrorBoxProps {
  title: string;
  onRetryClick: () => void;
}

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
