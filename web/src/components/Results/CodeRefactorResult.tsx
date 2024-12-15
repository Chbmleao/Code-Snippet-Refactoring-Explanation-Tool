import React from 'react';
import CodeArea from '../UI/CodeArea';

interface CodeRefactorResultProps {
  code: string;
  explanation: string;
  reasoning: Array<string>;
}

const CodeRefactorResult: React.FC<CodeRefactorResultProps> = ({
  code,
  explanation,
  reasoning,
}) => {
  return (
    <div className="w-full p-3 border-gray-300 rounded-md resize-none">
      <div className="mb-4 text-left">
        <h2>Explanation</h2>
        <p>{explanation}</p>
      </div>

      <div className="h-auto max-h-96">
        <CodeArea initalCode={code} readOnly={true} onChange={() => {}} />
      </div>

      <div className="mt-4 text-left">
        <h2>Reasoning</h2>
        <ul>
          {reasoning.map((reason, index) => (
            <li key={index}>
              {index + 1}. {reason}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CodeRefactorResult;
