import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import OrderReview from "../components/OrderReview/OrderReview";
import Shop from "../components/Shop/Shop";
import Signup from "../components/Signup/Signup";
import Main from "../layout/Main/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [{
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
            path: '/shop',
            element: <Shop></Shop>
        },
        {
            path: '/orderreview',
            element: <OrderReview></OrderReview>
        },
        {
            path: '/*',
            element: <ErrorPage></ErrorPage>

        }
        ]
    }
])

export default routes;