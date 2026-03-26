import { ButtonHTMLAttributes } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "../../Icons/exportIcons.js";
import { useAppContext } from "../../Context/ContextProvider.jsx";
import ReactMarkdown from "react-markdown";



type CodeProps = {
  code : string,
  idx: number
  
}

type ToggleArrowProps = {
  isOpen?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ToggleSectionCode({ code, idx } : CodeProps) {
  return (
    <section className="flex flex-col gap-4 w-full max-w-md justify-center ">
  
     
      {code == null ? <h1>null</h1> : <ToggleSection code={code} idx={idx} />}
    </section>
  );
}

export function ToggleSection({ code, idx } : CodeProps) {
  const { toggleSection, hiddenSection } = useAppContext()

  if (code.length >= 500) {
    return (
      <section className="flex flex-col w-full gap-10  ">
        <ToggleArrow 
          onClick={() => toggleSection(idx)}
          isOpen={hiddenSection === idx}
        />
        {hiddenSection === idx && <ReactMarkdown>{code}</ReactMarkdown>}
      </section>
    );
  }
  return (
    <section className="flex flex-col w-full gap-10">
      <ReactMarkdown>{code}</ReactMarkdown>
    </section>
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
