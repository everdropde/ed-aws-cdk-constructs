def handler(event, context):
    event = event
    records = event.get("Records")
    for record in records:
        print(record)
    return {
        "statusCode": 200,
        "headers": {"Content-Type": "text/plain"},
        "body": "ACK",
    }
