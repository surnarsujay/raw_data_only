const net = require('net');

// Define the server address and port
const SERVER_ADDRESS = '0.0.0.0'; // Bind to all available IP addresses
const SERVER_PORT = 3001;

// Create a TCP server
const server = net.createServer((socket) => {
    // Handle incoming data
    socket.on('data', (chunk) => {
        // Display raw received data on terminal
        console.log('Raw received data:', chunk.toString());
    });

    // Handle errors
    socket.on('error', (err) => {
        console.error('Socket error:', err);
    });

    // Handle client disconnection
    socket.on('close', () => {
        console.log('Client disconnected');
    });
});

// Handle server errors
server.on('error', (err) => {
    console.error('Server error:', err);
});

// Start the TCP server
server.listen(SERVER_PORT, SERVER_ADDRESS, () => {
    console.log(`Server running at tcp://${SERVER_ADDRESS}:${SERVER_PORT}/`);
});
