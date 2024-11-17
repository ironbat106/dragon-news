import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from './../components/pages/CategoryNews';
import AuthLayout from './../layouts/AuthLayout';
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import NewsDetails from "../components/pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/pages/ErrorPage";
import Career from "../components/pages/Career";
import About from "../components/pages/About";
import DevInfo from "../components/pages/DevInfo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) =>
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },
        ],
    },
    {
        path: "/news/:id",
        element: 
        <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader: ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "/career",
        element: <Career></Career>,
    },
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/dev",
        element: <DevInfo></DevInfo>
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    }
])

export default router;