import axios from "axios"
import { useEffect, useState } from "react"
import jwtDecode from "jwt-decode";
import { languages } from "../../Components/RoadmapCardsArray";
import { Card } from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import {styleForRoadmapCardsLink } from "../../Styles/styles"
import Title from "../../Components/Title";
import { LangTitle } from "../../RoadmapComponents/LangTitle";

export function MyRoadmapsPage() {
  const[roadmaps, setRoadmaps] = useState([])
 
  const token = localStorage.getItem("token")
  const decoded = jwtDecode(token)
  console.log(decoded)
  useEffect(() =>{
   const findUserRoadmaps = async() => {
   const user = await axios.get(`http://192.168.0.200:3000/users/${decoded.id}`,{
      headers : {Authorization : `Bearer ${token}`}
    })

   
    setRoadmaps(user.data.roadmaps)
  }

  findUserRoadmaps()
},[])
  return (
    <div className="flex flex-col gap-10 mx-auto w-full max-w-md md:max-w-2xl lg:max-w-4xl border-2 border-blue-400 p-20">
      <LangTitle>Meus Roadmaps</LangTitle>
    {languages.filter(item => roadmaps.includes(item.id)).map((item) => {
      const Icon = item.logo
      return(
     <Card key={item.id}>
          <h2>{item.name}</h2>
          <Icon className="text-5xl"/>
          <p className="p-2">{item.description}</p>
          <Link className={styleForRoadmapCardsLink} to={`/roadmaps/${item.path}`}>
            Continuar estudos
          </Link>
        </Card>
    )})}
     </div>
  )
}
