import { useState } from "react"
import {useLocation} from 'react-router-dom'
import { TextInputInput } from "../components/TextInput"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { ScoreBoard } from "../components/ScoreBoard"

import { getFlag } from "../utils/getFlags"

 export function Winner() {
  const[team1NameWinner, setTeam1NameWinner] = useState("")
  const[team1ResultWinner, setTeam1ResultWinner] = useState("")
  const[team2NameWinner, setTeam2NameWinner] = useState("")
  const[team2ResultWinner, setTeam2ResultWinner] = useState("")
  const[betResult, setBetResult] = useState({})
  const[winners, setWinners] = useState([])

  const location = useLocation();

  function scrollBottom() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  function handleViewWinner (event) {
    event.preventDefault()

    if(!team1NameWinner || !team2NameWinner || !team1ResultWinner || !team2ResultWinner){
      alert("Os campos precisam ser preenchidos")
    }else{
      const team1Props = {
        team1NameWinner,
        flag: getFlag(team1NameWinner), 
        team1ResultWinner
      }
  
      const team2Props = {
        team2NameWinner,
        flag: getFlag(team2NameWinner),
        team2ResultWinner
      }
  
      const bet = {
        team1Props,
        team2Props
      }
  
      setBetResult(bet)
    }

    location.state.bets.map((bet) => {
      if(bet.team1Props.team1Name == team1NameWinner && bet.team1Props.team1Result == team1ResultWinner){
        if(bet.team2Props.team2Name == team2NameWinner && bet.team2Props.team2Result == team2ResultWinner){
          setWinners(prevWinners => [...prevWinners, bet.bettorsName])
        }
      }
    })
  
    scrollBottom()
  }

    return (
      <div className="flex flex-col min-h-screen">
        <Header />

        <main>
          <div className="flex flex-col min-h-screen items-center justify-between relative bg-soccer-play bg-cover bg-no-repeat">
            <h1 className="mt-10 text-2xl text-white">Placar final</h1>
            <div className="w-full h-1/2 absolute top-1/4 flex flex-col items-center">

            <h2 className="text-lg text-white">Preencha o placar final dos jogos</h2>
            <h3 className="text-md text-white">e veja quem é o ganhador</h3>

            <div className="flex w-full h-1/2 justify-center mt-10">
              <div className="flex gap-3 pr-14">
                <label htmlFor="team1Name" className="flex flex-col gap-3">
                  <span className="font-semibold text-white text-xs">Time 1</span>
                  <TextInputInput onChange={event => setTeam1NameWinner(event.target.value)} id="team1Name" placeholder="Digite o nome do time 1" width="w-96" />
                </label>

                <label htmlFor="team1Result" className="flex flex-col gap-3">
                  <span className="font-semibold text-white text-xs">GOL</span>
                  <TextInputInput onChange={event => setTeam1ResultWinner(event.target.value)} id="team1Result" type="number" placeholder="0" width="w-14" />
                </label>
              </div>

              <div className="flex mt-12">
                <p className="text-xl text-white">X</p>
              </div>

              <div className="flex gap-3 pl-14">
                <label htmlFor="team2Result" className="flex flex-col gap-3">
                  <span className="font-semibold text-white text-xs">GOL</span>
                  <TextInputInput onChange={event => setTeam2ResultWinner(event.target.value)} id="team2Result" type="number" placeholder="0" width="w-14" />
                </label>

                <label htmlFor="bettorsName" className="flex flex-col gap-3">
                  <span className="font-semibold text-white text-xs">Time 2</span>
                  <TextInputInput onChange={event => setTeam2NameWinner(event.target.value)} id="team2Name" type="text" placeholder="Digite o nome do time 2" width="w-96" />
                </label>
              </div>
            </div>

            <button onClick={handleViewWinner} className="flex items-center justify-center bg-gradient-to-tr from-purple-900 to-purple-400 rounded w-96 h-12 text-white">
              Exibir ganhador
            </button>

            </div>
          </div>
          <div className="flex flex-col min-h-screen items-center justify-between relative bg-soccer-trophy bg-cover bg-no-repeat">
            <div className="flex w-full justify-center">
              <h1 className="mt-10 text-2xl text-white">Ganhadores</h1>
            </div>
            
            <div className="flex w-full pl-24">
              <img src="/src/assets/soccer_player.png" className="w-1/3" alt="" />
            </div>

            {betResult.length > 0 &&
            <div className="w-full h-1/2 absolute top-1/4 flex flex-col items-center">
              <ScoreBoard team1Props={betResult.team1Props} team2Props={betResult.team2Props} />
            </div>
            }

            <div className="flex flex-col w-full items-center justify-center absolute top-1/3">
              {
                winners.map(w => (
                  <p key={w} className="text-white text-md mt-4">{w}</p>
                ))
              }
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }