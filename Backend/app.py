from flask import Flask, request, jsonify
from flask_cors import CORS
from game_logic import Player, is_valid_move, execute_move, GRAPH

app = Flask(__name__)
CORS(app)

@app.route("/pass-lobby", methods=["POST"])
def store():
    data = request.get_json(force=True,silent=True)
    player_list = data.get("playerList")

if __name__ == "__main__":
    app.run(debug=True)