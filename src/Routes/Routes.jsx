import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Component/Home/Home";
import LoginPage from "../Component/Pages/LoginPage/LoginPage";
import MainForm from "../Layout/MainForm";
import RegisterPage from "../Component/Pages/RegisterPage/RegisterPage";
import AddToys from "../Component/Shared/AddToys/AddToys";
import MyToy from "../Component/Shared/MyToy/MyToy";
import AllToys from "../Component/Shared/AllToys/AllToys";
import UpdateToy from "../Component/Shared/UpdateToy/UpdateToy";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Blog from "../Component/Shared/Blog/Blog";
import ToyDetails from "../Component/Section/ToyDetails/ToyDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
           path: '/',
           element: <Home></Home>
        },
         {
           path: '/blog',
           element: <Blog></Blog>
         },
        {
          path: '/AddToy',
          element: <PrivateRoutes><AddToys></AddToys></PrivateRoutes>
        },
        {
          path:'/AllToy',
          element: <AllToys></AllToys>
        },
        {
          path:'/MyToys',
          element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>
        },
        {
          path:'/updateToy/:id',
          element: <PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes> ,
          loader: ({ params }) => fetch(`https://edu-toys-server-nine.vercel.app/allToy/${params.id}`)
        },
        {
          path: '/toy/:id',
          element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
          loader: ({ params }) => fetch(`https://edu-toys-server-nine.vercel.app/allToy/${params.id}`)
        }
      ]
    },
    {
      path: '/',
      element: <MainForm></MainForm>,
      children: [
        {
          path: "/login",
          element: <LoginPage></LoginPage>
        },
        {
          path: "/register",
          element: <RegisterPage></RegisterPage>
        }
      ]
    }
]);

export default router;