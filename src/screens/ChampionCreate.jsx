import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createChampion } from "../services/champions.js";

export default function ChampionCreate() {
  const [champion, setChampion] = useState({
    name: "",
    title: "",
    blurb: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdChampion = await createChampion(champion);
    navigate(`/champions/${createdChampion.id}` , { replace: true });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setChampion((prev) => ({
      ...prev,
      [name]: value
    }))
  };

  return (
    <div>
      <h1>Champion Create Screen</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please insert your Name"
          name="name"
          value={champion.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={champion.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="About Champion"
          name="blurb"
          value={champion.blurb}
          onChange={handleChange}
        />
        
        <button type="submit">Create Your Character!!!</button>
      </form>
    </div>
  );
}


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createChampion } from "../services/champions.js";

// export default function ChampionCreate() {
//   const [champion, setChampion] = useState({
//     // _id: "",
//     name: "",
//     title: "",
//     blurb: "",
//   });


//   let navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createChampion(champion);
//     navigate(`/champions/${champion.id}` , { replace: true });
//   };

//   const handleChange = (e) => {
//     const { value, name } = e.target;
//     console.log(name, value)

//     setChampion((prev) => ({
//       ...prev,
//       [name]: value
//     }))
//   };

//   return (
//     <div>
//       <h1>Champion Create Screen</h1>
//       <form className="create-form" onSubmit={handleSubmit}>
//         {/* <input
//           type="text"
//           placeholder="Please insert your ID"
//           name="_id"
//           value={champion.id}
//           onChange={handleChange}
//         /> */}
//         <input
//           type="text"
//           placeholder="Please insert your Name"
//           name="name"
//           value={champion.name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Title"
//           name="title"
//           value={champion.title}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="About Champion"
//           name="blurb"
//           value={champion.blurb}
//           onChange={handleChange}
//         />
        
//         <button type="submit">Create Your Character!!!</button>
//       </form>
//     </div>
//   );
// }