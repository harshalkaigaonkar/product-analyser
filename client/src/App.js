import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import AnalyzeProduct from './AnalyzeProduct';

function App() {
  const [link, setLink] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [click, setClick] = useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    setClick(true);
    const payload ={
      "key": link
    };
    const res = await axios.post('http://localhost:3001/api/product', payload);
    if(res.data) {
      setData(res);
    } else {
      setError('Something gone wrong, Please try again.')
    }
  }
  return (
    <div className="App">
      <div>
        <h1>Put the Amazon Product Link Here 👇👇</h1>
        <form onSubmit={onSubmit}>
          {error && <h2>{error}</h2>}
          <input type='text' name='Link_box' placeholder='Link..' onChange={(e) => setLink(e.target.value)} />
          <input type='submit' value='Analyze Product' />
        </form>
      </div>
      {click && <AnalyzeProduct data={data} />}
    </div>
  );
}

export default App;
