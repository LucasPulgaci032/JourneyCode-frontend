
import { IconType } from "react-icons/lib";
import {
  IoLogoJavascript,
  FaPython,
  FaJava,
} from "../Icons/exportIcons.js";


type RoadmapLanguage = {
 id: string,
 name: string,
 logo: IconType,
 description: string,
 path: string
}

export const languages : RoadmapLanguage[] = [
  {
    id:  "68ee9d8540175f37a20ea49e",
    name: "Roadmap JavaScript",
    logo: IoLogoJavascript ,
    description: "A linguagem que domina a web",
    path: "JavaScript",
  },

  {
    id: "68e97daa0211a5eccfa21a0a",
    name: "Roadmap Python",
    logo: FaPython ,
    description: "A linguagem que domina data science",
    path: "Python",
  },

  {
    id: "68f6c9ea0d463ee572be61c3",
    name: "Roadmap Java",
    logo: FaJava ,
    description: "A linguagem que move o mundo corporativo ",
    path: "Java",
  },
];