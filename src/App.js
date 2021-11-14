import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function useLogger(value) {
  useEffect(()=>{
    console.log(value)
  },[value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind:{value, onChange},
    value,
    clear
  }
}

function App() {
  
  const input = useInput('')

  useLogger(input.value)

  return (

      <div className="container">
        <input type="text" {...input.bind}/>
        <button className='btn' onClick={()=> input.clear()}>Clear</button>
        <h1>{input.value}</h1>
      </div>
  );
}

export default App;
