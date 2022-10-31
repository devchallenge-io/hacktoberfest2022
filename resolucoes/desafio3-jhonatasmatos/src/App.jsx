import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

function App() {
  const [Readme, setReadme] = useState("")

  function createReadmeExample(example) {
    setReadme(prevExample => prevExample + ` ${example}`)
  }

  return (
    <div className="container">
      <div className='titleContainer'>
        <h1>Criador de README</h1>
      </div>

      <div className="menu">
        <div className="SectionAButton">
          <strong>Seções</strong>
          <a className="clearLink" onClick={() => {
            setReadme("")
          }}>Limpar</a>
        </div>
        <button className="btn" onClick={() =>  createReadmeExample(`## Titulo \n explicação\n\n`)}>Seção</button>
        <button className="btn" onClick={() => createReadmeExample(` ### Cabeçalho\n\n`)}>Cabeçalho</button>
        <button className="btn" onClick={() => createReadmeExample(` ## Indice\n- [Sobre](#sobre)\n  - [Quem Somos](#quem-somos)\n  - [Endereço](#endereco)\n- [Contato](#contato)\n\n`)}>Indice</button>
        <button className="btn" onClick={() => createReadmeExample(`## Código\n\n\`\`\`javascript\nvar foo='bar'\n\`\`\`\n\n`)}>Código</button>
        <button className="btn" onClick={() => createReadmeExample(`	![alt_text](https://example.com/image.jpg)\n\n`)}>Imagem</button>
        <strong>Funções</strong>
        <button className="btn" onClick={() => {
          navigator.clipboard.writeText(Readme);
          alert("Copíado")
        }}>Copiar codigo</button>
        
      </div>

      <textarea
        onChange={(e) => setReadme(e.target.value)}
        value={Readme}
      />
      <main>
        <ReactMarkdown className='RMarkdown'>
          {Readme}
        </ReactMarkdown>
      </main>
    </div>
  )
}

export default App