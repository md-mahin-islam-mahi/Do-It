import React from 'react';

const TaskTable = ({ task }) => {


    const finishedTask = (id) => {
        fetch(`http://localhost:5000/finished-task/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    alert('Task finished successfully');
                }
            })
    }

    return (
        <tr>
            <td></td>
            <td>{task.task}</td>
            <td>{task.date}</td>
            <td>{task.time}</td>
            <td>
                {
                    task.finished === true ? <p>Finished</p> : <button onClick={() => finishedTask(task._id)} className='btn btn-sm bg-[#0074DD]'>Finished</button>
                }

            </td>
        </tr>
    );
};

export default TaskTable;