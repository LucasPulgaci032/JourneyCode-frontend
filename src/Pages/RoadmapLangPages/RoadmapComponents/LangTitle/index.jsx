import { stylesForLangTitle } from "../../../../Styles/styles";

export function LangTitle({ children }) {
  return <h1 className={stylesForLangTitle}>{children}</h1>;
}
