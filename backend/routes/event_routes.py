from flask import Blueprint, jsonify, request

event_bp = Blueprint("event_bp", __name__)

# temporary database
events = []

# GET all events
@event_bp.route("/events", methods=["GET"])
def get_events():
    return jsonify(events)

# ADD event
@event_bp.route("/events", methods=["POST"])
def add_event():
    data = request.get_json()

    event = {
        "id": len(events) + 1,
        "name": data.get("name"),
        "date": data.get("date")
    }

    events.append(event)

    return jsonify({
        "message": "Event added successfully",
        "event": event
    })