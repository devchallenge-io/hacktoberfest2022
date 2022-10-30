export function Header(){
    return (  
        <div className="flex w-full h-20 px-32 items-center justify-between bg-blue-900">
          <div className="w-48 h-16">
            <a href="/">
              <img src="./src/assets/Logo.png" className="" alt="" />
            </a>
          </div>

          <div className="w-1/4">
            <ul className="flex items-center justify-between">
              <li>
                <a href="/winner" className="text-white hover:text-green-400">Placar final</a>
              </li>
              <li className="p-4 rounded text-white bg-green-900 hover:bg-green-400 cursor-pointer">
                <a href="/" className="">Criar palpite</a>
              </li>
            </ul>
          </div>
        </div>
    )
}




