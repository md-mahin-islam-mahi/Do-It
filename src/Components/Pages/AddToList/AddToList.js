import React from 'react';
import { toast } from 'react-toastify';

const AddToList = () => {

    const addTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const task = form.task.value;
        const date = form.date.value;
        const time = form.time.value;

        const addedTask = {
            task,
            date,
            time
        }

        fetch('http://localhost:5000/addTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addedTask)
        })
        .then(res => res.json())
        // .then(data => console.log(data));
        form.reset();
    }

    return (
        <div>
            <h2 className='text-3xl text-[#0074DD] font-bold py-5'>Add Tasks to list</h2>

            <form onSubmit={addTask} className='lg:w-1/3 md:w-1/2 mx-auto border px-3 py-5 rounded-lg'>
                <div className="form-control mb-3">
                    <label className='mb-2'>
                        <span className="text-xl text-start">Task that you want to add...</span>
                    </label>
                    <input name='task' type="text" placeholder="Your Task" className="input input-bordered" />
                </div>

                <div className="form-control mb-3">
                    <label className='mb-2'>
                        <span className="text-xl text-start">Set Date</span>
                    </label>
                    <input name='date' type="text" placeholder="Date (dd/mm/yy)" className="input input-bordered" />
                </div>

                <div className="form-control mb-3">
                    <label className='mb-2'>
                        <span className="text-xl text-start">Set Time</span>
                    </label>
                    <input name='time' type="text" placeholder="Time (am/pm)" className="input input-bordered" />
                </div>

                <div className="form-control mb-3">
                    <input type="submit" value="Add Task" className='btn text-white text-xl font-semibold mt-10' />
                </div>
            </form>
        </div>
    );
};

export default AddToList;