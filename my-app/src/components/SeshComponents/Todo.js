import React, { useState } from 'react';
 import './Todo.css';


 function Task({ task, index, completeTask, removeTask }) { //This is the task component 
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}
            <button  onClick={() => removeTask(index)}>x</button>
            <button onClick={() => completeTask(index)}>Complete</button>
        </div>
    );
}

function CreateTask({ addTask }) { //form component for creating task 
    const [value, setValue] = useState("");

    const handleSubmit = e => { //creates task if not default value of null
        e.preventDefault();
        if (!value) return;
        
        addTask(value);
        setValue("");
    }
    
    return (
        // form thats returned in the CreateTask component function
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}


function Todo() {
    const [tasks, setTasks] = useState([ //null set of tasks
       
    ]);

    const addTask = title => { //adds new task to the end of the old set
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => { //toggle the completed value of a task
        const newTasks = [...tasks];
        newTasks[index].completed ? newTasks[index].completed = false: newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {//removes task from the set
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return ( 
        // the actual jsx thats returned/displayed for this component
        <div className="todo-container">
            <div className="header">TODO</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                    />
                ))}
            </div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}

export default Todo;