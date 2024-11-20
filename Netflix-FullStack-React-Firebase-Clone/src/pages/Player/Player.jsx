// import React, { useEffect, useState } from 'react'
// import "./Player.css"
// import back_arrow_icon from "../../assets/back_arrow_icon.png"
// const Player = () => {

//   const [ApiData, setApiData] = useState({
//     name: "",
//    id: "",

//     published_at: "",
//     type: ""
//   });


//   useEffect(() => {
  
//       fetch(url, options)
//         .then((response) => response.json())
//         .then((response) => setApiData(response.results))
//         .catch((err) => console.error(err));
// })




//   return (
//     <div className="player">
//       <img src={back_arrow_icon} alt="" />
//       <iframe
//         width="90%"
//         height="90%"
//         src={`https://www.youtube.com/embed/${ApiData.key}`}
//         title="trailer"
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>
//       <div className="player_info">
//         <p>{ApiData.published_at}</p>
//         <p>{ApiData.name}</p>
//         <p>{ApiData.type}</p>
//       </div>
//     </div>
//   );
// }

// export default Player



//import React from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })




  useEffect(()=>{
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  },[])

  return (
    <div className="player">
      <img src={back_arrow} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player_info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
