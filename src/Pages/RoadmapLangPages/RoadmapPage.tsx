
import { useParams } from "react-router-dom";
import {
  LangsContainer,
  LangTitle,
  LangDescription,
  LangTopics,
  TopicsTitle,
} from "./RoadmapComponents/exports.js";
import ReactMarkdown from "react-markdown";
import { classJava } from "./StaticCodeContent/JavaCodeContent.ts";
import { SectionCode } from "./RoadmapComponents/SectionCode/SectionCode.jsx";
import { ToggleSectionCode } from "../../Components/ToggleSectionCode/ToggleSectionCode.js";
import { TopicCompleted } from "../../Components/TopicCompleted/index";
import { useRoadmapData } from "../../hooks/useRoadmapData.js";


export function RoadmapGeneric() {
  const { name } = useParams();

  const { 
    status,
    error,
    data,
    topics,
    progress,
    code} = useRoadmapData(name)
  
  if (status === "loading")
    return <p className="text-4xl text-center mt-[10%]">carregando...</p>;
  if (error) return <p className="text-4xl text-center mt-[10%]">erro</p>;

  const javaClass = name == "Java" ? classJava : null;

  const topicName = [
    "Variáveis",
    "Tipos de dados",
    "Operadores",
    name === "Python" ? "Objetos, Arrays e Dicionários" : "Objetos e Arrays",
    "Loopings",
    "Estruturas de decisão",
    name === "Java" ? "Classes e métodos" : "Funções",
  ];

 
  if (!data) return <p>Item não encontrado</p>;

  return (
    <LangsContainer>
      <LangTitle>{data.name}</LangTitle>
      <LangDescription>{data.description}</LangDescription>
      {javaClass ? (
        <SectionCode>
          <ReactMarkdown>{javaClass}</ReactMarkdown>
        </SectionCode>
      ) : null}

     {

 

     topics.map((topicItem,idx) => {
    
       const codes = code.filter(item => item.topic.toString() === topicItem._id.toString()) //responsavel por relacionar topico e codigo dentro do map por id de topico
       
      if (!topicItem) return null;
       const topicProgress = progress.find(p => p.topic === topicItem._id)?.isCompleted || false;
      return(
        
         <div
          className="flex flex-col gap-8 w-full"
          key={topicItem._id}
        >
          <TopicsTitle>{topicName[idx]}</TopicsTitle>
         
         
          
             <LangTopics>{topicItem.content}</LangTopics>

             {codes.map((item) => (
             <SectionCode key={topicItem._id}>
                {topicName[idx]}
                <ToggleSectionCode code={item.code} idx={idx}/>
             </SectionCode>
             ))}
            <section className="flex flex-row justify-between bg-blue-100 p-2"> 
              <p className="text-xl mt-1 text-blue-800">Concluir tópico</p>
              <TopicCompleted   //botão que recebe via props id de topico, id de roadmap e valor do progresso (concluído ou não)
          topicId={topicItem._id}    
           roadmapId={topicItem.roadmap._id}
          initialValue={topicProgress}
          />
          </section>
        </div>
      )
     })
  }
    </LangsContainer>
  );
}

