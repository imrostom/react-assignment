import { createBrowserRouter } from "react-router-dom"


import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../pages/Dashboard";
import Setting from "../pages/Setting";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Logout from "../pages/Logout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "setting",
                element: <Setting />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "logout",
                element: <Logout />,
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);

export default router;