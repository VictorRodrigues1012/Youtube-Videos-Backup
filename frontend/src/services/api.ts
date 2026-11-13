const API_URL = import.meta.env.VITE_API_URL; // const API_URL = "http://localhost:3001";

interface VideoResponse { // A interface descreve um formato de dados.
  title: string; // Obrigatório: O título do vídeo.
  message?: string; // Opcional: Uma mensagem adicional relacionada ao vídeo.
}

export async function createVideo (
    title: string // Recebe o parametro title do tipo string, ou seja createVideo("Meu vídeo")
): Promise<VideoResponse> {
    const response = await fetch(`${API_URL}/videos`, {
        method: 'POST',

        headers: {
            "content-type": "application/json",
        },

        body: JSON.stringify({
            title,
        }),
    });

    const data: VideoResponse = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || 'Erro ao criar o vídeo'
        )
    }

    return data;
}