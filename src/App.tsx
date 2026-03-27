import "./App.css";
import StartComponents from "./Pages/InitialPage/InitialPage.jsx";
import { useEffect } from "react";
import { BtnMenu, Menu } from "./Components/Menu/index.tsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { RoadmapGeneric } from "./Pages/RoadmapLangPages/RoadmapPage.jsx";
import { InitialCardPage } from "./Pages/InitialCardPage/index";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { RegisterPage } from "./Pages/LoginPage/RegisterPage.jsx";
import { PrivateRoute } from "./Components/PrivateRoute/privateRoute.tsx";
import { useAppContext } from "./Context/ContextProvider.tsx";
import { MyRoadmapsPage } from "./Pages/MyRoadmapsPage/index.jsx";

function App() {
  const { menu, toggleMenu, setMenu, color } = useAppContext()
  const location = useLocation();

  useEffect(() => {
    if (menu) setMenu(!menu);
  }, [location.pathname, color]);

  return (
    <div>
      <Menu
        className={`${menu ? "flex flex-col gap-6 p-2 fixed z-50 h-full w-[150px] bg-blue-700 border-4 border-solid border-[#2a84eb] animate-glow " : "hidden"}`}
      />
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          <Route element={<PrivateRoute/>}>
          
            <Route path="/roadmaps" element={<StartComponents />} />
            <Route path="/meusroadmaps" element={<MyRoadmapsPage />} />
            <Route path="/LogicaBasica" element={<InitialCardPage />} />
            <Route path="roadmaps/:name" element={<RoadmapGeneric />} />

        </Route>
      
      </Routes>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <BtnMenu onClick={toggleMenu} />
      )}
    </div>
  );
}

export default App;

/*lucas@hotmail.com */
