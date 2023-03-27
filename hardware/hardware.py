from event_manager import *
from mqtt import *
import time
from yolobit import *
button_a.on_pressed = None
button_b.on_pressed = None
button_a.on_pressed_ab = button_b.on_pressed_ab = -1
import music
from aiot_rgbled import RGBLed

event_manager.reset()

def on_event_timer_callback_S_d_J_C_f():
  global LUX, threshold, th_C3_B4ng_tin, mode, last_detection, accessible, name, list2, lock_status
  mqtt.publish('hardware-status.light-intensity', LUX)

event_manager.add_timer_event(3000, on_event_timer_callback_S_d_J_C_f)

# Sync variables with server when initializing them
def Sync_Variables_With_Server():
  global LUX, th_C3_B4ng_tin, threshold, mode, last_detection, accessible, name, lock_status, tiny_rgb
  mqtt.publish('hardware-status.light-intensity', LUX)
  mqtt.publish('Thresholds', threshold)
  mqtt.publish('Mode', mode)
  mqtt.publish('hardware-status.lock-status', lock_status)

# Connect to WiFi and Adafruit Server
def Connect_to_WiFi_and_Server():
  global LUX, th_C3_B4ng_tin, threshold, mode, last_detection, accessible, name, lock_status, tiny_rgb
  mqtt.connect_wifi('UTS_709_IoT', 'uts709iot')
  mqtt.connect_broker(server='io.adafruit.com', port=1883, username='minhduco19', password='aio_IqzW14sPU7NdyGYDvDjh09MBlZoI')

def on_mqtt_message_receive_callback__Mode_(th_C3_B4ng_tin):
  global LUX, threshold, mode, last_detection, accessible, name, list2, lock_status
  if th_C3_B4ng_tin == '1':
    mode = 1
  else:
    mode = 0

def on_mqtt_message_receive_callback__Detect_History_(th_C3_B4ng_tin):
  global LUX, threshold, mode, last_detection, accessible, name, list2, lock_status
  last_detection = th_C3_B4ng_tin.split(';')
  name = last_detection[0]
  accessible = last_detection[1]
  print(str(name) + str(' ' + str(accessible)))
  if mode == 1:
    if accessible == '1':
      lock_status = 1
      mqtt.publish('hardware-status.lock-status', lock_status)
      mqtt.publish('Access Log', (str(name) + ' has accessed into the room'))
    else:
      lock_status = 0
      mqtt.publish('hardware-status.lock-status', lock_status)
      mqtt.publish('Access Log', 'This person is not accessible')

def on_mqtt_message_receive_callback__hardware_status_lock_status_(th_C3_B4ng_tin):
  global LUX, threshold, mode, last_detection, accessible, name, list2, lock_status
  lock_status = int(th_C3_B4ng_tin)
  if lock_status == 1:
    pin0.write_digital((1))
    music.play(music.POWER_UP, wait=False)
  else:
    pin0.write_digital((0))
    music.play(music.POWER_DOWN, wait=False)

def on_mqtt_message_receive_callback__Thresholds_(th_C3_B4ng_tin):
  global LUX, threshold, mode, last_detection, accessible, name, list2, lock_status
  threshold = int(th_C3_B4ng_tin)
  print('New Threshold: ' + str(threshold))

# Update params from server
def Server_Listener():
  global LUX, th_C3_B4ng_tin, threshold, mode, last_detection, accessible, name, lock_status, tiny_rgb
  mqtt.on_receive_message('Mode', on_mqtt_message_receive_callback__Mode_)
  mqtt.on_receive_message('Detect History', on_mqtt_message_receive_callback__Detect_History_)
  mqtt.on_receive_message('hardware-status.lock-status', on_mqtt_message_receive_callback__hardware_status_lock_status_)
  mqtt.on_receive_message('Thresholds', on_mqtt_message_receive_callback__Thresholds_)

# Initialize variables
def Init_Variables():
  global LUX, th_C3_B4ng_tin, threshold, mode, last_detection, accessible, name, lock_status, tiny_rgb
  LUX = 0
  threshold = -1
  mode = 1
  accessible = 'NULL'
  name = 'NULL'
  lock_status = 0

tiny_rgb = RGBLed(pin14.pin, 4)

# Control LED 4 RGB
def LED_Controller():
  global LUX, th_C3_B4ng_tin, threshold, mode, last_detection, accessible, name, lock_status, tiny_rgb
  LUX = pin1.read_analog()
  if LUX <= threshold:
    tiny_rgb.show(0, hex_to_rgb('#ffffff'))
  else:
    tiny_rgb.show(0, hex_to_rgb('#000000'))

if True:
  Connect_to_WiFi_and_Server()
  Init_Variables()
  Server_Listener()
  Sync_Variables_With_Server()

while True:
  LED_Controller()
  event_manager.run()
  mqtt.check_message()
  time.sleep_ms(500)
