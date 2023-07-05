# VOICE-CONTROLLED-ROBOTIC-ARM
 - Voice-controlled robotic arm powered by Raspberry Pi 
This repository contains the code for a voice-controlled robotic arm powered by Raspberry Pi. The project allows you to control the movement of a robotic arm using voice commands.

# Prerequisites
Before getting started, make sure you have the following hardware and software installed:

Raspberry Pi (any version)
USB microphone
Servo motors (number depends on your robotic arm)
Python (version 3.7 or later)
Node.js (version 10 or later)

# Installation
1. Install the required Python dependencies by navigating to the project directory and running:
```
pip3 install -r requirements.txt
```
2. Install the required Node.js dependencies by navigating to the project directory and running:
```
   npm install
```

# Usage
1. Connect the servo motors to your Raspberry Pi according to the pin configuration specified in the `pinout` file.

2. Run the Node.js server by executing the following command:
```
   node server.js
```  
3. Open a web browser and access the Raspberry Pi's IP address followed by port 3000 (e.g., http://<raspberry-pi-ip>:3000). This will display the index.html file.
4. Click the "Start Listening" button and grant microphone access when prompted.
5. Speak the voice commands (e.g., "open", "close", "front", "back", "up", "down") into the microphone to control the robotic arm.

# Files
 - index.html: The HTML file that displays the web interface for controlling the robotic arm.
 - server.js: The Node.js server file that handles the communication between the web interface and the Raspberry Pi.
 - script.js: The JavaScript file that sends voice commands to the server.
 - open.py, close.py, front.py, back.py, up.py, down.py: Python scripts that control the movement of the servo motors based on the received voice commands.

# Contributing
If you want to contribute to this project, feel free to open an issue or submit a pull request. Any contributions are welcome!

# License
This project is licensed under the MIT License. Feel free to use and modify the code as per the license terms.
