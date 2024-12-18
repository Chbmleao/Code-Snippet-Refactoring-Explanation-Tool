import '../../styles/UI/CodeArea.css';
import React, { useEffect, useState, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { CodeSyntaxHighlighter } from '../';

interface CodeAreaProps {
  initialCode: string;
  readOnly: boolean;
  onChange: (code: string) => void;
  darkMode?: boolean;
}

/**
 * `CodeArea` is a React functional component that provides an editable code area with syntax highlighting.
 *
 * @param {CodeAreaProps} props - The properties for the `CodeArea` component.
 * @param {string} [props.initialCode=''] - The initial code to display in the code area.
 * @param {boolean} [props.readOnly=false] - If true, the code area will be read-only.
 * @param {boolean} [props.darkMode=false] - If true, the code area will be displayed in dark mode.
 * @param {function} props.onChange - Callback function to handle changes in the code area.
 *
 * @returns {JSX.Element} The rendered `CodeArea` component.
 *
 * @example
 * <CodeArea
 *   initialCode="console.log('Hello, world!');"
 *   readOnly={false}
 *   darkMode={true}
 *   onChange={(newCode) => console.log(newCode)}
 * />
 */
const CodeArea: React.FC<CodeAreaProps> = ({
  initialCode = '',
  readOnly = false,
  darkMode = false,
  onChange,
}) => {
  const [code, setCode] = useState<string>(initialCode);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const codeAreaRef = useRef<HTMLDivElement>(null);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = event.target.value;
    setCode(newCode);
    onChange(newCode);
  };

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        codeAreaRef.current &&
        !codeAreaRef.current.contains(event.target as Node)
      ) {
        setIsEditing(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative code-area cursor-text"
      onClick={() => setIsEditing(true)}
      ref={codeAreaRef}
    >
      {!readOnly && (isEditing || !code) ? (
        <TextareaAutosize
          className={`w-full p-3 border rounded-md resize-none overflow-hidden text-area ${
            darkMode ? 'dark' : 'light'
          }`}
          placeholder="Enter your code snippet here..."
          value={code}
          onChange={handleCodeChange}
        />
      ) : (
        <CodeSyntaxHighlighter code={code} />
      )}
    </div>
  );
};

export default CodeArea;
