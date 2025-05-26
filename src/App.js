import UserInput from './components/UserInput'
import ListDisplay from './components/ListDisplay'
import './App.css';
import { use, useState } from 'react';

function App() {

  const [tasklist, setTaskList] = useState([]);

  return (
    <div className="App"> 
    <h1>To do List</h1>
    <UserInput tasklist={tasklist} setTaskList={setTaskList}/>
    <ListDisplay tasklist={tasklist} setTaskList={setTaskList}/>
    </div>
    
  );
}

export default App;
