window.addEventListener('DOMContentLoaded', (event) => {
  const textDisplay = document.getElementById('text-display');
  const socket = io();

  // Speech recognition configuration
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  // Event triggered when speech is recognized
  recognition.onresult = function(event) {
    let finalTranscript = '';
    let interimTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript += transcript;
      }
    }

    // Display the recognized text
    textDisplay.innerHTML = finalTranscript;

    // Send the recognized text to the server
    socket.emit('recognizedText', finalTranscript);
  };

  // Start the speech recognition
  recognition.start();
});
