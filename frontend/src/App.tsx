import { useState } from 'react'

function App() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  async function createVideo() {
    const response = await fetch("http://localhost:3001/videos", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title,
      }),
    });

    const data = await response.json()

    setMessage(data.message ?? `Vídeo recebido: ${data.title}`);

    console.log(data);
  }

  return (
    <main>
      <h1>Youtube Backup</h1>

      <input
        type="text"
        value={title} // O valor mostrado no input vem do estado title
        onChange={(event) => { // Onchange é toda vez quando o usuário altera o campo
          setTitle(event.target.value); // event.target.value é justamente o objeto que representa o evento, ou seja, todo texto escrito pelo usuário será este comando. Exemplo: Usuário escreve "Node.js" então event.target.value é justamente "Node.js"
        }}
      />

      <button onClick={createVideo}>
        Enviar
      </button> 
    </main> // createVideo() executa a função imediatamente durante a renderização. Já createVideo faz com que o React execute futuramente.
  )
}

export default App;