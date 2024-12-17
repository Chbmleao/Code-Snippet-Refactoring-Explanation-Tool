import React, { useState } from 'react';
import { Button, CodeArea, TitleBox } from '../index';

interface CodeInputFormProps {
  onSubmit: (code: string) => void;
}

/**
 * `CodeInputForm` is a React functional component that renders a form for code input.
 * It allows users to enter a code snippet, which will be submitted for refactoring and explanation.
 *
 * @component
 * @param {CodeInputFormProps} props - The properties passed to the component.
 * @param {function} props.onSubmit - The function to call when the form is submitted with valid code.
 *
 * @returns {JSX.Element} The rendered form component.
 *
 * @example
 * <CodeInputForm onSubmit={handleCodeSubmit} />
 */
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
      className="w-full p-3 pt-10 border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      onSubmit={handleSubmit}
    >
      <TitleBox
        title="Code Refactoring & Explanation Tool"
        description="Enter your code snippet, and our AI tool will refactor it, while providing insightful explanations about the changes."
        darkMode={true}
      />

      <CodeArea
        initialCode=""
        readOnly={false}
        darkMode={true}
        onChange={setCode}
      />
      <Button text="Submit" />
    </form>
  );
};

export default CodeInputForm;
