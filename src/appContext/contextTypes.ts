import { Dispatch } from "react"
import { DISPATCH_ACTION_TYPES } from "../Enums"

export interface IcontextValue{
   gameMode: string,
   gameScore:number,
   playersChoice:string,
   AIchoice:string,
   showResult:boolean,
   restartGame:boolean,
   showModal:boolean,
   dispatch:Dispatch<Actions>
}

interface IClearScore{
   type: DISPATCH_ACTION_TYPES.CLEAR_SCORE,
   payload?:any
}
interface IRestartGame{
   type: DISPATCH_ACTION_TYPES.RESTART_GAME,
   payload?:any
}
interface IchangeGameMode{
   type: DISPATCH_ACTION_TYPES.CHANGE_GAME_MODE,
   payload?:any
}

interface IshowModal{
   type: DISPATCH_ACTION_TYPES.SHOW_MODAL,
   payload?:any
}
interface IsetPlayerChoice{
   type: DISPATCH_ACTION_TYPES.SET_PLAYERS_CHOICE,
   payload:string
}
interface IsetAIChoice{
   type: DISPATCH_ACTION_TYPES.SET_AICHOICE_CHOICE,
   payload:string
}
interface IsetShowResult{
   type: DISPATCH_ACTION_TYPES.SET_SHOW_RESULT
   payload?:any
}
interface IsetScore{
   type: DISPATCH_ACTION_TYPES.UPDATE_SCORE
   payload:number
}

export type Actions = 
IClearScore | 
IRestartGame |
IchangeGameMode |
IshowModal |
IsetPlayerChoice |
IsetAIChoice |
IsetShowResult |
IsetScore