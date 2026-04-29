from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

events = []

@app.route('/')
def home():
    return "Backend Working"

@app.route('/events', methods=['GET'])
def get_events():
    return jsonify(events)

@app.route('/create-event', methods=['POST'])
def create_event():
    data = request.get_json()
    events.append({
        "title": data.get("title"),
        "date": data.get("date")
    })
    return jsonify({"message": "Event created"})

@app.route('/add-test')
def add_test():
    events.append({
        "title": "Test Event",
        "date": "2026-05-01"
    })
    return "Test event added"

if __name__ == '__main__':
    app.run(debug=True)