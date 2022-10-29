import { useNavigate } from "react-router-dom"

export function Guess() {
  const navigate = useNavigate()

  function handleGoTo(event) {
    event.preventDefault();

    navigate('/winner')
  }

    return (
      <div className="flex flex-col min-h-screen bg-gray-200">
        <h1>Guess</h1>
        <button onClick={handleGoTo}>ir para Winner</button>
      </div>
    )
  }