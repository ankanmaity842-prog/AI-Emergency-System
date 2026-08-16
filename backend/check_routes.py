from app import app

for route in app.routes:
    methods = getattr(route, "methods", None)

    if methods:
        print(route.path, methods)
    else:
        print(route.path, "WEBSOCKET")