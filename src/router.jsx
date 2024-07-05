import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Main } from "./components/Main";
import { TodoList } from "./components/TodoList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/todos",
        element: <TodoList />
      }
    ]
  }
])