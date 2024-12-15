import '../../styles/UI/CodeArea.css';
import React, { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

interface CodeAreaProps {
  initialCode: string;
  readOnly: boolean;
  onChange: (code: string) => void;
  darkMode?: boolean;
}

const CodeArea: React.FC<CodeAreaProps> = ({
  initialCode = '',
  readOnly = false,
  darkMode = false,
  onChange,
}) => {
  const [code, setCode] = useState<string>(initialCode);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = event.target.value;
    setCode(newCode);

    onChange(newCode);
  };

  return (
    <TextareaAutosize
      className={`w-full p-3 border rounded-md resize-none h-full overflow-auto max-h-96 ${darkMode ? 'dark' : 'light'}`}
      placeholder="Enter your code snippet here..."
      value={code}
      onChange={handleCodeChange}
      readOnly={readOnly}
    />
  );
};

export default CodeArea;
