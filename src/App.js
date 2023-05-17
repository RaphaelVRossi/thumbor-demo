import logo from './logo.svg';
import './App.css';
import MyForm from './components/Form.js';
import { useState } from 'react';

function App() {

  const baseUrl = 'http://thumbor.thumborize.globo.com/unsafe/500x350/filters:strip_icc()/' 

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          opa
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyForm filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
    <MyButton baseUrl={baseUrl} filterText={filterText}/>
      <img src={baseUrl+filterText}/>
      <div style={{ backgroundImage: `url(${baseUrl}${filterText})` }}>
      
      </div>
      </header>
    </div>
  );
}

function MyButton({baseUrl, filterText}) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
      <p>
        {baseUrl}{filterText}
      </p>
    </div>
  );
}

export default App;
