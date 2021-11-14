import React, {useState, useEffect, useRef} from 'react';


function App() {
  const [value, setValue] = useState('text')
  const renderCount = useRef(1)

  useEffect(()=>{
    renderCount.current++
  })

  return (
    <div className="container">

      <h1>Render count: {renderCount.current}</h1>
      <input type='text' onChange={e => setValue(e.target.value)} value={value}/>
    </div>
  );
}

export default App;
