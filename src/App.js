import React, {useState, useEffect} from 'react';


function App() {

  const [type, setType] = useState('users')
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  return (
    <div className="container">

      <h1>Resorse: {type}</h1>
      <div>
        <button className="btn" onClick={()=>setType('users')}>Users</button>
        <button className="btn" onClick={()=>setType('todos')}>Todo</button>
        <button className="btn" onClick={()=>setType('posts')}>Posts</button>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>

    </div>
  );
}

export default App;
