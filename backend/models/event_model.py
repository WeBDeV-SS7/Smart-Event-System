class Event:
    def __init__(self, id, name, date):
        self.id = id
        self.name = name
        self.date = date

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "date": self.date
        }