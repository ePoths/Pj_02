import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Coin from "./coin/coin";
import Coins from "./coin/coins";
import Chart from "./coin/coin-routes/Chart";
import Price from "./coin/coin-routes/Price";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
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
  },
]);
export default router;
