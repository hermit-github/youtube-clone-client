import {createBrowserRouter} from "react-router-dom";
import { lazy } from "react";

// lazy load all the pages
const HomePage = lazy(() => import("./home/home"))
const LoginPage = lazy(() => import("./login/login"))
const SearchPage = lazy(() => import("./search/search"))
const WatchPage = lazy(() => import("./watch/watch"))


const routes = [
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"/login",
        element:<LoginPage/>
    },
    {
        path:"/search",
        element:<SearchPage/>
    },
    {
        path:"/watch/:id",
        element:<WatchPage/>
    },
]

const router = createBrowserRouter(routes);

export default router