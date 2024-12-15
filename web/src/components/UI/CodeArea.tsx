import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

interface CodeAreaProps {
  initalCode: string;
  readOnly: boolean;
  onChange: (code: string) => void;
}

const CodeArea: React.FC<CodeAreaProps> = ({
  initalCode = '',
  readOnly = false,
  onChange,
}) => {
  const [code, setCode] = useState<string>(initalCode);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = event.target.value;
    setCode(newCode);

    onChange(newCode);
  };

  return (
    <TextareaAutosize
      className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 h-full overflow-auto max-h-96"
      placeholder="Enter your code snippet here..."
      value={code}
      onChange={handleCodeChange}
      readOnly={readOnly}
    />
  );
};

export default CodeArea;
