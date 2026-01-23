
from flask import Flask, jsonify, render_template
from devices import toggle_device, devices, apply_rules

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/status")
def status():
    apply_rules()
    return jsonify({ k: v["state"] for k, v in devices.items()})


@app.route("/toggle/<device>")
def toggle(device):
    updated = toggle_device(device)
    return jsonify({k: v["state"] for k, v in updated.items()})


if __name__ == "__main__":
    app.run(debug=True)