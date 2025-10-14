import { handleInput } from './handlers/inputHandler.js';

export function init() {
  console.log("Terminal initialized");
  console.log("Looking here is a waste of time");

  const terminalInput = document.getElementById("terminal-input");

  
  terminalInput.addEventListener("click", handleClick);
  terminalInput.addEventListener("touchstart", handleClick);

  terminalInput.addEventListener("focus", () => {
    setTimeout(() => {
      document.body.scrollTop = document.documentElement.scrollTop = terminalInput.offsetTop;
    }, 500);
  });
  if (terminalInput) {
    terminalInput.addEventListener("keydown", handleInput);
  }


        document.addEventListener("DOMContentLoaded", () => {
            const audio = document.createElement("audio");
            audio.src = "src/js/teste.mp3";  // Caminho do arquivo de áudio
            audio.controls = true;  // Exibe os controles de áudio na página
            audio.muted = true;     // Começa o áudio mutado
            document.body.appendChild(audio); // Adiciona o player ao corpo da página

            // Tenta tocar automaticamente
            const tocarAudio = async () => {
                try {
                    await audio.play(); // Tenta iniciar a reprodução
                    console.log("Áudio reproduzido automaticamente (muted)!");
                } catch (error) {
                    console.warn("Autoplay bloqueado. Esperando interação do usuário...");

                    // Adiciona um evento de clique para tocar após interação
                    document.addEventListener("click", () => {
                        audio.play();
                        console.log("Áudio iniciado após clique!");
                    }, { once: true }); // Garante que o evento só dispare uma vez
                }

                // Desmuta o áudio após a reprodução começar
                audio.muted = false;
            };

            tocarAudio();
        });
  //document.body.appendChild(audio);

  

}
