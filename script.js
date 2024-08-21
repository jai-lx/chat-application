document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const messageText = chatInput.value.trim();

    if (messageText !== '') {
        addMessageToChat(messageText, 'user');
        chatInput.value = '';
        simulateBotResponse();
    }
}

function addMessageToChat(messageText, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');

    messageElement.classList.add('message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = messageText;

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function simulateBotResponse() {
    setTimeout(() => {
        const botResponses = [
            "Hello! How can I help you today?",
            "I'm here to assist you.",
            "Could you please clarify?",
            "Thank you for reaching out!",
            "I'm a simple bot, but I'm here to chat!"
        ];
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        addMessageToChat(randomResponse, 'bot');
    }, 1000);
}
