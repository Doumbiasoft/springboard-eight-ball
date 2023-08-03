import React from 'react';
import EightBall from './EightBall.js'
import answers from './Answers.js';
import './App.css';

function App() {
  return (
    <>
    <div className='App'>
     <EightBall answers={answers}/>
    </div>
    </>
  );
}

export default App;
