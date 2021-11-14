import React from 'react';
import { useState } from 'react/cjs/react.development';
import Alert from './Alert';
import Main from './Main';

export const AlertContext = React.createContext()

function App() {

  const [alert, setAlert] = useState(false)
  const toggleAlert = () => setAlert(prev => !prev)

  return (

    <AlertContext.Provider value={alert}>
      <div className="container">
        <Alert/>
        <Main toggle={toggleAlert}/>
      </div>
    </AlertContext.Provider>

  );

}

export default App;
