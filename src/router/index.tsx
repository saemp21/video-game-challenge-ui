import { Outlet, RouteObject } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Shopping from "../pages/Shopping";
import BuyTournament from "../pages/BuyTournament";
import Resume from "../pages/Resume";
import Login from "../pages/Login";

export const routerArray: RouteObject[] = [
  {
    path: "",
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "shopping",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Shopping />,
          },
          {
            path: "tournament",
            element: <Outlet />,
            children: [
              {
                path: ":tournamentId/:priceTournament",
                element: <BuyTournament />,
              },
              {
                path: "resume",
                element: <Resume />,
              },
            ],
          },
        ],
      },
    ],
  },
];
