import { RouteObject } from "react-router-dom";
import App from "../App";
import Abb from "../Abb";

export const routerArray: RouteObject[] = [
  {
    path: "",
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "mundo",
        element: <Abb />,
      },
    ],
  },
];
