import { FC, useCallback, useContext, useEffect, useRef, useState } from "react"
import Hamburger  from 'hamburger-react'
import { GAME_MODE } from "../Enums";
import { changeGameMode } from "../utils/contextFunctions";
import { Context } from "../appContext/context";
import { handleChangeModeBtnClick, handleClearScoreBtnClick } from "../utils/gameMenuFunction";

type Props = {
   gameMode:string;

}


export default function GameMenu(props:Props){

   const { gameMode } = props;
   const [showMenu,setShowMenu] = useState<boolean>(false)
   const menuRef = useRef<HTMLDivElement>(null)
   const showMenuToggleRef = useRef<HTMLButtonElement>(null)
   const [showGameRules,setShowGameRules] = useState<boolean>(false)
   const { dispatch } = useContext(Context)

   const checkOutSideClick = useCallback((e:MouseEvent|TouchEvent) => {
      const isHamburgerIcon = (e.target as HTMLElement).closest('.menu-toggle-btn')
      if(menuRef.current &&
         showMenu &&
         !menuRef.current.contains(e.target as Node) &&
         showMenuToggleRef.current !== e.target &&
         !isHamburgerIcon
         ){
         setShowMenu(false)
      }
   },[showMenu])

   useEffect(() => {
      document.addEventListener('mousedown',checkOutSideClick)
      return () => document.removeEventListener('mousedown',checkOutSideClick)
   },[checkOutSideClick])

   useEffect(() => {
      document.addEventListener('touchstart',checkOutSideClick)
      return () => document.removeEventListener('touchstart',checkOutSideClick)
   },[checkOutSideClick])

   const handleGameRulesShow = () => {
      setShowGameRules(!showGameRules)
      setShowMenu(false)
   }


   return(
      <>
         <div className="game-menu">
            <button onClick={() => setShowMenu(!showMenu)} ref={showMenuToggleRef} className="menu-toggle-btn">
               <Hamburger toggled={showMenu} size={22} />
            </button>
            {
               showMenu &&
               <div className="game-menu-content" ref={menuRef} >
                  <button
                  className="rules-btn" 
                  aria-controls="game-rules-modal"
                  aria-expanded={showGameRules}
                  onClick={handleGameRulesShow}
                  >
                     Rules
                  </button>

                  <button 
                    className="game-mode-toggle"
                    onClick={() => handleChangeModeBtnClick(dispatch,setShowMenu)}
                     >
                     Change Mode ({gameMode === GAME_MODE.advanced ? GAME_MODE.normal : GAME_MODE.advanced})
                  </button>

                  <button 
                    className="clear-score"
                    onClick={() => handleClearScoreBtnClick(dispatch,setShowMenu)}
                     >
                     Clear Score
                  </button>
               </div>
            }
         </div>
         {
            showGameRules &&
            <div className="game-rule-modal" id="game-rules-modal">
               <div className="game-rule-modal-inner">
                  <div className="flex-row">
                     <h2>RULES</h2>
                     <button 
                        onClick={() => setShowGameRules(false)} 
                        aria-controls="game-rules-modal" 
                        aria-expanded={showGameRules} 
                        className="close-game-modal-btn"
                        >
                        <img src="/images/icon-close.svg" alt="close modal" />
                     </button>
                  </div>
                  <img src={gameMode === GAME_MODE.advanced ? "/images/image-rules-bonus.svg" : "/images/image-rules.svg"} alt="game-rules" className="rules-image" />
               </div>
            </div>
         }
      </>
   )
}
(GameMenu as FC)