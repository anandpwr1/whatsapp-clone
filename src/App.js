// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

import Sidebar from './components/Sidebar';

function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    <>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Routes>
              <Route path="/" element={
                <>
                  <Sidebar />
                  <Chat />
                </>
              }>
              </Route>

              <Route path="/rooms/:roomId" element={
                <>
                  <Sidebar />
                  <Chat />
                </>}>

              </Route>

            </Routes>
          </div>)}
      </div>
    </>
  );
}

export default App;
