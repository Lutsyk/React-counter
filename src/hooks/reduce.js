import React from 'react';
import Alert from './alert/Alert';
import { AlertProvider } from './alert/alertContext';
import Main from './Main';

function App() {
  return (
    <AlertProvider>
      <div className="container">
        <Alert/>
        <Main toggle={()=>{}}/>
      </div>
    </AlertProvider>
  );
}

export default App;
