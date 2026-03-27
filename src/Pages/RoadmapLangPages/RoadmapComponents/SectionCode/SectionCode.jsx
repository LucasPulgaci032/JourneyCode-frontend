import { useContext } from "react";
import { stylesForDivCode1, stylesForDivCode2 } from "../../../../Styles/styles";
import { useAppContext } from "../../../../Context/ContextProvider";

export function SectionCode({ children, ...props }) {
  const { color } = useAppContext();
  return (
    <section
      className={color ? stylesForDivCode1 : stylesForDivCode2}
      {...props}
    >
      {children}
    </section>
  );
}
