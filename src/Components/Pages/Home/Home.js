import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1288012677/photo/close-up-task-board-scrum-office-bulletin-board-agile-stickers-using-tasks-control-of-agile.jpg?b=1&s=170667a&w=0&k=20&c=SiwwhqHQtjoGwBsFPT0gikCmDS880A4C7yZpy2E14Jc=")` }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h3>Welcome to</h3>
                        <h1 className="mb-5 text-5xl font-bold">Do It</h1>
                        <p>A ToDo list app</p>
                        <Link to="/myTasks">
                            <button className='btn bg-[#0074DD]'>My Task List</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;