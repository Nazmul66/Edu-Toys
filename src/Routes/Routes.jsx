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
import ViewDetails from "../Component/Section/ViewDetails/ViewDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
          path: '/AddToy',
          element: <AddToys></AddToys>
        },
        {
          path:'/AllToy',
          element: <AllToys></AllToys>
        },
        {
          path:'/MyToys',
          element: <MyToy></MyToy>
        },
        {
          path:'/updateToy/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({ params }) => fetch(`http://localhost:3000/allToy/${params.id}`)
        },
        {
          path: '/viewDetails/:id',
          element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>
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