import { FC, useContext, useEffect, useState } from 'react'
import { AI_POSSIBLE_CHOICES_NORMAL, GAME_CHARACTERS, GAME_MODE } from './Enums'
import GameMenu from './components/GameMenu'
import Header from './components/Header'
import CharactersDisplay from './components/CharactersDisplay'
import { Context } from './appContext/context'
import Stage from './components/Stage'
import Modal from './components/Modal'
import { setAIchoice, setShowResult } from './utils/contextFunctions'


function App(){

  const { 
    gameMode,
    playersChoice,
    gameScore, 
    showModal, 
    AIchoice ,
    dispatch
  } = useContext(Context)

  const [AIpossibleSelections,setAIpossibleSelections] = useState<string[]>(
    gameMode === GAME_MODE.advanced ? Object.values(GAME_CHARACTERS) : Object.values(AI_POSSIBLE_CHOICES_NORMAL)
  )

  useEffect(() => {
    if(!playersChoice)return;

    const timer = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * AIpossibleSelections.length)
      renderAIchoice(randomIndex)
    }, 1500)


    return () => clearTimeout(timer)
  },[playersChoice])

  useEffect(() => {
    if(!AIchoice)return;
    setShowResult(dispatch)
  },[AIchoice])

  useEffect(() => {
    setAIpossibleSelections(
      gameMode === GAME_MODE.advanced ? Object.values(GAME_CHARACTERS) : Object.values(AI_POSSIBLE_CHOICES_NORMAL)
    )
  },[gameMode])

  function renderAIchoice(randomIndex:number){
    setAIchoice(dispatch,AIpossibleSelections[randomIndex])
  }

  return (
    <div className="App">
      <Header gameLogo={gameMode === GAME_MODE.advanced ? '/images/logo-bonus.svg' : '/images/logo.svg'} score={gameScore} />
      <main>
        {
          !playersChoice ?
           <CharactersDisplay />
          :
          <Stage />
        }
       <GameMenu gameMode={gameMode} />
      </main>

      {
        showModal &&
        <Modal />
      }
    </div>
  )
}

export default (App as FC)
