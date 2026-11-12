import { useState } from 'react'

function App() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // useState(false) para indicar que o valor armazenado será false para que no momento do evento de loading seja alterado para um true (valor booleano)

  async function createVideo() {
    setLoading(true);
    setMessage("");

    try {
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

      if(!response.ok) { // a resposta NÃO foi bem-sucedida?
        throw new Error( // Cria um objeto que representa um erro | Throw neste caso significa "lance esse erro"
          data.message ?? "Erro ao enviar o vídeo" // neste ponto é indicado para que SE data.message existir, use ela, caso contrário use a mensagem padrão.
        )
      }

      setMessage(data.message ?? `Vídeo recebido: ${data.title}`);
    } catch (error) {
      console.error(error);

      if (error instanceof Error) { // Verifica se o valor realmente é um erro, se for verdade ele retorna um valor booleano "True" ou "False"
        setMessage(error.message)
      } else {
        setMessage("Ocorreu um erro inesperado.");
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
        onClick={createVideo} /* createVideo() executa a função imediatamente durante a renderização. Já createVideo faz com que o React execute futuramente. */
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

