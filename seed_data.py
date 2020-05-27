from noaa_sdk import noaa
n = noaa.NOAA()
cordinate = n.points_forecast(40.7314, -73.8656, hourly=False)
print(cordinate)