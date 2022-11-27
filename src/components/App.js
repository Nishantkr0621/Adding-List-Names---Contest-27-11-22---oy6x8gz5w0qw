import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import List from "./List";
const App = () => {
  //code here
  const [ inputData , setInputData] = useState("");
  const [data , setData] = useState([]);
  const dataFun = ()=>{
    setData([...data , inputData]);
    setInputData("");
  }
  return (
    <div id="main">
       <input id="input" value={inputData} onChange={(e)=>setInputData(e.target.value)} />
      <button id="button" onClick={dataFun}>Click</button>
       <ul id="list">
      <List listx={data} />
      </ul>
    </div>
  )
}


export default App;
