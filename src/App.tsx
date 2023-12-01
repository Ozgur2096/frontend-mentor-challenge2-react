import React from 'react';
import './App.css';
import { GlobalContextProvider } from './globalContext/GlobalContext';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <GlobalContextProvider>
      <div className='App'>
        <div className='container'>
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
