import React, { useEffect, useState } from 'react'
import Task from './task.jsx'
const Home = () => {
    const initialarr = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

    const [tasks, setTasks] = useState(initialarr);
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")

    const SubmitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks, { title, description }])
        settitle("")
        setdescription("")
    };
    const deletetask = (index) => {
        const filteredarr = tasks.filter((val, i) => {
            return i !== index;
        })
        setTasks(filteredarr);
    }
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div class="section">
            <form onSubmit={SubmitHandler}>
                <div class="head">Daily Goals</div >
                <input type="text" class="inputbox" placeholder="Title" value={title} onChange={(e) => { settitle(e.target.value) }}></input>
                <textarea class="text" placeholder="Description" value={description} onChange={(e) => { setdescription(e.target.value) }}></textarea>
                <button class="btn" type="submit" >ADD</button>

            </form>
            {tasks.map((item, index) => (
                <Task key={index} title={item.title} description={item.description} deletetask={deletetask} index={index} />
            ))}

        </div>
    );
};
export default Home;