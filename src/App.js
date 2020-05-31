import React from 'react';
import Buttoned from './Components/Buttoned';
import Consultation from './Components/Consultation';
import Bill from './Components/Bill';
import Message from './Components/Message';
import './App.css';

function App() {
  return (
    <div className="App">
     
     <Buttoned/>
     <div className="right">
     <Consultation/>
     <Bill/>
     <Message/>
     </div>
    </div>
  );
}

export default App;
