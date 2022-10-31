import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { TextInputInput } from "../components/TextInput"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { ScoreBoard } from "../components/ScoreBoard"

import { getFlag } from "../utils/getFlags"

 export function Guess() {
  const[bettorsName, setBettorsName] = useState("")
  const[team1Name, setTeam1Name] = useState("")
  const[team1Result, setTeam1Result] = useState("")
  const[team2Name, setTeam2Name] = useState("")
  const[team2Result, setTeam2Result] = useState("")
  const[bets, setBets] = useState([])

  const navigate = useNavigate()

  function scrollBottom() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  function scrollTop() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth',
    });
  }

  function handleSaveBet(event) {
    event.preventDefault()

    if(!bettorsName || !team1Name || !team2Name || !team1Result || !team2Result){
      alert("Os campos precisam ser preenchidos")
    }else{
      const team1Props = {
        team1Name,
        flag: getFlag(team1Name), 
        team1Result
      }
  
      const team2Props = {
        team2Name,
        flag: getFlag(team2Name),
        team2Result
      }
  
      const bet = {
        bettorsName,
        team1Props,
        team2Props
      }
      
      const b = [...bets, bet];
      console.log(b)
      setBets(b)

      scrollBottom()
    }
  }

  function handleFinishBet() {

    if(bets.length > 0){
      scrollTop()
      navigate('/winner', {state:{bets}})
    }else {
      alert("Você precisa registrar ao menos 1 palpite")
    }
  }

    return (
      <div className="flex flex-col min-h-screen">
        <Header />

        <main>
          <div className="flex flex-col min-h-screen items-center justify-between relative bg-soccer-field bg-cover bg-no-repeat">
            <h1 className="mt-10 text-2xl text-white">Criar Palpite</h1>
            <img src="/src/assets/soccer_player2.png" className="w-1/2" alt="" />
            
            <div className="w-full h-1/2 absolute top-1/3 flex flex-col items-center">
            
            <label htmlFor="bettorsName" className="flex flex-col gap-3">
              <span className="font-semibold text-white text-xs">Nome do apostador</span>
              <TextInputInput onChange={event => setBettorsName(event.target.value)} id="bettorsName" type="text" placeholder="Nome do apostador" width="w-96" />
            </label>

            <div className="flex w-full h-1/2 justify-center mt-8">
              <div className="flex gap-3 pr-14">
                <label htmlFor="team1Name" className="flex flex-col gap-3">
                  <span className="font-semibold text-white text-xs">Time 1</span>
                  <TextInputInput onChange={event => setTeam1Name(event.target.value)} id="team1Name" placeholder="Digite o nome do time 1" width="w-96" />
                </label>

                <label htmlFor="team1Result" className="flex flex-col gap-3">
                  <span className="font-semibold text-white text-xs">GOL</span>
                  <TextInputInput onChange={event => setTeam1Result(event.target.value)} id="team1Result" type="number" placeholder="0" width="w-14" />
                </label>
              </div>

              <div className="flex mt-12">
                <p className="text-xl text-white">X</p>
              </div>

              <div className="flex gap-3 pl-14">
                <label htmlFor="team2Result" className="flex flex-col gap-3">
                  <span className="font-semibold text-white text-xs">GOL</span>
                  <TextInputInput onChange={event => setTeam2Result(event.target.value)} id="team2Result" type="number" placeholder="0" width="w-14" />
                </label>

                <label htmlFor="bettorsName" className="flex flex-col gap-3">
                  <span className="font-semibold text-white text-xs">Time 2</span>
                  <TextInputInput onChange={event => setTeam2Name(event.target.value)} id="team2Name" type="text" placeholder="Digite o nome do time 2" width="w-96" />
                </label>
              </div>
            </div>

            <button onClick={handleSaveBet} className="flex items-center justify-center bg-gradient-to-tr from-blue-900 to-blue-400 rounded w-96 h-12 text-white">
              Salvar palpite
            </button>

            </div>
          </div>
          <div className="flex flex-col  bg-gradient-to-r from-blue-900 to-blue-400">
            <div className="flex w-full justify-center">
              <h1 className="mt-10 text-2xl text-white">Palpites</h1>
            </div>
            {bets.length > 0
              ?
                <div className="flex flex-col items-center w-full mt-20">
                  {
                    bets.map(b => (
                      <>
                        <p className="text-white text-md mt-10">{b.bettorsName}</p>
                        <ScoreBoard key={b.team1Props.team1Name} team1Props={b.team1Props} team2Props={b.team2Props} />
                      </>
                    ))
                  }
              </div>
            :
              <div className="flex flex-col items-center w-full mt-20">
                <p className="text-md text-white">Não ha palpites cadastrados</p>
              </div>
            }
            <div className="flex flex-col items-center w-full mt-20 mb-40">
              <button onClick={handleFinishBet} className="flex items-center justify-center bg-gradient-to-tr from-brown-900 to-brown-400 rounded w-96 h-12 text-white">Encerrar palpites</button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }