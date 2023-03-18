import { GAME_CHARACTERS } from "../Enums";

export class Character{
   choice:string;

   constructor(choice:string){
      this.choice = choice
   }

   constructCharacter(): string[]{
      switch (this.choice) {
         case GAME_CHARACTERS.ROCK:
            return ["/images/icon-rock.svg","rock-character"]
         break;
         case GAME_CHARACTERS.SCISSORS:
            return ["/images/icon-scissors.svg","scissors-character"]
         break;
         case GAME_CHARACTERS.PAPER:
            return ["/images/icon-paper.svg","paper-character"]
         break;
         case GAME_CHARACTERS.LIZARD:
            return ["/images/icon-lizard.svg","lizard-character"]
         break;
         case GAME_CHARACTERS.SPOCK:
            return ["/images/icon-spock.svg","spock-character"]
         break;
         default:
            return ["",""]
         break;
      }
   }
}