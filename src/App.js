import React from 'react';


function App() {
  const [counter, setCounter] = React.useState(0)

  function increment(){
    setCounter(counter+1)
  }


  return (
    <div className="container">
      <h1>Counter = {counter}</h1>
      <button onClick={increment} className="btn increment">+</button>
      <button className="btn decrtment">-</button>
    </div>
  );
}

export default App;
