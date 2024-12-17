import '../../styles/UI/CodeArea.css';
import React, { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

interface CodeAreaProps {
  initialCode: string;
  readOnly: boolean;
  onChange: (code: string) => void;
  darkMode?: boolean;
}

/**
 * `CodeArea` is a React functional component that renders a resizable textarea for code input.
 *
 * @param {string} initialCode - The initial code to be displayed in the textarea.
 * @param {boolean} readOnly - If true, the textarea will be read-only.
 * @param {boolean} darkMode - If true, the textarea will have a dark mode style.
 * @param {(newCode: string) => void} onChange - Callback function to handle changes in the textarea value.
 *
 * @returns {JSX.Element} A resizable textarea component for code input.
 */
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
