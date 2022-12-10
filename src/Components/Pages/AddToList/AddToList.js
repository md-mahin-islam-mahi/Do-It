import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddToList = () => {
    const {user} = useContext(AuthContext);

    // add task to list
    const addTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const userEmail = user?.email;
        const task = form.task.value;
        const date = form.date.value;
        const time = form.time.value;

        const addedTask = {
            task,
            userEmail,
            date,
            time
        }

        // Post method to add task
        fetch('https://todo-app-server-opal.vercel.app/addTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addedTask)
        })
        .then(res => res.json())
        alert('Added task successfully!')
        form.reset();
    }

    return (
        <div>
            <h2 className='text-3xl text-[#0074DD] font-bold py-5'>Add Tasks to list</h2>

            {/* Task adding form */}
            <form onSubmit={addTask} className='lg:w-1/3 md:w-1/2 mx-auto border px-3 py-5 rounded-lg'>
                <div className="form-control mb-3">
                    <label className='mb-2'>
                        {/* Task Name */}
                        <span className="text-xl text-start">Task that you want to add...</span>
                    </label>
                    <input name='task' type="text" placeholder="Your Task" className="input input-bordered" required/>
                </div>

                <div className="form-control mb-3">
                    <label className='mb-2'>
                        {/* Task Date */}
                        <span className="text-xl text-start">Set Date</span>
                    </label>
                    <input name='date' type="text" placeholder="Date (dd/mm/yy)" className="input input-bordered" required/>
                </div>

                <div className="form-control mb-3">
                    <label className='mb-2'>
                        {/* Task Time */}
                        <span className="text-xl text-start">Set Time</span>
                    </label>
                    <input name='time' type="text" placeholder="Time (am/pm)" className="input input-bordered" required/>
                </div>

                <div className="form-control mb-3">
                    <input type="submit" value="Add Task" className='btn text-white text-xl font-semibold mt-10' />
                </div>
                <p><span className=' text-yellow-400 text-xl font-semibold'>Warning: </span>Brfore adding tasks, you need to <Link className='text-blue-500 font-semibold' to = "/login">Login</Link> first</p>
            </form>

            <div>
                <Link className='btn mt-20' to = "/myTasks">My Tasks</Link>
            </div>
        </div>
    );
};

export default AddToList;