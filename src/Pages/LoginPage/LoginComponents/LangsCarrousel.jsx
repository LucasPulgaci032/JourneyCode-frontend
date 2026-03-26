import { IoLogoJavascript } from "react-icons/io";
import { FaPython, FaJava } from "react-icons/fa";
import { useAppContext } from "../../../Context/ContextProvider";

const logos = [IoLogoJavascript,FaPython, FaJava]


export function LangsCarrousel(){
    const {color} = useAppContext()
   return(
     <section className="overflow-hidden w-full flex justify-center">
        <div className=" flex gap-10 animate-carousel w-max">
       {[...logos,...logos,...logos].map((Logo,idx)=> (
          <Logo key={idx} className={`text-4xl ${color ? " text-blue-100" : "text-blue-700"}`}/>
       ))}

       {[...logos,...logos,...logos].map((Logo,idx)=> (
          <Logo key={`dup-${idx}`} className={`text-4xl ${color ? " text-blue-100" : "text-blue-700"}`}/>
       ))}

      
         </div>   
        </section>
   )
}



