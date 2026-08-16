class LanguageService:

    def detect(
        self,
        text
    ):

        if not text:
            return "en"

        for char in text:

            if "\u0980" <= char <= "\u09FF":
                return "bn"

            if "\u0900" <= char <= "\u097F":
                return "hi"

        return "en"