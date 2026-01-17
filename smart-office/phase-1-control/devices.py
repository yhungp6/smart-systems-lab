

devices = {
    "light" : False,
    "fan" : False,
    "door" : False
}

def toggle_device(name):
    if name in devices:
        devices[name] = not devices[name]
    return devices