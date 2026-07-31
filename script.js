// Lógica interactiva para el Asistente IA del modpack
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const fileInput = document.getElementById('fileInput');

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleSend() {
    const text = userInput.value.trim();
    if (!text && fileInput.files.length === 0) return;

    let queryText = text;
    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        queryText += ` [Archivo adjunto: ${fileName}]`;
        fileInput.value = '';
    }

    addMessage(queryText, 'user');
    userInput.value = '';

    // Respuesta simulada inteligente de la IA orientada al modpack
    setTimeout(() => {
        let aiResponse = "He analizado tu consulta sobre Horror K. Asegúrate de tener asignada suficiente memoria RAM y revisar la compatibilidad de los mods de entidades.";
        if (queryText.toLowerCase().includes('crash') || queryText.toLowerCase().includes('.txt') || queryText.toLowerCase().includes('log')) {
            aiResponse = "Analizando el archivo de error... Parece ser un conflicto menor de memoria o un mod desactualizado. Te recomiendo verificar que Embeddium y FerriteCore estén en su última versión.";
        } else if (queryText.toLowerCase().includes('cave dweller') || queryText.toLowerCase().includes('entidad')) {
            aiResponse = "Consejo táctico contra entidades: Mantén la luz encendida, no corras en espacios cerrados oscuros y escucha atentamente los sonidos metálicos del entorno.";
        }
        addMessage(aiResponse, 'ai');
    }, 1000);
}

sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        addMessage(`Archivo cargado: ${fileInput.files[0].name}. Escribe tu pregunta sobre él y presiona Enviar.`, 'ai');
    }
});
