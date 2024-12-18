import '../../styles/Results/CodeRefactorResult.css';
import React from 'react';
import { CodeArea, TitleBox } from '../';

interface CodeRefactorResultProps {
  code: string;
  explanation: string;
  reasoning: Array<string>;
}

/**
 * Component to display the result of a code refactoring process.
 *
 * @component
 * @param {CodeRefactorResultProps} props - The properties for the component.
 * @param {string} props.code - The refactored code to display.
 * @param {string} props.explanation - A natural-language explanation of what the code does.
 * @param {string[]} props.reasoning - A step-by-step reasoning of how the explanation was derived.
 *
 * @returns {JSX.Element} The rendered component.
 */
const CodeRefactorResult: React.FC<CodeRefactorResultProps> = ({
  code,
  explanation,
  reasoning,
}) => {
  return (
    <div className="w-full py-24 border-gray-300 rounded-md resize-none code-refactor-result">
      <div className="mb-4 text-left">
        <TitleBox
          title="Code explanation"
          description="A natural-language explanation of what the code does."
        />
        <p className="paragraph">{explanation}</p>
      </div>

      <div className="h-auto my-10">
        <CodeArea initialCode={code} readOnly={true} onChange={() => {}} />
      </div>

      <div className="mt-4 text-left">
        <TitleBox
          title="Step-by-step reasoning"
          description="A step-by-step reasoning of how the explanation was derived."
        />
        <ul>
          {reasoning.map((reason, index) => (
            <li key={index} className="paragraph py-1">
              <strong>{index + 1}.</strong> {reason}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CodeRefactorResult;
