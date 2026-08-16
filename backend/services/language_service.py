import re


class LanguageService:

    AFFIRMATIVE_TERMS = {
        "en": {
            "yes",
            "yeah",
            "yep",
            "yup",
            "sure",
            "okay",
            "ok",
            "correct",
            "right",
            "true",
            "indeed",
            "absolutely",
            "definitely",
        },

        "hi": {
            "haan",
            "ha",
            "haa",
            "han",
            "hmm haan",
            "haan ji",
            "ji haan",
            "bilkul",
            "zaroor",
            "theek hai",
            "thik hai",
            "sahi hai",
        },

        "bn": {
            "ha",
            "haa",
            "haan",
            "hya",
            "হ্যাঁ",
            "হ্যা",
            "জি",
            "জী",
            "অবশ্যই",
            "ঠিক আছে",
            "হ্যাঁ জি",
        },
    }

    NEGATIVE_TERMS = {
        "en": {
            "no",
            "nope",
            "nah",
            "never",
            "not",
            "negative",
        },

        "hi": {
            "nahi",
            "nahin",
            "na",
            "naa",
            "no",
            "nope",
            "nahi ji",
            "nahin ji",
            "bilkul nahi",
        },

        "bn": {
            "na",
            "naa",
            "nei",
            "ney",
            "না",
            "নাহ",
            "নেই",
            "না জি",
            "একদম না",
        },
    }

    def normalize(self, text):
        if not text:
            return ""

        text = text.lower().strip()

        text = re.sub(
            r"[^\w\s\u0980-\u09FF\u0900-\u097F]",
            " ",
            text,
        )

        text = re.sub(
            r"\s+",
            " ",
            text,
        )

        return text.strip()

    def detect(self, text):

        if not text:
            return "en"

        text = self.normalize(text)

        # Bengali script
        for char in text:
            if "\u0980" <= char <= "\u09FF":
                return "bn"

        # Hindi / Devanagari script
        for char in text:
            if "\u0900" <= char <= "\u097F":
                return "hi"

        # Romanized Hindi / Bengali
        words = set(text.split())

        hindi_words = {
            "haan",
            "ha",
            "haa",
            "han",
            "nahi",
            "nahin",
            "naa",
            "na",
            "bilkul",
            "zaroor",
            "theek",
            "thik",
            "hai",
            "ji",
        }

        bengali_words = {
            "hya",
            "ha",
            "haa",
            "haan",
            "nei",
            "naa",
            "na",
            "ache",
            "achi",
            "bhalo",
            "thik",
        }

        hindi_score = len(words.intersection(hindi_words))
        bengali_score = len(words.intersection(bengali_words))

        if hindi_score > bengali_score:
            return "hi"

        if bengali_score > hindi_score:
            return "bn"

        return "en"

    def detect_yes_no(self, text):

        if not text:
            return "unknown"

        text = self.normalize(text)

        if not text:
            return "unknown"

        # Exact phrase matching first
        affirmative_phrases = {
            "yes",
            "yeah",
            "yep",
            "yup",
            "sure",
            "okay",
            "ok",
            "haan",
            "ha",
            "haa",
            "han",
            "haan ji",
            "ji haan",
            "bilkul",
            "zaroor",
            "theek hai",
            "thik hai",
            "হ্যাঁ",
            "হ্যা",
            "জি",
            "অবশ্যই",
            "ঠিক আছে",
        }

        negative_phrases = {
            "no",
            "nope",
            "nah",
            "never",
            "nahi",
            "nahin",
            "na",
            "naa",
            "nahi ji",
            "nahin ji",
            "bilkul nahi",
            "না",
            "নাহ",
            "নেই",
            "না জি",
            "একদম না",
        }

        if text in affirmative_phrases:
            return "yes"

        if text in negative_phrases:
            return "no"

        words = set(text.split())

        yes_words = {
            "yes",
            "yeah",
            "yep",
            "yup",
            "sure",
            "okay",
            "ok",
            "haan",
            "ha",
            "haa",
            "han",
            "bilkul",
            "zaroor",
            "হ্যাঁ",
            "হ্যা",
            "জি",
            "অবশ্যই",
        }

        no_words = {
            "no",
            "nope",
            "nah",
            "never",
            "nahi",
            "nahin",
            "na",
            "naa",
            "bilkul",
            "না",
            "নাহ",
            "নেই",
        }

        yes_score = len(words.intersection(yes_words))
        no_score = len(words.intersection(no_words))

        if yes_score > no_score:
            return "yes"

        if no_score > yes_score:
            return "no"

        return "unknown"