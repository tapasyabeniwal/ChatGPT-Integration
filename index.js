// script.js
const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = (event) => {
    console.log(`Received message: ${event.data}`);
    const chatMessages = document.querySelector('.chat-messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = event.data;
    chatMessages.appendChild(messageElement);
};

socket.onopen = () => {
    console.log('Connected to the WebSocket server');
};

socket.onclose = () => {
    console.log('Disconnected from the WebSocket server');
};

socket.onerror = (error) => {
    console.log(`Error occurred: ${error}`);
};

document.getElementById('send-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    socket.send(userInput);
    document.getElementById('user-input').value = '';
});
