import { createContext, Dispatch, FC, ReactHTMLElement, ReactNode, useEffect, useReducer } from "react";
import { DISPATCH_ACTION_TYPES, GAME_CHARACTERS, GAME_MODE } from "../Enums";
import { Actions, IcontextValue } from "./contextTypes";


export const Context = createContext({} as IcontextValue)


function reducer(state: IcontextValue,action: Actions): IcontextValue{
   const payload = action.payload
   switch(action.type){
      case DISPATCH_ACTION_TYPES.SHOW_MODAL:
         return {...state,showModal:!state.showModal}
      break;
      case DISPATCH_ACTION_TYPES.CLEAR_SCORE:
         return {...state,gameScore:0,showResult:false,playersChoice:"",AIchoice:""}
      break;
      case DISPATCH_ACTION_TYPES.CHANGE_GAME_MODE:
         return {
            ...state,
            gameMode:state.gameMode === GAME_MODE.advanced ? GAME_MODE.normal : GAME_MODE.advanced
         }
      break;
      case DISPATCH_ACTION_TYPES.RESTART_GAME:
         return {...state,showResult:false,playersChoice:"",AIchoice:""}
      break;
      case DISPATCH_ACTION_TYPES.SET_PLAYERS_CHOICE:
         return {...state,playersChoice:payload}
      break;
      case DISPATCH_ACTION_TYPES.SET_AICHOICE_CHOICE:
         return {...state,AIchoice:payload}
      break;
      case DISPATCH_ACTION_TYPES.SET_SHOW_RESULT:
         return {...state,showResult:true}
      break;
      case DISPATCH_ACTION_TYPES.UPDATE_SCORE:
         if(state.gameScore === 0 && payload === -1){
            return state
         }else{
            return {...state,gameScore:state.gameScore + payload}
         }
      break;
      default:
         return state
   }
}

export default function AppContext({children}: {children : ReactNode}){

   const initState : IcontextValue = {
      gameMode: localStorage.getItem("gameMode") ? localStorage.getItem("gameMode")! : GAME_MODE.normal,
      gameScore:localStorage.getItem("gameScore") ? Number(localStorage.getItem("gameScore")) : 0,
      playersChoice:"",
      AIchoice:"",
      showResult:false,
      restartGame:false,
      showModal:false,
      dispatch: () =>  {}
   }

   const [state,dispatch] = useReducer(reducer,initState)

   useEffect(() =>{
      localStorage.setItem("gameScore",JSON.stringify(state.gameScore))
      localStorage.setItem("gameMode",state.gameMode)
   },[state.gameScore,state.gameMode])

   return(
      <Context.Provider value={{...state,dispatch}}>
         {children}
      </Context.Provider>
   )
}
(AppContext as FC).propTypes ={}