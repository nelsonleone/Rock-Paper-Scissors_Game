import { Dispatch } from "react";
import { Actions } from "../appContext/contextTypes";
import { DISPATCH_ACTION_TYPES } from "../Enums";

export function changeGameMode(dispatch:Dispatch<Actions>){
   dispatch({
      type:DISPATCH_ACTION_TYPES.CHANGE_GAME_MODE,
   })
}

export function setShowClearScoreModal(dispatch:Dispatch<Actions>){
   dispatch({
      type:DISPATCH_ACTION_TYPES.SHOW_MODAL,
   })
}

export function setClearScore(dispatch:Dispatch<Actions>){
   dispatch({
      type:DISPATCH_ACTION_TYPES.CLEAR_SCORE,
   })
}

export function setRestartGame(dispatch:Dispatch<Actions>){
   dispatch({
      type:DISPATCH_ACTION_TYPES.RESTART_GAME,
   })
}

export function setPlayerChoice(dispatch:Dispatch<Actions>,playerChoice:string){
   dispatch({
      type:DISPATCH_ACTION_TYPES.SET_PLAYERS_CHOICE,
      payload:playerChoice
   })
}

export function setAIchoice(dispatch:Dispatch<Actions>,AIchoice:string){
   dispatch({
      type:DISPATCH_ACTION_TYPES.SET_AICHOICE_CHOICE,
      payload:AIchoice
   })
}

export function setShowResult(dispatch:Dispatch<Actions>){
   dispatch({
      type:DISPATCH_ACTION_TYPES.SET_SHOW_RESULT
   })
}

export function setUpdatedScore(dispatch:Dispatch<Actions>,payload:number){
   dispatch({
      type:DISPATCH_ACTION_TYPES.UPDATE_SCORE,
      payload
   })
}