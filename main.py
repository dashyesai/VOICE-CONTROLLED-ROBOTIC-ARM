import RPi.GPIO as GPIO
import socketio
import time

# Set up GPIO pins for servo motor
servo_pin = 11
GPIO.setmode(GPIO.BOARD)
GPIO.setup(servo_pin, GPIO.OUT)
servo = GPIO.PWM(servo_pin, 50)  # 50Hz frequency

servo.start(0)

# Initialize Socket.IO client
sio = socketio.Client()

# Event triggered when connected to the server
@sio.on('connect')
def on_connect():
    print('Connected to server')

# Event triggered when receiving recognized text from the server
@sio.on('recognizedText')
def on_recognized_text(text):
    print('Received text:', text)
    if 'Motor on' in text:
        angle = 100  # Move servo to 100 degrees position
    elif 'Motor off' in text:
        angle = 0  # Move servo to -100 degrees position
    else:
        return
    
    print('Setting angle:', angle)
    servo.ChangeDutyCycle(2 + (angle / 18))
    time.sleep(0.5)
    servo.ChangeDutyCycle(0)

# Event triggered when disconnected from the server
@sio.on('disconnect')
def on_disconnect():
    print('Disconnected from server')
    servo.stop()  # Stop servo PWM
    GPIO.cleanup()  # Clean up GPIO on disconnection

# Connect to the server
sio.connect('http://localhost:3000')

# Start the main event loop
sio.wait()
