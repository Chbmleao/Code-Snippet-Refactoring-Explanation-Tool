import './App.css';
import CodeInputForm from './components/Forms/CodeInputForm';
import { callCodeRefactorAPI } from './services/apiService';

function App() {
  const handleCodeSubmit = (code: string) => {
    callCodeRefactorAPI(code).then((response: any) => {
      console.log(response);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <CodeInputForm onSubmit={handleCodeSubmit} />
    </div>
  );
}

export default App;
