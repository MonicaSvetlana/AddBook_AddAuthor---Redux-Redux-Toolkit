import { useRoutes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Authors } from "./pages/Authors";
import { AddAuthor } from "./pages/AddAuthor";
import {Books} from "./pages/Books";
import { AddBook } from "./pages/AddBook";

export const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Authors />,
        },
        {
          path: "addauthor",
          element: <AddAuthor />,
        },
        {
          path: "books",
          element: <Books />,
        },

        {
          path: "addbook",
          element: <AddBook />,
        },
      ],
    },
  ]);
  return routes;
};
