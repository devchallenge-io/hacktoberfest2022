import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

function App() {
  const [Readme, setReadme] = useState("")

  return (
    <div className="App">
      <aside>
        <strong>🛠️ Readme Editor</strong>
        <strong>Modelos</strong>
        <button onClick={() => setReadme(state => state + ` ## Titulo \n explicação\n\n`)}>Seção</button>
        <button onClick={() => setReadme(state => state + ` ### Cabeçalho\n\n`)}>Cabeçalho</button>
        <button onClick={() => setReadme(state => state + ` ## Indice\n- [Sobre](#sobre)\n  - [Quem Somos](#quem-somos)\n  - [Endereço](#endereco)\n- [Contato](#contato)\n\n`)}>Indice</button>
        <button onClick={() => setReadme(state => state + `## Código\n\n\`\`\`javascript\nvar foo='bar'\n\`\`\`\n\n`)}>Código</button>
        <button onClick={() => setReadme(state => state + `	![alt_text](https://example.com/image.jpg)\n\n`)}>Imagem</button>
        <strong>Funções</strong>
        <button onClick={() => {
          navigator.clipboard.writeText(Readme);
          alert("Copíado")
        }}>Copiar codigo</button>
        <button onClick={() => {
          setReadme("")
        }}>Limpar</button>

      </aside>
      <textarea
        onChange={(e) => setReadme(e.target.value)}
        value={Readme}
      />
      <main>
        <ReactMarkdown>
          {Readme}
        </ReactMarkdown>
      </main>
    </div>
  )
}

export default App
