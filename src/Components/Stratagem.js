import React, { useState } from "react";
import "./stratagem.css"

const stratagems = [
     {
          id: 1,
          name: "REINFORCE",
          sequence: ['W', 'S', 'D', 'A', 'W'],
     },
     {
          id: 2,
          name: "RESUPPLY",
          sequence: ['S', 'S', 'W', 'D'],
     },
     // add more
]

const Stratagem = () => {
     const [currentStratagemIndex, setCurrentStratagemIndex] = useState(0)
     const [inputValue, setInputValue] = useState("")

     const currentStratagem = stratagems[currentStratagemIndex]

     const handleInputChange = (e) => {
          setInputValue(e.target.value.toUpperCase())
          
          if (e.target.value.toUpperCase() === currentStratagem.sequence.join('')) {
               setTimeout(() => {
                    setInputValue('')
                    setCurrentStratagemIndex(currentStratagemIndex + 1)
               }, 1000)
          }
     }

     return (
          <div className="container">
               <div className="nav">
                    <h1>HELLDIVERS 2™ Stratagem Practice</h1>
               </div>

               <div className="selection">
                    {stratagems.map(stratagem => (
                         <div key={stratagem.id} className={currentStratagem.id === stratagem.id ?  'active' : ''}>
                              {stratagem.name}
                         </div>
                    ))}
               </div>

               <div class="game" id="gameArea">
                    <div className="input-card">
                         <input type="text" value={inputValue} onChange={handleInputChange} />
                         {inputValue !== currentStratagem.sequence.join('') && inputValue.length > 0 &&  (
                              <div className="try-again">Try again soldier</div>
                         )}
                    </div>
               </div>

               <div class="strat-display" id="strat-display">
                    {currentStratagem.name}
               </div>
          </div>
     )
}

export default Stratagem;