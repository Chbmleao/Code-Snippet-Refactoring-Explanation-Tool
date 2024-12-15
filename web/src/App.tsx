import './App.css';
import React, { useState, useRef } from 'react';
import Header from './components/Layouts/Header';
import CodeInputForm from './components/Forms/CodeInputForm';
import LoadingBox from './components/Layouts/LoadingBox';
import CodeRefactorResult from './components/Results/CodeRefactorResult';
import { callCodeRefactorAPI } from './services/apiService';

const App: React.FC = () => {
  const defaultRefactoredData = {
    code: '',
    explanation: '',
    reasoning: [],
  };

  const [isLoading, setIsLoading] = useState(false);
  const [refactoredData, setRefactoredData] = useState<{
    code: string;
    explanation: string;
    reasoning: Array<string>;
  }>(defaultRefactoredData);

  const loadingSectionRef = useRef<HTMLDivElement>(null);
  const codeRefactorResultRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCodeSubmit = (code: string) => {
    setRefactoredData(defaultRefactoredData);

    setIsLoading(true);
    setTimeout(() => scrollToRef(loadingSectionRef), 0);

    callCodeRefactorAPI(code)
      .then((response: any) => {
        const { code: refactoredCode, explanation, reasoning } = response;
        setRefactoredData({
          code: refactoredCode,
          explanation,
          reasoning,
        });
      })
      .catch(error => console.error('API call failed', error))
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => scrollToRef(codeRefactorResultRef), 0);
      });
  };

  return (
    <div>
      <Header />

      <div className="px-36 bg-gray-950 min-h-screen flex items-center justify-center">
        <CodeInputForm onSubmit={handleCodeSubmit} />
      </div>

      {isLoading && (
        <div
          ref={loadingSectionRef}
          className="px-36 bg-white min-h-screen flex items-center justify-center"
        >
          <LoadingBox message="Refactoring your code snippet..." />
        </div>
      )}

      {refactoredData.code && (
        <div
          ref={codeRefactorResultRef}
          className="px-36 bg-white min-h-screen flex items-center justify-center"
        >
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
