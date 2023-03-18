import { FC, ReactNode, useContext, useEffect, useState } from "react";
import { Context } from "../appContext/context";
import { GAME_CHARACTERS, WINNEROPTIONS } from "../Enums";
import { setRestartGame, setUpdatedScore } from "../utils/contextFunctions";
import winnerAnalyzer from "../utils/winnerAnalyzer";
import GameCharacter from "./GameCharacter";

export default function Stage():JSX.Element{
 
   const { playersChoice, AIchoice, showResult , dispatch} = useContext(Context)
   const [winner,setWinner] = useState<string>(winnerAnalyzer(playersChoice,AIchoice))

   useEffect(() => {
      if(!showResult)return;
      
      setWinner(winnerAnalyzer(playersChoice,AIchoice))
   },[showResult])

   useEffect(() => {
      if(winner === WINNEROPTIONS.PLAYER){
         setUpdatedScore(dispatch,1)
         console.log("yh")
      }
      else if(winner === WINNEROPTIONS.COMPUTER){
      setUpdatedScore(dispatch,-1)
      }
   },[winner])

   return(
      <div className="stage">
         <div className={showResult ? "chosen-characters add-basis" : "chosen-characters"}>
            <div className="playersChoice">
               <GameCharacter 
                 characterName={playersChoice} 
                 isWinner={winner === WINNEROPTIONS.PLAYER ? "isWinner" : ""} 
               />
               <h3>YOU PICKED</h3>
            </div>
            <div>
               {
                  AIchoice ?
                     <>
                        <GameCharacter 
                           characterName={AIchoice} 
                           isWinner={winner === WINNEROPTIONS.COMPUTER ? "isWinner" : ""} 
                         />
                        <h3>THE HOUSE PICKED</h3>
                     </>
                  :
                  <div className="placeholder-bg"></div>
               }
            </div>
         </div>
         {
            showResult &&
            <div className="winner-anouncement">
               <h1>
                  {
                     winner === WINNEROPTIONS.COMPUTER ?
                     "YOU LOSE"
                     :
                     winner === WINNEROPTIONS.PLAYER ?
                     "YOU WIN"
                     :
                     winner === WINNEROPTIONS.TIE ?
                     "TIE"
                     :
                     ""
                  }
               </h1>
               <button className="play-again-btn" onClick={() => setRestartGame(dispatch)}>Play again</button>
            </div>
         }
      </div>
   )
}