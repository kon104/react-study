import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [apiData, setApiData] = useState([
    {id:1,title:"aa",type:["a","b"]},
    {id:2,title:"bb",type:["c","d"]}
  ]); // api

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/data.json");
      setApiData(res.data.food);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Call Web API</h1>
      <div><a href="/data.json">data source</a></div>
      <div>
        {apiData.map((data, index) => {
          return (
            <div key={index}>
              <h3>Type of Food:</h3>
              <h4>{data.id}: {data.title}</h4>
              <p>{data.type.join(",")}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
