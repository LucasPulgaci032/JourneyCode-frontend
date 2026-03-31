import { LangsContainer } from "../RoadmapLangPages/RoadmapComponents/Container/index.jsx";
import {
  LangDescription,
  TopicsTitle,
} from "../RoadmapLangPages/RoadmapComponents/exports.js";
import { LangTitle } from "../RoadmapLangPages/RoadmapComponents/LangTitle/index.jsx";

import ReactMarkdown from "react-markdown";
import { ToggleSection, ToggleSectionCode } from "../../Components/ToggleSectionCode/ToggleSectionCode.jsx";
import { SectionCode } from "../RoadmapLangPages/RoadmapComponents/SectionCode/SectionCode.jsx";
import { initialContent } from "./initialContent.js";
import { inicialDescription, logicAndAlgoritms } from "./text.js";
import { useAppContext } from "../../Context/ContextProvider.js";


export function InitialCardPage() {
  return (
    <LangsContainer>
      <LangTitle>Lógica de programação : conceitos iniciais</LangTitle>
      <LangDescription>{inicialDescription}</LangDescription>
      <TopicsTitle>Algoritmos e Lógica</TopicsTitle>
      <p>{logicAndAlgoritms}</p>
      {initialContent.map((item, idx) => {
        const name = Object.keys(item);
        const description = Object.values(item)[0][0];
        const code = Object.values(item)[0][1];
        return (
          <div key={idx} className="flex flex-col gap-4 w-full p-4">
            <section className="flex flex-row justify-between">
              <LangTitle>{name}</LangTitle>
            </section>
            {Array.isArray(description) ? (
              description.map((item, subIdx) => (
                <ReactMarkdown key={subIdx}>{item}</ReactMarkdown>
              ))
            ) : (
              <ReactMarkdown>{description}</ReactMarkdown>
            )}
            <SectionCode>
              <LangDescription>{Object.keys(item)}</LangDescription>
              <ToggleSectionCode code={code} idx={idx} />
            </SectionCode>
          </div>
        );
      })}
    </LangsContainer>
  );
}
