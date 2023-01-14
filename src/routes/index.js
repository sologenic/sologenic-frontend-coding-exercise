import MainPage from "../containers/MainPage";
import UserPage from "../containers/UserPage";

export default [
  {
    name: "Main",
    path: "/",
    element: <MainPage />,
  },
  {
    name: "User",
    path: "/user",
    element: <UserPage />,
  },
  {
    name: "About",
    path: "/about",
    element: <MainPage />,
  },
];
