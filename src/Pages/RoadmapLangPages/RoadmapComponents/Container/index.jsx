import { useContext } from "react";
import { stylesForLangsContainer } from "../../../../Styles/styles";
import { useAppContext } from "../../../../Context/ContextProvider";

export function LangsContainer({ children }) {
  const { color } = useAppContext();
  return (
    <div
      className={` border-2 ${stylesForLangsContainer} ${color ? "border-[--font-color-secundary]" : "border-[--font-color-primary]"} `}
    >
      {children}
    </div>
  );
}
