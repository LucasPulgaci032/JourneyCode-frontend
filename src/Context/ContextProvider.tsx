import { useState, useEffect, createContext, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

// =========================
// Tipos
// =========================

type JwtPayload = {
  theme?: boolean;
  exp?: number;
  iat?: number;
  [key: string]: any;
};

type ContextType = {
  token: string | null;
  setToken : React.Dispatch<React.SetStateAction<string | null>>
  color: boolean;
  changeColor: () => Promise<void>;
  menu: boolean;
  toggleMenu: () => void;
  setMenu: (value: boolean) => void;
  hiddenSection: number | null;
  setHiddenSection: (value: number | null) => void;
  toggleSection: (idx: number) => void;
  password: string;
  setPassword: (value: string) => void;
  modal: any;
  setModal: (value: any) => void;
};


// =========================
// Contexto
// =========================

const AppContext = createContext<ContextType | null>(null);
 
// Hook customizado para consumir o contexto
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext deve ser usado dentro do AppProvider");
  return context;
}

// =========================
// Provider
// =========================

export function AppProvider({ children }) {
   const [token,setToken] = useState(() => localStorage.getItem("token"));
  const userData = token ? jwtDecode<JwtPayload>(token) : null;

  const [color, setColor] = useState<boolean>(() => {
    const stored = localStorage.getItem("color");
    if (stored !== null) return stored === "true";
    if (userData?.theme !== undefined) return userData.theme;
    return false;
  });

  const [menu, setMenu] = useState(false);
  const [hiddenSection, setHiddenSection] = useState<number | null>(null);
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(null);

  const location = useLocation();

  // =========================
  // Actions
  // =========================

  async function changeColor() {
    const newColor = !color;
    try {
      await axios.patch(
        "http://192.168.0.200:3000/users/changeTheme",
        { theme: newColor },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setColor(newColor);
      localStorage.setItem("color", JSON.stringify(newColor));
    } catch (error) {
      console.error(error);
    }
  }

  function toggleMenu() {
    setMenu((prev) => !prev);
  }

  function toggleSection(idx: number) {
    setHiddenSection((prev) => (prev === idx ? null : idx));
  }

  // =========================
  // Effects
  // =========================

  useEffect(() => {
    document.body.className = color
      ? "bg-[#040727] text-[--font-color-secundary]"
      : "bg-blue-200 text-[--font-color-primary]";
    setMenu(false);
  }, [location.pathname, color]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setHiddenSection(null);
    setMenu(false);
  }, [location.pathname]);

  // =========================
  // Valor do contexto
  // =========================

  const value: ContextType = {
    token,
    setToken,
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
    modal,
    setModal,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}