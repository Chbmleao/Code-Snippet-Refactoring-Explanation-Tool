import './App.css';
import React, { useState } from 'react';
import CodeInputForm from './components/Forms/CodeInputForm';
import CodeRefactorResult from './components/Results/CodeRefactorResult';
import { callCodeRefactorAPI } from './services/apiService';

const App: React.FC = () => {
  const [refactoredData, setRefactoredData] = useState<{
    code: string;
    explanation: string;
    reasoning: Array<string>;
  }>({
    code: '',
    explanation: '',
    reasoning: [],
  });

  const handleCodeSubmit = (code: string) => {
    callCodeRefactorAPI(code)
      .then((response: any) => {
        const { code: refactoredCode, explanation, reasoning } = response;
        setRefactoredData({
          code: refactoredCode,
          explanation,
          reasoning,
        });
      })
      .catch(error => console.error('API call failed', error));
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <CodeInputForm onSubmit={handleCodeSubmit} />
      </div>
      {refactoredData.code && (
        <div className="min-h-screen flex items-center justify-center">
          <CodeRefactorResult
            code={refactoredData.code}
            explanation={refactoredData.explanation}
            reasoning={refactoredData.reasoning}
          />
        </div>
      )}
    </div>
  );
};

export default App;
