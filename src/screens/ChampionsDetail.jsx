import { useState, useEffect } from "react";
import { deleteChampion, getChampion, getChampions } from "../services/champions.js";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function ChampionDetail() {
  const [ champion, setChampion ] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchChampion();
  }, []);

  async function fetchChampion() {
    let oneChamp = await getChampion(id);
    setChampion(oneChamp);
  }

  async function handleDelete() {
    await deleteChampion(id);
    navigate("/champions", { replace: true });
  }

  return (
    <div className="champion-detail">
      <h2>{champion.name}</h2>
      <p>{champion.title}</p>
      <p>{champion.blurb}</p>
      
      <button className="delete-button" onClick={handleDelete}>Destroy Champ!</button>
    </div>
  );
}





// import { useState, useEffect } from "react";
// import { deleteChampion, getChampion, getChampions } from "../services/champions.js";
// import { Link, useParams, useNavigate } from "react-router-dom";


// export default function ChampionDetail() {
//   //const [champion, setChampion] = useState({});
//   const [ oneChamp, setOneChamp] = useState({})

//   let { id } = useParams();
//   let navigate = useNavigate();

//   useEffect(() => {
//     fetchChampion();
//   }, []);

//   async function fetchChampion() {
//     let oneChamp = await getChampion(id);
//     setOneChamp(oneChamp);

//     console.log(oneChamp)
//   }

//   async function handleDelete() {
//     await deleteChampion(id);
//     navigate("/champions", { replace: true });
//   }

//   return (
//     <div>
//       <h2>{oneChamp.name}</h2>
//       <p>{oneChamp.title}</p>
//       <p>{oneChamp.blurb}</p>
      
//       <button onClick={handleDelete}>Destroy Champ!</button>
//     <div>
     
        
//       </div>
//     </div>
    
//   );
// }