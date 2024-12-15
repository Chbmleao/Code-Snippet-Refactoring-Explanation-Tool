import React from 'react';
import TitleBox from '../Layouts/TitleBox';
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
    <div className="w-full py-24 border-gray-300 rounded-md resize-none">
      <div className="mb-4 text-left">
        <TitleBox
          title="Code explanation"
          description="A natural-language explanation of what the code does."
        />
        <p>{explanation}</p>
      </div>

      <div className="h-auto max-h-96 my-10">
        <CodeArea initialCode={code} readOnly={true} onChange={() => {}} />
      </div>

      <div className="mt-4 text-left">
        <TitleBox
          title="Step-by-step reasoning"
          description="A step-by-step reasoning of how the explanation was derived."
        />
        <ul>
          {reasoning.map((reason, index) => (
            <li key={index}>
              <strong>{index + 1}.</strong> {reason}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CodeRefactorResult;
