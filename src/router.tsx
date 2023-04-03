import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./auth/login";
import SignUp from "./auth/signUp";
import Chart from "./coin/Chart";
import Coin from "./coin/coin";
import Coins from "./coin/coins";
import Price from "./coin/Price";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/coin",
    element: <Coins />,
  },
  {
    path: "/coin/:coinId",
    element: <Coin />,
    children: [
      {
        path: "chart",
        element: <Chart />,
      },
      {
        path: "price",
        element: <Price />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
