import { ButtonHTMLAttributes, ReactNode, useContext } from "react";
import { ThemeProvider } from "../../Context/ContextProvider";
import { stylesForMenuLinks } from "../../Styles/styles";

type ChangeBodyThemeProps = {
  children : ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>


function ChangeBodyTheme({ children, ...props } : ChangeBodyThemeProps)  {
  const { changeColor } = useContext(ThemeProvider);

  return (
    <button {...props} className={stylesForMenuLinks} onClick={changeColor}>
      {children}
    </button>
  );
}

export default ChangeBodyTheme;
