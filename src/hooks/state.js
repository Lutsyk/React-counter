import React from 'react';


function App() {
  const [counter, setCounter] = React.useState(0)

  function increment(){
    setCounter(counter+1)
  }

  function decrtment() {
    setCounter(counter-1)
  }


  return (
    <div className="container">

      <h1>Counter = {counter}</h1>

      <div className="btnDiv">
        <button onClick={increment} className="btn increment">+</button>
        <button onClick={decrtment} className="btn decrtment">–</button>
      </div>
      
    </div>
  );
}

export default App;
