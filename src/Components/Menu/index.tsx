import { ButtonHTMLAttributes } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import ChangeBodyTheme from "../body/ChangeBodyThemeButton";
import { stylesForMenuLinks } from "../../Styles/styles";
import { useLocation , useNavigate} from "react-router-dom";
import { useAppContext } from "../../Context/ContextProvider";


type Url = {
  id : number,
  name : string,
  path : string
}
const urls : Url[] = [
  { id: 1, name: "Inicio", path: "/roadmaps" },
  { id: 2, name: "Meus Roadmaps", path: "/meusroadmaps" },
  
];

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function BtnMenu({ onClick} : BtnProps ){
  const locationButton  = useLocation();
  const {color} = useAppContext()

  return (
    <button
      onClick={onClick}
      className={`flex justify-end  text-4xl p-4 right-2 mr-8 fixed  hover:text-5xl ${color ? "text-white" : "text-[--font-color-primary]"} ${locationButton.pathname == "/" ? "bottom-5" : "bottom-0"}`}
    >
      <CiMenuBurger />
    </button>
  );
}

export function Menu({ ...props } : BtnProps) {
    const navigate = useNavigate()

const handleLogout = () =>{
  localStorage.removeItem("token");
  navigate('/')
}
  return (
    <nav {...props}>
      <ChangeBodyTheme>Alterar tema</ChangeBodyTheme>
      {urls.map((item, index) => (
        <Link className={stylesForMenuLinks} key={index} to={item.path}>
          {item.name}
        </Link>
      ))}
      <button onClick={handleLogout} className={stylesForMenuLinks}>Sair</button>
    </nav>
  );
}
