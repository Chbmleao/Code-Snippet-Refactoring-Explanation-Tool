import './App.css';
import CodeInputForm from './components/Forms/CodeInputForm';

function App() {
  const handleCodeSubmit = (code: string) => {
    console.log('Code Submitted:', code);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <CodeInputForm onSubmit={handleCodeSubmit} />
    </div>
  );
}

export default App;
