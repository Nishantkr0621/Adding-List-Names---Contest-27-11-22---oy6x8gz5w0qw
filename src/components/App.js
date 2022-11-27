import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import List from "./List";
const App = () => {
  //code here
  const [ inputData , setInputData] = useState("");
  const [list , setList] = useState([]);
  const dataFun = ()=>{
    setList([...list , inputData]);
    setInputData("");
  }
  return (
    <div id="main">
       <input id="input" value={inputData} onChange={(e)=>setInputData(e.target.value)} />
      <button id="button" onClick={dataFun}>Click</button>
       <ul id="list">
      <List listx={list} />
      </ul>
    </div>
  )
}


export default App;
