import { Dispatch, FC, useContext } from "react"
import { Context } from "../appContext/context"
import { Actions } from "../appContext/contextTypes"
import { GAME_CHARACTERS, GAME_MODE } from "../Enums"
import { setPlayerChoice } from "../utils/contextFunctions"





export default function CharactersDisplay(){

   const { gameMode } = useContext(Context)

   return(
      <div className="characters-display">
         {
            gameMode === GAME_MODE.advanced 
            ?
            <AdvancedCharacters />
            :
            <BasicCharacters />
         }
      </div>
   )
}

const BasicCharacters: FC = () =>{

   const { dispatch} = useContext(Context)

   return(
      <div className="basic-characters-container">
         <div onClick={() => setPlayerChoice(dispatch,GAME_CHARACTERS.PAPER)}>
            <img src="/images/icon-paper.svg" alt="paper" />
         </div>
         <div onClick={() => setPlayerChoice(dispatch,GAME_CHARACTERS.SCISSORS)}>
            <img src="/images/icon-scissors.svg" alt="scissors" />
         </div>
         <div onClick={() => setPlayerChoice(dispatch,GAME_CHARACTERS.ROCK)}>
            <img src="/images/icon-rock.svg" alt="rock" />
         </div>
      </div>
   )
}

const AdvancedCharacters : FC = () =>{

   const { dispatch} = useContext(Context)

   return(
      <div className="advanced-characters-container">
         <div onClick={() => setPlayerChoice(dispatch,GAME_CHARACTERS.SPOCK)} >
            <img src="/images/icon-spock.svg" alt="Spock" />
         </div>
         <div onClick={() => setPlayerChoice(dispatch,GAME_CHARACTERS.SCISSORS)} >
            <img src="/images/icon-scissors.svg" alt="Scissors" />
         </div>
         <div onClick={() => setPlayerChoice(dispatch,GAME_CHARACTERS.PAPER)} >
            <img src="/images/icon-paper.svg" alt="paper" />
         </div>
         <div onClick={() => setPlayerChoice(dispatch,GAME_CHARACTERS.LIZARD)} >
            <img src="/images/icon-lizard.svg" alt="Lizard" />
         </div>
         <div onClick={() => setPlayerChoice(dispatch,GAME_CHARACTERS.ROCK)} >
            <img src="/images/icon-rock.svg" alt="Rock" />
         </div>
      </div>
   )
}

