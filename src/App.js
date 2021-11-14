import React, {useState, useEffect, useRef} from 'react';


function App() {
  const [value, setValue] = useState('text')
  const renderCount = useRef(1)
  const inputRef = useRef(null)

  useEffect(()=>{
    renderCount.current++
    console.log(inputRef.current.value)
  })

  const focus = () => inputRef.current.focus()

  return (
    <div className="container">

      <h1>Render count: {renderCount.current}</h1>
      <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value}/>
      <button className="btn" onClick={focus}>Focus</button>  
    </div>
  );
}

export default App;
