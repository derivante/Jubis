import {banner, menuletters, n_banner, comandos, respond, foward} from "../config/content.js";
import {Arthur, Julia, Victoria, Gui, Manu, Brenda, Yas, Giovana, Gustavo, Luna, Murilo, Felipe, Sumo} from "../config/letters.js";
import { scrollToBottom } from '../handlers/utils.js';


export async function butstill() {
	const terminalOutput = document.getElementById("terminal-output");
	const welcomeMessage2 = n_banner;
	const newOutputLine = document.createElement("div");
	terminalOutput.appendChild(newOutputLine);
	await animateText(newOutputLine, welcomeMessage2);
	scrollToBottom();
}

export async function loading() {
	const terminalOutput = document.getElementById("terminal-output");
	const welcomeMessage1 = banner;
	const newOutputLine = document.createElement("div");
	terminalOutput.appendChild(newOutputLine);
	await animateText(newOutputLine, welcomeMessage1);
	scrollToBottom();

	setTimeout(() => {
		document.getElementById("terminal-output").innerHTML = "";
	}, 2000)

	setTimeout(() => {
		butstill();
	}, 2000)
}

export function processCommand(inputText) {
	
	const terminalInput = document.getElementById("terminal-input");
	const userCommand = terminalInput.textContent;
	let response = '';

	switch (inputText.toLowerCase()) {

		case "clear":	
			document.getElementById("terminal-output").innerHTML = n_banner;
			return "";
			// Aqui podemos manipular o que o juh vai escrever e ter acesso
		case "menu":
			document.getElementById("terminal-output").innerHTML = "";
			return userCommand + "\n" + menuletters ;

	  	case "comandos":
			return userCommand + "\n" + comandos;

		case "mensagens":
			return userCommand + "\n" + menuletters;

		case "responder":
			window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', "_blank");
			return userCommand + "\n" + respond;

		case "encaminhar":
			window.open('https://www.youtube.com/watch?v=NNv2RHR62Rs', "_blank");
			return userCommand + "\n" + foward;

		case "julia":
			return userCommand + "\n" + Julia;

		case "victoria":
			return userCommand + "\n" + Victoria;
		
		case "gui":
			return userCommand + "\n" + Gui;
		
		case "manu":
			return userCommand + "\n" + Manu;

		case "sumo":
			return userCommand + "\n" + Sumo;

		case "brenda":
			return userCommand + "\n" + Brenda;

		case "yas":
			return userCommand + "\n" + Yas;

		case "gustavo":
			return userCommand + "\n" + Gustavo;
			
		case "giovanna":
			return userCommand + "\n" + Giovana;
		
		case "luna":
			return userCommand + "\n" + Luna;

		case "murilo":
			return userCommand + "\n" + Murilo;

		case "felipe":
			return userCommand + "\n" + Felipe;

		case "arthur":
			return userCommand + "\n" + Arthur;
	
		default:
			return userCommand + "\n" + `Unknown command: ${inputText}`;
	}
	return response;
}

let userInteracted = false;
document.addEventListener("click", () => {
	userInteracted = true;
});
  
export async function animateText(element, text, delay = 10, terminalInput, inputPrefix) {
	if (terminalInput) {
		terminalInput.contentEditable = "false";
		if (inputPrefix) inputPrefix.style.display = "none";
	}
	
	const speedFactor = text.length <= 50 ? 1 : text.length <= 100 ? 10 : 20;
	const adjustedDelay = delay / speedFactor;

	for (const char of text) {
		element.textContent += char;
		scrollToBottom();

		if (userInteracted) {

		typingSound.currentTime = 0;
		typingSound.play().catch((error) => {
		   console.error("Error playing typing sound:", error);
		});

		}

		await new Promise((resolve) => setTimeout(resolve, adjustedDelay));
	}

	if (terminalInput) {
		terminalInput.contentEditable = "true";
		if (inputPrefix) inputPrefix.style.display = "inline";
	}
}
