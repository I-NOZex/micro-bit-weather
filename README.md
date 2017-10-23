# micro-bit-weather
micro:bit Weather Information

Let's create a weather information display with micro:bit, Google Sheets and Openweathermap.
"31c - Clouds" - current temperature is 31 Celsius and partly cloudy.

1.Get the current weather information from Openweathermap and register the "Current weather data" API.
2.Create Google Sheets script to fetch the data from Openweathermap.
3.Schedule a trigger to update the data every minute.
4.Publish the data to web. Click "File" > "Publish to Web" and get the link URL: https://docs.google.com/…/1pFKqvw2ZAN5mD9ecy36ZBqnMJS…/edit…
5.Create the WebBluetooth HTML5 app with micro:bit Button Service and LED service:
a. Create a function to fetch the data every minute from step 4.
Show the "temp" and "weather" information.
b. Register button A and B listener.
Button A to show the minimum temperature; Button B to show the maximum temperature.

Source code:
https://github.com/ferrygun/micro-bit-weather

The good thing with this setup is I don't need any additional hardware (like Raspberry Pi/Arduino).
Instead of driving LEDs, you can drive others too like motor, relay, etc.

https://youtu.be/RclRI7Z4UAA
