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

//   const url = "https://api.themoviedb.org/3/movie/912649/videos?language=en-US";
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDI2NjRjMDc5ZTU3ZTFmZTdjZTQ1M2Y4ZDY0MzIwOSIsIm5iZiI6MTczMTc2MzYxNy44NDYyNjY1LCJzdWIiOiI2NzM0ZjAyNTY4MDgzZDA1NDA4YTA3NGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1jsFhxS3cQQx3x4zQ3FWethswTUZE-FmQndYv3WYwvM",
//     },
//   };

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



  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDI2NjRjMDc5ZTU3ZTFmZTdjZTQ1M2Y4ZDY0MzIwOSIsIm5iZiI6MTczMTc2MzYxNy44NDYyNjY1LCJzdWIiOiI2NzM0ZjAyNTY4MDgzZDA1NDA4YTA3NGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1jsFhxS3cQQx3x4zQ3FWethswTUZE-FmQndYv3WYwvM",
    },
  };
  
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