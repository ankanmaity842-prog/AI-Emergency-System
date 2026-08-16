import json



def parse_json(
    response
):

    try:

        return json.loads(
            response
        )

    except Exception:

        return {

            "response":
            response

        }



def clean_text(
    text
):

    return text.strip()