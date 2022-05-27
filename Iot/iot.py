import time
import Adafruit_DHT
import requests

sensor = Adafruit_DHT.DHT22
pin = 27
try:
    humidity = []
    count = 0
    h_avg = 0
    print("start to measure!" )
    while True :
        h, t = Adafruit_DHT.read_retry(sensor, pin)
        if h is not None and t is not None :
            if count >= 1 and count <=5:
                humidity.append(round(h,4))
                #print(humidity)
                print("humidity list: ", humidity)
            elif count == 6:
                h_sum = sum(humidity)
                #print(h_sum,len(humidity))
                h_avg += h_sum / len(humidity)
                print("complete to measure humidity average: ",h_avg)
                print("-------------------------------------------------")

            count += 1
            print("humidity value: ", round(h,4))
            if h_avg != 0 and h >= h_avg * 1.2:
                print("emerency!!!!")
                r = requests.patch("http://3.39.149.92:3000/parent/sensor/alert")
                #cprint(r)
                print("Temperature = {0:0.1f}*C Humidity = {1:0.1f}% avg = {2:0.1f}".format(t, h, h_avg))
                
                count = 0
                h_avg = 0
                humidity = []
        else :
            print('Read error')
        time.sleep(1)
except KeyboardInterrupt:
    print("Terminated by Keyboard")
 
finally:
    print("End of Program")