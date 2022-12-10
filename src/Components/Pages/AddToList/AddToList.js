import React from 'react';

const AddToList = () => {

    return (
        <div>
            <h2 className='text-3xl text-[#0074DD] font-bold py-5'>Add Tasks to list</h2>

            <div className='lg:w-1/3 md:w-1/2 mx-auto border px-3 py-5 rounded-lg'>
                <div className="form-control mb-3">
                    <label className='mb-2'>
                        <span className="text-xl text-start">Task that you want to add...</span>
                    </label>
                    <input type="text" placeholder="Your Task" className="input input-bordered" />
                </div>

                <div className="form-control mb-3">
                    <label className='mb-2'>
                        <span className="text-xl text-start">Set Date</span>
                    </label>
                    <input type="text" placeholder="Date" className="input input-bordered" />
                </div>

                <div className="form-control mb-3">
                    <label className='mb-2'>
                        <span className="text-xl text-start">Set Time</span>
                    </label>
                    <input type="text" placeholder="Time (am/pm)" className="input input-bordered" />
                </div>

                <div className="form-control mb-3">
                    <input type="submit" value="Add Task" className='btn text-white text-xl font-semibold mt-10' />
                </div>
            </div>
        </div>
    );
};

export default AddToList;