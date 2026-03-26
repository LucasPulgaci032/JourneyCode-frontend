import axios from "axios";
import { useState , useEffect} from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa"
import { useAppContext } from "../../Context/ContextProvider";


export function TopicCompleted({topicId, roadmapId, initialValue}) {
 
 
  const {color, token}  = useAppContext()

  const [completed, setCompleted] = useState(initialValue);

   useEffect(() => {
    setCompleted(initialValue);  
  }, [initialValue])

  const handleComplete = async () => {
    const newValue = !completed;
   
   console.log("PROPS:", { roadmapId, topicId });
     if (!roadmapId || !topicId) {
    console.error("roadmapId ou topicId ausentes!",{roadmapId, topicId});
    return;
  }

  try {
    const res = await axios.patch(
      `http://192.168.0.200:3000/userProgress`,
      { roadmap: roadmapId, topic: topicId, isCompleted: newValue },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    
    const updatedCompleted = res.data.isCompleted

    setCompleted(updatedCompleted);

    if (updatedCompleted) {
    await axios.patch(
    `http://192.168.0.200:3000/users/saveRoadmap`,
    { roadmapId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
   
   
    }
    console.log("Tópico atualizado:", res.data);
  } catch (error) {
    console.error("Erro ao atualizar tópico:", error);
  }
  };

 
 
  return (
    <button className="p-3 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300" onClick={ handleComplete}>
      {completed && color ? (
        <FaCheckCircle
        className="text-green-500"/>
      ) : completed && !color ? (
        <FaCheckCircle 
        className="text-green-800"/>
      ) : !completed && color ? (
        <FaRegCircle
        className="text-red-500"/>
      ) : (
        <FaRegCircle className="text-red-800"/>
      )}
      
    </button>
  );
}

{
  /*um componente (TopicCompleted) carrega com ele não só o que vai ser renderizado, mas também a função */
}
