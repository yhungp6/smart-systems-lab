
from flask import Flask, jsonify, render_template
from devices import toggle_device, devices

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/status")
def status():
    return jsonify(devices)


@app.route("/toggle/<device>")
def toggle(device):
    updated = toggle_device(device)
    return jsonify(updated)


if __name__ == "__main__":
    app.run(debug=True)