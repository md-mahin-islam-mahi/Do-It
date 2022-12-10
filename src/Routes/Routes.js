import { createBrowserRouter } from "react-router-dom";
import AddToList from "../Components/Pages/AddToList/AddToList";
import Home from "../Components/Pages/Home/Home";
import MyTasks from "../Components/Pages/MyTasks/MyTasks";
import Login from "../Components/Pages/SignUp/Login/Login";
import SignUp from "../Components/Pages/SignUp/SignUp";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/myTasks",
                element: <MyTasks />
            },
            {
                path: "/add-to-list",
                element:<AddToList />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
])

export default routes;