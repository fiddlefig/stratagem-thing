import React, { useState } from "react";
import "./stratagem.css"

const Stratagem = () => {
     const [stratIndex, setStratIndex] = useState(0);
     const [inputSequence, setInputSequence] = useState("")
     const [message, setMessage] = useState("")

     const stratgems = [
          {
               sequence: "wsdaw",
               name: "Reinforce",
               arrows: "🡅 🡇 🡆 🡄 🡅"
          },
     ]

     const handleInputChange = (event) => {
          setInputSequence(event.target.value);
     }

     const checkSequence = () => {
          if (inputSequence === stratgems[stratIndex].sequence) {
               if (stratIndex === stratgems.length - 1) {
                    setMessage("Correct!")
                    setStratIndex(0)
               } else {
                    setStratIndex(stratIndex + 1)
                    setInputSequence("")
                    setMessage("")
               }
          } else {
               setMessage("Try again!")
          }
     }

     return (
          <div className="container">
               <div className="nav">
                    <h1>HELLDIVERS 2™ Stratagem Practice</h1>
               </div>

               <div className="selection">
                    <span className="strat" id="btn1">Reinforce | <span id="s1">&#129093; &#129095; &#129094; &#129092; &#129093;</span> </span>
                    <span class="strat" id="btn2">Test | <span id="s2">&#129093;</span></span>
                    <span class="strat">This is a strat</span>
               </div>

               <div class="game" id="gameArea">
                    <p>{stratgems[stratIndex].sequence}</p>
                    <input type="text" value={inputSequence} onChange={handleInputChange} />
                    <button onClick={checkSequence}>Check</button>
                    <p>{message}</p>
               </div>

               <div class="strat-display" id="strat-display">
                    <span>{stratgems.sequence}</span>
               </div>
          </div>
     )
}

export default Stratagem;