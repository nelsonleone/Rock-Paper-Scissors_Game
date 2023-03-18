import { GAME_CHARACTERS, WINNEROPTIONS  } from "../Enums";

export default function winnerAnalyzer(playerchoice:string,AIchoice:string): string{
  switch(playerchoice){
   case GAME_CHARACTERS.ROCK :
      if(AIchoice === GAME_CHARACTERS.SCISSORS || AIchoice === GAME_CHARACTERS.LIZARD){
         return WINNEROPTIONS.PLAYER
      }else if(AIchoice === GAME_CHARACTERS.PAPER || AIchoice === GAME_CHARACTERS.SPOCK){
        return WINNEROPTIONS.COMPUTER
      }else{
         return WINNEROPTIONS.TIE
      }
   break;

   case GAME_CHARACTERS.PAPER :
      if(AIchoice === GAME_CHARACTERS.ROCK || AIchoice === GAME_CHARACTERS.SPOCK){
        return WINNEROPTIONS.PLAYER
      }else if(AIchoice === GAME_CHARACTERS.SCISSORS || AIchoice === GAME_CHARACTERS.LIZARD){
         return WINNEROPTIONS.COMPUTER
       }else{
         return WINNEROPTIONS.TIE
       }
   break;

   case GAME_CHARACTERS.SCISSORS :
      if(AIchoice === GAME_CHARACTERS.PAPER || AIchoice === GAME_CHARACTERS.LIZARD){
        return WINNEROPTIONS.PLAYER
      }else if(AIchoice === GAME_CHARACTERS.ROCK || AIchoice === GAME_CHARACTERS.SPOCK){
         return WINNEROPTIONS.COMPUTER
      }else{
         return WINNEROPTIONS.TIE
      }
   break;

   case GAME_CHARACTERS.SPOCK :
      if(AIchoice === GAME_CHARACTERS.SCISSORS || AIchoice === GAME_CHARACTERS.ROCK){
        return WINNEROPTIONS.PLAYER
      }else if(AIchoice === GAME_CHARACTERS.LIZARD || AIchoice === GAME_CHARACTERS.PAPER){
         return WINNEROPTIONS.COMPUTER
      }else{
         return WINNEROPTIONS.TIE
      }
   break;

   case GAME_CHARACTERS.LIZARD :
      if(AIchoice === GAME_CHARACTERS.PAPER || AIchoice === GAME_CHARACTERS.SPOCK){
        return WINNEROPTIONS.PLAYER
      }else if(AIchoice === GAME_CHARACTERS.SCISSORS || AIchoice === GAME_CHARACTERS.ROCK){
         return WINNEROPTIONS.COMPUTER
      }else{
         return WINNEROPTIONS.TIE
      }
   break;
   default:
      return WINNEROPTIONS.TIE
  }
}