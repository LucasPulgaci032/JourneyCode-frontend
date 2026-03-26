import { ButtonHTMLAttributes, ReactNode,} from "react";
import { useAppContext } from "../../Context/ContextProvider";
import { stylesForMenuLinks } from "../../Styles/styles";

type ChangeBodyThemeProps = {
  children : ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>


function ChangeBodyTheme({ children, ...props } : ChangeBodyThemeProps)  {
  const { changeColor } = useAppContext()

  return (
    <button {...props} className={stylesForMenuLinks} onClick={changeColor}>
      {children}
    </button>
  );
}

export default ChangeBodyTheme;
