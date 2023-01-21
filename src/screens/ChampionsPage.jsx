import Champions from "../componets/Champions";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getChampions } from "../services/champions.js";
import '../App.css'

export default function ChampionsPage() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    fetchChampions();
  }, []);

  let { id } = useParams()

  async function fetchChampions() {
    try {
      const allChampions = await getChampions(id);
      setChampions(allChampions);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="champions-page">
      <h1>Champions</h1>
      {champions.map((championData) => (
        <Champions className="champion-card" champion={championData} key={championData.name} />
      ))}
    </div>
  );
}
