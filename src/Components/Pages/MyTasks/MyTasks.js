import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TaskTable from './TaskTable';

const MyTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tasks').then(res => setTasks(res.data));
    }, []);

    return (
        <div className='mt-20'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(task => <TaskTable key={task._id}  task={task}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTasks;