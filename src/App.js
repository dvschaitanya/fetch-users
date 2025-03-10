import './App.css';
import {useState, useEffect} from 'react';

function App() {
  let [names, setNames] = useState([]);
  let [defaultNames, setDefaultNames] = useState([]);
  let [count, setCount] = useState(0);
  let [search, setSearch] = useState('');

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((data) => {
      setNames(data)
      setDefaultNames(data);
    })
    .catch((err)=> {
      console.error(err);
    })
  } 
 useEffect (()=>{
    fetchUsers();
 }, [])

  return (
    <div className="App">
      <h1>I am dvs</h1>
      <input
      type = 'text'
      value = {search}
      onChange={(e)=> {
        setSearch(e.target.value)
        let filterName = defaultNames.filter((item, index) => item.name.toLowerCase().includes(search.toLowerCase()));
        setNames(filterName);
        if (e.target.value === '') {
          setNames(defaultNames);
        }
      }}
      ></input>
      <ul>{
        names.map((name, index) => (
          <li key = {name.id}> {name.name}</li>
        ))
        }</ul>
    <h1>My count is {names.length}</h1>
    <button onClick={()=> {
      setCount(count+1)
    }}>Increment</button>
    </div>
  );
}

export default App;
