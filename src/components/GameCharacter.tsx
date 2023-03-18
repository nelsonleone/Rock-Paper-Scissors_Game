import { WINNEROPTIONS } from "../Enums"
import { Character } from "../utils/gameCharacterConstructor"

export default function GameCharacter({characterName,isWinner}:{characterName:string,isWinner:string}){
 
   const gameCharacterConstructor = new Character(characterName)
   const [imageSrc,className] = gameCharacterConstructor.constructCharacter()


  return(
      <div 
        className={`character ${className} ${isWinner}`}
        >
         <img src={imageSrc} alt={characterName}  />
      </div>
  )
}