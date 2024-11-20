import { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
// import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({title, category }) => {
  
  const [ApiData, setApiData] = useState([]);

  const cardListRef = useRef(null); 



const url = `https://api.themoviedb.org/3/movie/${
  category ? category : "now_playing"
}?language=en-US&page=1`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDI2NjRjMDc5ZTU3ZTFmZTdjZTQ1M2Y4ZDY0MzIwOSIsIm5iZiI6MTczMTc2MzYxNy44NDYyNjY1LCJzdWIiOiI2NzM0ZjAyNTY4MDgzZDA1NDA4YTA3NGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1jsFhxS3cQQx3x4zQ3FWethswTUZE-FmQndYv3WYwvM",
  },
};







  const handleWheel = (event) => {
    event.preventDefault();
    if (cardListRef.current) {
      cardListRef.current.scrollLeft += event.deltaY; // Scroll horizontally
    }
  };

  useEffect(() => {

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
    

    const cardList = cardListRef.current;
    if (cardList) {
      cardList.addEventListener("wheel", handleWheel); // Add event listener
    }

    return () => {
      if (cardList) {
        cardList.removeEventListener("wheel", handleWheel); // Cleanup listener
      }
    };
  }, []);

  return (
    <div className="titlecards">
      <h2>{title || "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardListRef}>
        {ApiData.map((card, index) => (
          <Link to={ `/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
              alt={card.name}
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
