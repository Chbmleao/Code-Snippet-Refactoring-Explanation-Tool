import React, { useState } from 'react';
import Button from '../UI/Button';
import CodeArea from '../UI/CodeArea';
import TitleBox from '../Layouts/TitleBox';

interface CodeInputFormProps {
  onSubmit: (code: string) => void;
}

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
