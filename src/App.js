import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <div className='app_body'>
        {/* Sidebar */}
        <Sidebar />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
