import { useState, useEffect } from "react";
import axios from "axios";

export function useRoadmapData(name) {
  const [state, setState] = useState({
    status: "loading",
    error: null,
    data: null,
    topics: [],
    progress: [],
    code : null
  });

  useEffect(() => {
    async function fetchLang() {
      try {
        const resRoadmap = await fetch(
          `http://localhost:3000/roadmaps/lang?name=${name}`
        );
        const roadmapData = await resRoadmap.json();

        const resTopic = await fetch(
          `http://localhost:3000/newTopics/roadmap?roadmapName=${name}`
        );
        const topicData = await resTopic.json();
       
        const resCode = await axios.get(`http://localhost:3000/codetopics/${roadmapData._id}`)
       
        const token = localStorage.getItem("token");
        const resProgress = await axios.get(
          `http://localhost:3000/userProgress/roadmap/${roadmapData._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );


        setState({
          status: "success",
          data: roadmapData,
          topics: topicData,
          progress: resProgress.data,
          code: resCode.data
        });
      } catch (err) {
        setState({
          status: "failed",
          data: null,
          error: err,
          topics: null,
          progress: null,
          code: null
        });
      }
    }

    fetchLang();
  }, [name]);

  return state;
}