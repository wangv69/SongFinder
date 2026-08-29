from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def test():
    user_lyrics = request.args.get('query')

    if not user_lyrics: 
        return jsonify({"message": "Input cannot be empty!"})

    return jsonify({"message": "Lyrics Received: " + user_lyrics})

if __name__ == '__main__':
    app.run(debug=True, port=5001)