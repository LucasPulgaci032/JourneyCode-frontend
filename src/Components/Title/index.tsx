import { ReactNode } from "react";

type Title = {
  children : ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>


function Title({ children, ...props } : Title) {
  return <h1 {...props}>{children}</h1>;
}

export default Title;
