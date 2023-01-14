import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/global/Header/index.js";
import routes from "./routes/index.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route, idx) => (
          <Route path={route.path} key={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
