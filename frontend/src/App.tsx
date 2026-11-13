import { useState } from 'react'
import { createVideo } from './services/api' // Foi colocado entre chaves pois foi uma exportacao nomeada

function App() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // useState(false) para indicar que o valor armazenado será false para que no momento do evento de loading seja alterado para um true (valor booleano)

  async function handleCreateVideo() { // mudanca na nomenclatura da funcao createVideo para handleCreateVideo para evitar conflito com a funcao importada do services/api.ts
    setLoading(true);
    setMessage("");

    try {
      const data = await createVideo(title) 

      setMessage(`Vídeo recebido: ${data.title}`);
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Ocorreu um erro inesperado");
      }
    } finally {
      setLoading(false);
    }
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

      <button 
        onClick={handleCreateVideo} /* createVideo() executa a função imediatamente durante a renderização. Já createVideo faz com que o React execute futuramente. */
        disabled={loading} // Desabilita o botão a partir do momento em que entra em estado de loading
      >
      {loading ? "Enviando..." : "Enviar"} {/* Operador ternário. Condição ? valorSeTrue : valorSeFalse  */}
      </button>

      {message && (
        <p>{message}</p>
      )}
    </main> 
  )
}

export default App;

