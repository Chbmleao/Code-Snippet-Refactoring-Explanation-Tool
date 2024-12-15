import React, { useState } from 'react';
import Button from '../UI/Button';

interface CodeInputFormProps {
  onSubmit: (code: string) => void;
}

// The main form component
const CodeInputForm: React.FC<CodeInputFormProps> = ({ onSubmit }) => {
  const [code, setCode] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (code.trim()) {
      onSubmit(code);
    }
  };

  return (
    <form
      className="w-full p-3 border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 h-96"
      onSubmit={handleSubmit}
    >
      <textarea
        className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 h-full"
        rows={6}
        placeholder="Enter your code snippet here..."
        value={code}
        onChange={e => setCode(e.target.value)}
      />

      <Button text="Submit" />
    </form>
  );
};

export default CodeInputForm;
