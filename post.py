import requests
import json

data = {
        'ids': [12, 3, 4, 5, 6, 11]
}

url = 'https://113bfa81.ngrok.io'
headers = {'content-type': 'application/json'}

response = requests.post(url, json=data, headers=headers)
