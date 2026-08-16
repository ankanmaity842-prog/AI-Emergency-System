class AuthenticationError(Exception):
    pass


class AuthorizationError(Exception):
    pass


class InvalidTokenError(Exception):
    pass


class GeminiServiceError(Exception):
    pass


class InvalidImageError(Exception):
    pass


class InvalidAudioError(Exception):
    pass


class IncidentNotFoundError(Exception):
    pass


class ReportGenerationError(Exception):
    pass


class ValidationError(Exception):
    pass