import MainPage from "../containers/MainPage";
import UserPage from "../containers/UserPage";

export default [
  {
    name: "Main",
    path: "/",
    element: <MainPage />,
  },
  {
    name: "Users",
    path: "/users",
    element: <UserPage />,
  },
];
