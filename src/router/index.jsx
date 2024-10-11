import { createBrowserRouter } from "react-router-dom"

import Dashboard from "../pages/Dashboard";
import Setting from "../pages/Setting";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Logout from "../pages/Logout";
import AdminLayout from "../layouts/AdminLayout";
import News from "../pages/News";


const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'news',
                element: <News />,
            },
            {
                path: "setting",
                element: <Setting />,
            },
        ]
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
]);

export default router;