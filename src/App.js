import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      <div className='app_body'>
        <Router>
        <Switch>
          
          <Sidebar />   {/* Sidebar */}
          <Chat />      {/* Chat */}
          
        </Switch>
        </Router >
      </div>
    </div>
  );
}

export default App;
