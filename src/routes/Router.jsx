import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CategoryNews from "../pages/CategoryNews";


export const Router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>,
        children:[
            {
                path:'',
                element:<Navigate to={'/category/01'}/>
            },
            {
                path:'/category/:id',
                element:<CategoryNews/>,
                loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            }
        ]
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