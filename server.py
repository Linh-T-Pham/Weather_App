from jinja2 import StrictUndefined
from flask import Flask, render_template, request, flash, redirect, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension
import json
import requests
from noaa_sdk import noaa


app = Flask(__name__)

# Required to use Flask sessions and the debug toolbar
app.secret_key = "ABC"

app.jinja_env.undefined = StrictUndefined





@app.route('/')
def create_homepage():

    latitude = request.args.get('latitude')
    longitude = request.args.get('longitude')
    n = noaa.NOAA()
    cordinate_api = n.points_forecast(latitude, longitude, hourly=False)
    # print(cordinate_api)
    # print(cordinate)
    # api_request = requests.get("https://api.weather.gov/points/" + str(latitude) + "," + str(longitude))
    cordinate_api = api_request.json()
    return render_template("cordinate.html", latitude=latitude, longitude=longitude, cordinate_api=cordinate_api)







if __name__ == "__main__":

    # Do not debug for demo
    app.debug = True

    # connect_to_db(app)

    # Use the DebugToolbar
    DebugToolbarExtension(app)

    app.run(host="0.0.0.0")