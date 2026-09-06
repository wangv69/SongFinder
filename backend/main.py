import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import requests

load_dotenv()

app = Flask(__name__)
CORS(app)

ACCESS_TOKEN = os.getenv("GENIUS_ACCESS_TOKEN")

@app.route('/')
def test():
    userLyrics = request.args.get('query')

    if not userLyrics: 
        return jsonify({"message": "Input cannot be empty!"})

    url = f"https://api.genius.com/search?q={userLyrics}"
    headers = {
        "Authorization" : f"Bearer {ACCESS_TOKEN}"
    }

    try:
        response = requests.get(url, headers=headers)
        data = response.json()
        hits = data.get("response", {}).get("hits", [])

        if(hits):
            best_match = hits[0]["result"]

            return jsonify({
                "title": best_match["title"],
                "artist": best_match["artist_names"]
            })
        else:
            return jsonify({error: "No songs found for those lyrics"}), 404
    except:
        return jsonify({"error": "Something went wrong connecting to Genius."}),500

if __name__ == '__main__':
    app.run(debug=True, port=5001)