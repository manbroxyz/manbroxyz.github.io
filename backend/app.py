import json
from flask import Flask, request
app = Flask(__name__)

# lb = leaderboard

main_path = "/backend/"
lb_path = "leaderboard.json"

@app.route(main_path + "click", methods = ["POST"])
def click():
    name = request.get_data()
    with open(lb_path, "r") as lb_file:
        lb_object = json.load(lb_file)
        in_leaderboard = False

        for key in lb_object["users"].keys():
            if key == name:
                in_leaderboard = True

        if in_leaderboard:
            lb_object["users"][name] += 1
        else:
            lb_object["users"][name] = 1
    with open(lb_path, "w") as lb_file:
        json.dump(lb_path, indent=4)

        


@app.route(main_path + "clicks/<name>")
def clicks(name):
    with open(lb_path, "w") as lb_file:
        lb_object = json.load(lb_file)
        