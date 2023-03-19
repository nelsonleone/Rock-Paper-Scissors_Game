import { FC } from "react";

type Props = {
   gameLogo: string,
   score:number
}

export default function Header({gameLogo,score}:Props){ 
 return(
   <header className="header">
      <div>
         <h1 className="AT_only">Rock Paper Scissors Game</h1>
         <img src={gameLogo} alt="logo" />
         <div className="score-container">
            <span>Score</span>
            <h2>{score}</h2>
         </div>
      </div>
   </header>
 )
}

(Header as FC).propTypes = {}