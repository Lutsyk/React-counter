import React, {useState, useCallback}from 'react';
import ItemsList from './itemsList';


function App() {

  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_,i) => `Elem: ${i+1}`)
  },[count])

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  return (
    <div className="container">
      <h1 style={styles}>Количество элементов: {count}</h1>
      <div>
        <button className="btn" onClick={()=>setCount(prev => prev + 1)}>Add</button>
        <button className="btn" onClick={()=>setColored(prev => !prev)}>Change</button>

        <ItemsList getItems={generateItemsFromAPI}/>
      </div>
    </div>
  );

}

export default App;
