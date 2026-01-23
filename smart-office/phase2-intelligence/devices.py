
import time


devices = {
    "light" : {"state": False, "last_changed": time.time()},
    "fan" : {"state": False, "last_change": time.time()},
    "door" : {"state": False, "last_changed": time.time()}
}

def toggle_device(name):
    if name in devices:
        devices[name]["state"] = not devices[name]["state"]
        devices[name]["last_changed"]= time.time()
    return devices



def apply_rules():
    now = time.time()

    # Rule 1: Auto turn off light after 10 sec
    if devices["light"]["state"] and now - devices["light"]["last_changed"] > 10:
        devices["light"]["state"] = False 
    
    # Rule 2: Auto close door after 5 sec
    if devices["door"]["state"] and now - devices["door"]["last_changed"] > 5:
        devices["door"]["state"] = False

    # Rule 3: Prevent fan overuse (15 sec)
    if devices["fan"]["state"] and now - devices["fan"]["last_changed"] > 15:
        devices["fan"]["state"] = False