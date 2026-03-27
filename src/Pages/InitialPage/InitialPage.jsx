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
    <div className={`flex flex-col mb-10 gap-10 text-center w-full`}>
      <header
        className="flex flex-col 
            h-1/2
            gap-4 
            bg-gradient-to-r from-blue-200 to-blue-900
            
            rounded-md
            animate-glow
            min-w-[90%]
            p-4
            "
      >
        <Title className="text-[--font-color-title] font-[Orbitron] font-bold tracking-widest self-center text-3xl">
          JourneyCode
        </Title>  
      </header>
      <p className="font-bold text-5xl">{userName && `Olá, ${userName} !`}</p>
      <Description justifyStart>
        Aprenda, progrida e conquiste: roadmaps claros para cada linguagem
        essencial.
      </Description>

      <HowToUse>
        <LinesHTU>Escolha sua linguagem</LinesHTU>
        <LinesHTU>Siga o roadmap</LinesHTU>
        <LinesHTU>Perceba sua evolução.</LinesHTU>
      </HowToUse>
      <section className={`w-full p-10 ${color ? "bg-blue-400" : "bg-blue-700"}`}>
      <InitialCard />
      </section>
      <Description>
        Escolha a linguagem e siga seu roadmap de estudos passo a passo.
      </Description>
      <RoadmapCards />
    </div>
  );
}
