import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";


export const Router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>,
    },
    {
        path:'/news',
        element:<h1>News layout</h1>,
    },
    {
        path:'/auth',
        element:<h1>Login</h1>,
    },
    {
        path:'*',
        element:<h1>Error</h1>,
    },
]);