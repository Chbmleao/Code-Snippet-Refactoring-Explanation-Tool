import './App.css';
import React, { useState, useRef } from 'react';
import Header from './components/Layouts/Header';
import CodeInputForm from './components/Forms/CodeInputForm';
import LoadingBox from './components/Layouts/LoadingBox';
import ErrorBox from './components/Layouts/ErrorBox';
import CodeRefactorResult from './components/Results/CodeRefactorResult';
import { callCodeRefactorAPI } from './services/apiService';

const App: React.FC = () => {
  const defaultRefactoredData = {
    code: '',
    explanation: '',
    reasoning: [],
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [inputCode, setInputCode] = useState<string>('');
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
    setInputCode(code);
    setRefactoredData(defaultRefactoredData);
    setError(null);

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
      .catch(err => {
        console.error('API call failed', err);
        setError('Failed to refactor the code snippet.');
        setRefactoredData(defaultRefactoredData);
        setTimeout(() => scrollToRef(codeRefactorResultRef), 0);
      })
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => scrollToRef(codeRefactorResultRef), 0);
      });
  };

  const onRetryClick = () => {
    handleCodeSubmit(inputCode);
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

      {error && (
        <div
          ref={codeRefactorResultRef}
          className="px-36 bg-white min-h-screen flex items-center justify-center"
        >
          <ErrorBox title={error} onRetryClick={onRetryClick} />
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
