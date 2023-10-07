import React, { useRef } from "react";
import Direction from "./Direction";
import { useState } from "react";



const Card = () => {

  const Questions = ["What animal is the king of the jungle?", "What is the fastest animal in the Jungle?", "What is the tallest animal?", "What is the name of the fastest bird?", "What animal is considered humans best friend?", "What is the percentage of chimps dna to human?", "What is the only animal that can’t jump?", "What is the name of the biggest shark?", "Which bird is a symbol of peace?", "What is the collective name for a group of lions?"];

  const dict = {
    "What animal is the king of the jungle?": "Lion",
    "What is the fastest animal in the Jungle?": "Cheetah",
    "What is the tallest animal?": "Giraffes",
    "What is the name of the fastest bird?": "The peregrine falcon",
    "What animal is considered humans best friend?": "The dog",
    "What is the percentage of chimps dna to human?": 98.8,
    "What is the only animal that can’t jump?": "Elephant",
    "What is the name of the biggest shark?": "Whale Shark",
    "Which bird is a symbol of peace?": "Dove",
    "What is the collective name for a group of lions?": "Pride of lions"

  }

  const [clicks, setClicks] = useState(0);
  const [begin,setbegin] = useState(0);

  const answer =  useRef("");
  const longest_WIN = useRef(0);
  const winStreaks = useRef(0);


  const cardHandler = () => {
    
    if (clicks == 0) {
      if(begin == 0){
        return;
      }
      setClicks(clicks+1);
      var temp = document.getElementById("view").innerHTML;
      document.getElementById("view").innerHTML = dict[temp];
      console.log(document.getElementById("view").innerHTML);
    }

  }

  function bubblepreventer(event){
    event.stopPropagation()
  }

  const handleSubmit = (event) => {
    event.stopPropagation()
    const name = answer.current.value;

    if(answer.current.value!=dict[document.getElementById("view").innerHTML]){
        winStreaks.current = 0;
        document.getElementById("card").style.backgroundColor="Red"; 
    }else{
        winStreaks.current = winStreaks.current+1;
        if (winStreaks.current > longest_WIN.current){
            longest_WIN.current=winStreaks.current;
        }
        
        document.getElementById("card").style.backgroundColor="Green"; 
    }

  };

  return (
    <div id="card" className="Card" onClick={cardHandler} >
      <p id="view">Click the Start button to begin!!!!</p>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">Guess the answer:</label>

        <input id="input" onClick={bubblepreventer} type="text" ref={answer} placeholder="Enter your guess" />

        <button type="button" onClick={handleSubmit}>Submit Guess</button>
        <p>The current winStreak is {winStreaks.current}</p>
        <p>The longest winStreak is {longest_WIN.current}</p>
      </form>
      <Direction ques={Questions} ans={dict} click={setClicks} begin={setbegin}></Direction>
    </div>
  )
}

export default Card;