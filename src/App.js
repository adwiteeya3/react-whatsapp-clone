import React, { useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './Login';


function App() {
  const [user, setUser]= useState(null);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
        <Router>
          <Sidebar />
          <Switch>

            <Route path='/rooms/:roomId'>
              <Chat />
            </Route>

            <Route path='/'>
              <Chat />
            </Route>
          </Switch>
        </Router >
      </div>
      )}
    </div>
  );
}

export default App;
