import requests
import json

data = {
    "command" : {
        "action" : "GO"
    }
}

url = 'https://2c5d51ae.ngrok.io'
headers = {'content-type': 'application/json'}

response = requests.post(url, json=data, headers=headers)
