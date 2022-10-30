export function ScoreBoard({team1Props, team2Props}){
    return (  
        <div key={team1Props.team1Name} className="flex flex-row w-1/4 h-20 px-2 items-center justify-between mt-2 border-b-2 border-white">
            <div className="">
                <img src={team1Props.flag} alt="" />
                <p className=" text-white text-xs pt-2">{team1Props.team1Name}</p>
            </div>
            <p className="text-white text-xl">{team1Props.team1Result}</p>

            <p className="text-white text-xl">X</p>

            <p className="text-white text-xl">{team2Props.team2Result}</p>
            <div className="">
                <img src={team2Props.flag} alt="" />
                <p className=" text-white text-xs pt-2">{team2Props.team2Name}</p>
            </div>
        </div>
    )
}



