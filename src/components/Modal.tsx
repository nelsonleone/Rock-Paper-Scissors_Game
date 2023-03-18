import { useContext } from "react"
import { Context } from "../appContext/context"
import { setClearScore, setShowClearScoreModal } from "../utils/contextFunctions"

export default function Modal(){

   const { dispatch } = useContext(Context)

   function handleClearBtnClick(){
      setClearScore(dispatch)
      setShowClearScoreModal(dispatch)
   }

   return(
      <div className="modal">
         <div>
            <h2>You are about to clear your score</h2>
            <div className="flex-row">
               <button onClick={handleClearBtnClick}>Clear</button>
               <button onClick={() => setShowClearScoreModal(dispatch)}>Cancel</button>
            </div>
         </div>
      </div>
   )
}