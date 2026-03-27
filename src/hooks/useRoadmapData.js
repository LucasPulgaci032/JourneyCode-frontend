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
          `https://journeycode-api-production.up.railway.app/roadmaps/lang?name=${name}`
        );
        const roadmapData = await resRoadmap.json();

        const resTopic = await fetch(
          `https://journeycode-api-production.up.railway.app/newTopics/roadmap?roadmapName=${name}`
        );
        const topicData = await resTopic.json();
       
        const resCode = await axios.get(`https://journeycode-api-production.up.railway.app/codetopics/${roadmapData._id}`)
       
        const token = localStorage.getItem("token");
        const resProgress = await axios.get(
          `https://journeycode-api-production.up.railway.app/userProgress/roadmap/${roadmapData._id}`,
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