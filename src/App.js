import React, {useState, useMemo} from 'react';

function complexCompute(num) {
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}


function App() {

  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)
  const computed = useMemo(()=>{
    return complexCompute(number)
  }, [number])

  const styles = {
    color: colored ? 'red' : 'blue'
  }

  return (
    <div className="container">

    <h1 style={styles}>Вычисляем свойство: {computed}</h1>
    <div>
      <button className="btn" onClick={()=>setNumber(prev => prev + 1)}>Добавить</button>
      <button className="btn" onClick={()=>setNumber(prev => prev - 1)}>Убавить</button>
      <button className="btn" onClick={()=>setColored(prev => !prev)}>Changed</button>
    </div>


    </div>
  );
}

export default App;
