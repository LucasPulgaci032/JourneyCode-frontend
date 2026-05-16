
import { useAppContext } from "../../Context/ContextProvider";
import { styleForCard } from "../../Styles/styles";

export function Card({ children }) {

  const {color} = useAppContext()

  return <div className={`${styleForCard} `}>{children}</div>;
}
