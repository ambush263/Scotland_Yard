from flask import Flask 
from flask import request

app = Flask(__name__)

@app.route("/pass-lobby")
def store():
    data = request.get_json(force=True,silent=True)
    print(data)

if __name__ == "__main__":
    app.run(debug=True)