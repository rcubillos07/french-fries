import { useState } from "react";

export default function UserInput({TaskList, setTaskList}){
    
    const [task, setTask] = useState("");

    function setNewTask(e){

        e.preventDefault();
        setTaskList([...TaskList, {
            id: Date.now(),
            task
        }]);
        setTask("");
    };
    
    return(
        <form onSubmit={setNewTask}>
            <label style={{padding: '10px'}}> New Task</label>
            <input value={task} onChange={(e) => setTask(e.target.value)}/>
            <button style={{marginLeft: '10px'}}>Submit</button>
        </form>
    ) ;
}
