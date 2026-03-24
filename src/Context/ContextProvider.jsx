import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { createContext } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const ThemeProvider = createContext();


export function ContextProvider({ children }) {

  const token = localStorage.getItem("token");

  const userData = token ? jwtDecode(token) : null;
  const [color, setColor] = useState(() => {
    const stored = localStorage.getItem("color")
    if(stored !== null) return stored === "true"
    if(userData?.theme !== undefined) return userData.theme
  }); {/*state body color */}

  const [menu, setMenu] = useState(false); {/*state menu (open or closed) */}
  
  const [hiddenSection, setHiddenSection] = useState(null); {/*state of code section (open or closed) */}
  const [email, setEmail] = useState(""); {/*email input value */}
  const [password, setPassword] = useState(""); {/*password input value */}
  const [modal, setModal] = useState(null); {/*warning modal content */}

  async function changeColor() {
    const newColor = !color
    setColor(newColor);
    await axios.patch(`http://192.168.0.200:3000/users/changeTheme`, {
      theme : newColor
    },
     { headers: { Authorization: `Bearer ${token}` } }
   
  ) 
    localStorage.setItem("color", newColor); 
  }

  function toggleMenu() {
    setMenu(!menu);
  }
  const location = useLocation();
  const scrollerToTop = (window.onload = () => {
    window.scrollTo(0, 0);
  });

 
  

  {/*state lifting */}
  const toggleSection = (idx) => {
    setHiddenSection(hiddenSection === idx ? null : idx);
  };

  {/*background color manipulator*/}
  useEffect(() => {
    document.body.className = `${
      color
        ? "bg-[#040727] text-[--font-color-secundary]"
        : "bg-blue-200 text-[--font-color-primary]"
    }`;

    setMenu(false); 
  }, [location.pathname, color]);

  {/*The logic of scrolling the page when it reloads or changes */}
  useEffect(() => {
    scrollerToTop();
    setHiddenSection(null); 
    setMenu(false);
    
  }, [location.pathname]); 




  return (
    <ThemeProvider
      value={{
        token,
        color,
        changeColor,
        menu,
        toggleMenu,
        setMenu,
        hiddenSection,
        setHiddenSection,
        toggleSection,
        password,
        setPassword,
        email,
        setEmail,
        modal,
        setModal,
      }}
    >
      {children}
    </ThemeProvider>
  );
}
