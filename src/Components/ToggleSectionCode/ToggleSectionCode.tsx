import { ButtonHTMLAttributes, useContext } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "../../Icons/exportIcons.js";
import { ThemeProvider } from "../../Context/ContextProvider.jsx";
import ReactMarkdown from "react-markdown";



type CodeProps = {
  code : string,
  
}

type ToggleArrowProps = {
  isOpen?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ToggleSectionCode({ code } : CodeProps) {
  return (
    <section className="flex flex-col gap-4 w-full max-w-md ">
  
     
      {code == null ? <h1>null</h1> : <ToggleSection code={code} />}
    </section>
  );
}

export function ToggleSection({ code } : CodeProps) {
  const { toggleSection, hiddenSection } = useContext(ThemeProvider);

  if (code.length >= 500) {
    return (
      <>
        <ToggleArrow 
          onClick={() => toggleSection(code)}
          isOpen={hiddenSection === code}
        />
        {hiddenSection === code && <ReactMarkdown>{code}</ReactMarkdown>}
      </>
    );
  }
  return (
    <>
      <ReactMarkdown>{code}</ReactMarkdown>
    </>
  );
}

export function ToggleArrow({ onClick, isOpen } : ToggleArrowProps) {
  return (
    <button className="self-end text-3xl hover:text-4xl" onClick={onClick}>
      {isOpen ? (
        <IoIosArrowUp />
      ) : (
        <IoIosArrowDown />
      )}
    </button>
  );
}
