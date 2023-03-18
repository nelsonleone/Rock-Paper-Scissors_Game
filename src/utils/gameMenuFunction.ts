import { Dispatch, SetStateAction } from "react"
import { Actions } from "../appContext/contextTypes"
import { changeGameMode, setShowClearScoreModal } from "./contextFunctions"

export function handleChangeModeBtnClick(dispatch:Dispatch<Actions>,setShowMenu:Dispatch<SetStateAction<boolean>>){
   changeGameMode(dispatch)
   setShowMenu(false)
}

export function handleClearScoreBtnClick(dispatch:Dispatch<Actions>,setShowMenu:Dispatch<SetStateAction<boolean>>){
   setShowClearScoreModal(dispatch)
   setShowMenu(false)
}