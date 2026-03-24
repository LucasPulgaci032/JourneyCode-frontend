
import { styleForCard } from "../../Styles/styles";

export function Card({ children }) {
  return <div className={styleForCard}>{children}</div>;
}
