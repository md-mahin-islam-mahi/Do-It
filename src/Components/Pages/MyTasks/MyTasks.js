import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import TaskTable from './TaskTable';

const MyTasks = () => {
    const [tasks, setTasks] = useState([]);
    const { user } = useContext(AuthContext);

        useEffect(() => {
        fetch(`http://localhost:5000/tasks/${user.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [user.email]);

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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(task => <TaskTable key={task._id} task={task}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTasks;