import { Outlet, RouteObject } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Shopping from "../pages/Shopping";
import BuyTournament from "../pages/BuyTournament";
import Resume from "../pages/Resume";
import Manager from "../pages/Manager";
import CreateTournament from "../pages/CreateTournament";
import Statistics from "../pages/Statistics";
import StatisticEdit from "../pages/StatisticEdit";
// import Login from "../pages/Login";

export const routerArray: RouteObject[] = [
  {
    path: "",
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      // {
      //   path: "login",
      //   element: <Login />,
      // },
      {
        path: "manager",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Manager />,
          },
          {
            path: "create-tournament",
            element: <CreateTournament />,
          },
          {
            path: "statistics",
            element: <Outlet />,
            children: [
              {
                path: "",
                element: <Statistics />,
              },
              {
                path: ":statisticId",
                element: <StatisticEdit />,
              },
            ],
          },
        ],
      },
      {
        path: "validate",
        children: [],
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
