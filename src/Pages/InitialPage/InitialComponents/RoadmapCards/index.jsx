import {
  IoLogoJavascript,
  FaPython,
  FaJava,
} from "../../../../Icons/exportIcons";
import { Link } from "react-router-dom";
import {
  styleForCard,
  styleForRoadmapCardsLink,
} from "../../../../Styles/styles";
import { useAppContext } from "../../../../Context/ContextProvider";

const languages = [
  {
    id: 1,
    name: "Roadmap JavaScript",
    logo: <IoLogoJavascript />,
    description: "A linguagem que domina a web",
    path: "JavaScript",
  },

  {
    id: 2,
    name: "Roadmap Python",
    logo: <FaPython />,
    description: "A linguagem que domina data science",
    path: "Python",
  },

  {
    id: 3,
    name: "Roadmap Java",
    logo: <FaJava />,
    description: "A linguagem que move o mundo corporativo ",
    path: "Java",
  },
];

export function RoadmapCards({ ...props }) {
  const {color} = useAppContext()
  return (
    <section {...props} className="w-max flex flex-col gap-4 self-center">
      {languages.map((item) => (
        <Card key={item.id}>
          <h2 className="text-blue-300">{item.name}</h2>
          <span className="text-5xl text-blue-300">{item.logo}</span>
          <p className="p-2 text-blue-300">{item.description}</p>
          <Link className={styleForRoadmapCardsLink} to={item.path}>
            Iniciar estudos
          </Link>
        </Card>
      ))}
    </section>
  );
}

function Card({ children }) {
  return <div className={styleForCard}>{children}</div>;
}
