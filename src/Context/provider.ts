import { createContext } from "react";


export type ContextType = {
    color: String;
    changeColor : () => void
}

export const Provider = createContext<ContextType | null>(null);
