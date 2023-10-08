import {createBrowserRouter} from "react-router-dom";
import HomePage from "./home/home";
import LoginPage from "./login/login";
import SearchPage from "./search/search";
import WatchPage from "./watch/watch";


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