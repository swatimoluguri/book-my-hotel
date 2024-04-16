import React, { useState, useEffect } from "react";
import chikmagalur from "../assets/chikmagalur.JPG";
import hampi from "../assets/hampi.JPG";
import goa from "../assets/goa.JPG";
import jibhi from "../assets/jibhi.JPG";
import coorg from "../assets/coorg.JPG";
import munnar from "../assets/munnar.JPG";

const Suggestions = () => {
  const month = new Date().getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const quotes = [
    "“To speak a language is to take on a world, a culture.” – Frantz Fanon",
    "“To travel is to evolve.” – Pierre Bernardo",
    "“Oh, the places you’ll go!” – Dr Seuss",
    "“A good traveler has no fixed plans, and is not intent on arriving.” – Lao Tzu",
    "“I haven’t been everywhere, but it’s on my list.” – Susan Sontag",
    "“One’s destination is never a place, but a new way of seeing things.” – Henry Miller",
    "“Nothing develops intelligence like travel.” – Emile Zola",
    "“Take only memories, leave only footprints.” – Chief Seattle",
    "“Once a year, go someplace you’ve never been before.” – Dalai Lama",
    "“Traveling is not something you’re good at. It’s something you do.” – Gayle Forman",
    "“To travel is to live.” – Hans Christian Andersen",
    "“The world is a book, and those who do not travel only read a page.” – St. Augustine",
    "“I met a lot of people in Europe. I even encountered myself.” – James Baldwin",
    "“Not all those who wander are lost.” – JRR Tolkien",
    "“One must travel to learn.” – Mark Twain",
    "“We travel not to escape life, but for life not to escape us.” – Anonymous",
    "“People don’t take trips, trips take people.” – John Steinbeck",
    "“Travel is fatal to prejudice, bigotry, and narrow-mindedness.” – Mark Twain",
    "“Travel is the only thing you buy that makes you richer.” – Anonymous",
    "“If you don’t know where you’re going, any road will get you there.” – Lewis Carroll",
    "“See the world. It’s more fantastic than any dream.” – Ray Bradbury",
    "“A traveler without observation is a bird without wings.” – Moslih Eddin Saadi",
    "“Only one who wanders finds new paths.” – Norwegian proverb",
    "“The further I go, the closer to me I get.” – Andrew McCarthy",
    "“Live, travel, adventure, bless, and don’t be sorry.” Jack Kerouac",
    "“Who lives sees much. Who travels sees more.” – Arab Proverb",
    "“If you think adventure is dangerous try routine. It is lethal.” – Paulo Coelho",
    "“Travel teaches tolerance” – Benjamin Disraeli",
    "“Investment in travel is an investment in yourself.” – Matthew Karsten",
    "“Adventure is worthwhile.” – Aristotle",
    "“Life is either a daring adventure or nothing.” – Helen Keller",
    "“A journey is best measured in friends rather than miles.” – Tim Cahill",
  ];
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIn(true);
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setSlideIn(false);
      }, 5000);
    }, 5500);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="suggestions" >
      <h2 className="headingSuggestions">Where to go in {monthNames[month]}?</h2>
      <i className={`text ${slideIn ? "slide-in" : ""}`}>
        {quotes[currentQuoteIndex]}
      </i>
      <div className="photoGrid">
        <div className="photoGridItem">
          <img className="photoGridImg" src={chikmagalur} alt="chikmagalur"></img>
          <div className="imageTitleContainer">
            <h2 className="imageTitle">CHIKMAGALUR</h2>
          </div>
        </div>
        <div className="photoGridItem">
          <img className="photoGridImg" src={hampi} alt="hampi"></img>
          <div className="imageTitleContainer">
            <h2 className="imageTitle">HAMPI</h2>
          </div>
        </div>
        <div className="photoGridItem">
          <img className="photoGridImg" src={goa} alt="goa"></img>
          <div className="imageTitleContainer">
            <h2 className="imageTitle">GOA</h2>
          </div>
        </div>
        <div className="photoGridItem">
          <img className="photoGridImg" src={jibhi} alt="jibhi"></img>
          <div className="imageTitleContainer">
            <h2 className="imageTitle">JIBHI</h2>
          </div>
        </div>
        <div className="photoGridItem">
          <img className="photoGridImg" src={coorg} alt="coorg"></img>
          <div className="imageTitleContainer">
            <h2 className="imageTitle">COORG</h2>
          </div>
        </div>
        <div className="photoGridItem">
          <img className="photoGridImg" src={munnar} alt="munnar"></img>
          <div className="imageTitleContainer">
            <h2 className="imageTitle">MUNNAR</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
