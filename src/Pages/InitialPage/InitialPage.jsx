import Title from "../../Components/Title";
import Description from "./InitialComponents/Description";
import { HowToUse, LinesHTU } from "./InitialComponents/HowUse";
import { RoadmapCards } from "./InitialComponents/RoadmapCards";
import { InitialCard } from "../InitialCardPage/card";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useAppContext } from "../../Context/ContextProvider";

export default function StartComponents() {
  const {color} = useAppContext()
  const [userName, setUserName] = useState("")

  useEffect(() => {
  
     const token = localStorage.getItem('token')
        if (token) {
      try {
        const decoded = jwt_decode(token);
        console.log(decoded)
        setUserName(decoded.name);
        
      } catch (err) {
        console.error("Erro ao decodificar token:", err);
      }
    }

  },[])


  return (
    <div className={`flex flex-col mb-10 gap-10 text-center w-full p-6 space-y-4`}>
      <header
        className="flex flex-col 
            w-full 
            rounded-md
            bg-gradient-to-r from-blue-500 to-blue-900
            min-w-[90%]
            p-2
           "
            
      >
        <Title className={`text-stroke font-bold tracking-widest self-start text-4xl p-6 text-blue-300 `}>
          JourneyCode
        </Title>  
      </header>
      <p className={`font-bold text-5xl text-stroke p-4 border-b
        ${color ? "border-white/50" : "border-blue-400"} `}>
        {userName && `Olá, ${userName} !`}
      </p>

      <HowToUse>
      <LinesHTU>
          Escolha sua linguagem, siga o roadmap e Perceba sua evolução.
      </LinesHTU>
      </HowToUse>
       <Title className={`text-stroke font-bold tracking-widest self-start text-4xl p-6 text-blue-500 `}>
          Roadmap para lógica de programação
        </Title>  
      <InitialCard />
      <Title className={`text-stroke font-bold tracking-widest self-start text-4xl p-6 text-blue-500 `}>
          Roadmaps de linguagens de programação
        </Title>  
      <RoadmapCards />
    </div>
  );
}
