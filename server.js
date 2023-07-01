const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { spawn } = require('child_process');

// Serve the index.html file
app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// WebSocket connection event
io.on('connection', (socket) => {
  console.log('Client connected.');

  // Receive recognized text from the client
  socket.on('recognizedText', (text) => {
    console.log('Received text:', text);

    // Process the received text as per your requirements
    const lowercaseText = text.toLowerCase();
    if (lowercaseText.includes('open')) {
      const child = spawn('python', ['open.py']);
      child.on('exit', (code) => {
        console.log(`open.py exited with code ${code}`);
      });
    } else if (lowercaseText.includes('close')) {
      const child = spawn('python', ['close.py']);
      child.on('exit', (code) => {
        console.log(`close.py exited with code ${code}`);
      });
    } else if (lowercaseText.includes('up')) {
      const child = spawn('python', ['up.py']);
      child.on('exit', (code) => {
        console.log(`up.py exited with code ${code}`);
      });
    } else if (lowercaseText.includes('down')) {
      const child = spawn('python', ['down.py']);
      child.on('exit', (code) => {
        console.log(`down.py exited with code ${code}`);
      });
    } else if (lowercaseText.includes('front')) {
      const child = spawn('python', ['front.py']);
      child.on('exit', (code) => {
        console.log(`front.py exited with code ${code}`);
      });
    } else if (lowercaseText.includes('back')) {
      const child = spawn('python', ['back.py']);
      child.on('exit', (code) => {
        console.log(`back.py exited with code ${code}`);
      });
    }

    // Optionally, send the processed text back to the client
    socket.emit('recognizedText', text);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected.');
  });
});

// Start the server
const port = 3000;
const ipAddress = '0.0.0.0';
server.listen(port, ipAddress, () => {
  console.log(`Server listening on port ${port}`);
});
