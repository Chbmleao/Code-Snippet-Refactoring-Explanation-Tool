import './App.css';
import React, { useState, useRef } from 'react';
import Header from './components/Layouts/Header';
import {
  CodeInputForm,
  LoadingBox,
  ErrorBox,
  CodeRefactorResult,
} from './components';

import { refactorCode } from './services/codeRefactorService';

/**
 * The main application component.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * <App />
 *
 * @remarks
 * This component handles the main logic for code refactoring. It includes state management for loading, error handling, and displaying the refactored code.
 *
 * @typedef {Object} RefactoredData
 * @property {string} code - The refactored code.
 * @property {string} explanation - Explanation of the refactored code.
 * @property {Array<string>} reasoning - Reasoning behind the refactoring.
 *
 * @typedef {Object} APIResponse
 * @property {string} code - The refactored code.
 * @property {string} explanation - Explanation of the refactored code.
 * @property {Array<string>} reasoning - Reasoning behind the refactoring.
 *
 * @function scrollToRef
 * @param {React.RefObject<HTMLDivElement>} ref - The reference to the HTML element to scroll to.
 *
 * @function handleCodeSubmit
 * @param {string} code - The code snippet to be refactored.
 *
 * @function onRetryClick
 * Handles the retry action when an error occurs.
 *
 * @state {boolean} isLoading - Indicates if the refactoring process is in progress.
 * @state {string | null} error - Stores any error message that occurs during the refactoring process.
 * @state {string} inputCode - The code snippet input by the user.
 * @state {RefactoredData} refactoredData - The data resulting from the refactoring process.
 *
 * @ref {React.RefObject<HTMLDivElement>} loadingSectionRef - Reference to the loading section element.
 * @ref {React.RefObject<HTMLDivElement>} codeRefactorResultRef - Reference to the code refactor result section element.
 */
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

    refactorCode(code)
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
    <div className="app">
      <Header />

      <div className="responsive-padding px-36 bg-gray-950 min-h-screen flex items-center justify-center">
        <CodeInputForm onSubmit={handleCodeSubmit} />
      </div>

      {isLoading && (
        <div
          ref={loadingSectionRef}
          className="responsive-padding px-36 bg-white min-h-screen flex items-center justify-center"
        >
          <LoadingBox message="Refactoring your code snippet..." />
        </div>
      )}

      {error && (
        <div
          ref={codeRefactorResultRef}
          className="responsive-padding px-36 bg-white min-h-screen flex items-center justify-center"
        >
          <ErrorBox title={error} onRetryClick={onRetryClick} />
        </div>
      )}

      {refactoredData.code && (
        <div
          ref={codeRefactorResultRef}
          className="responsive-padding px-36 bg-white min-h-screen flex items-center justify-center"
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
