import { createBrowserRouter } from "react-router-dom";
import AddToList from "../Components/Pages/AddToList/AddToList";
import Finished from "../Components/Pages/Finished/Finished";
import Home from "../Components/Pages/Home/Home";
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
                path: "/add-to-list",
                element: <AddToList />
            },
            {
                path: "/finished",
                element: <Finished />
            }
        ]
    }
])

export default routes;