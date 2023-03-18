import { FC } from "react";

type Props = {
   gameLogo: string,
   score:number
}

export default function Header({gameLogo,score}:Props){ 
 return(
   <header className="header">
      <div>
         <img src={gameLogo} alt="logo" />
         <div className="score-container">
            <span>Score</span>
            <h3>{score}</h3>
         </div>
      </div>
   </header>
 )
}

(Header as FC).propTypes = {}