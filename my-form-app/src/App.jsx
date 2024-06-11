import './App.css';
import { MainContent } from './components/MainContent';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
