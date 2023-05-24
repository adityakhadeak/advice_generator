import { useEffect, useState } from 'react';
import './Quotegen.css';

function Quotegen() {
  const [adv, setAdvice] = useState({}); // Initialize as an empty object
  const url = 'https://api.adviceslip.com/advice';

  function fetchApi() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setAdvice(data);
        console.log('After', adv.slip);
      });
  }

  useEffect(() => {
    fetchApi();
  }, []);

  function handleFectchApi(){
        fetchApi()
  }

  return (
    <div className='main-div'>
      <h1 className='heading'>Random Advice Generator</h1>
      <div className='advice-box'>
        <h2>Advice #{adv.slip && adv.slip.id}</h2>
        <p>"{adv.slip && adv.slip.advice}"</p>
        <button onClick={handleFectchApi}>Give me Advice</button>
      </div>
    </div>
  );
}

export default Quotegen;
