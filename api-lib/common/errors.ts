export class AppError extends Error {
  constructor (
    public name: string,
    public status: number,
    public message: string
  ) {
    super(message)
    Object.defineProperty(this, 'message', { enumerable: true })
  }
}

export class BadRequestError extends AppError {
  constructor (message: string = 'Bad Request') {
    super('Bad Request', 400, message)
  }
}

export class UnauthorizedError extends AppError {
  constructor (message: string = 'Unauthorized') {
    super('Unauthorized', 401, message)
  }
}

export class ForbiddenError extends AppError {
  constructor (message: string = 'Forbidden') {
    super('Forbidden', 403, message)
  }
}

export class NotFoundError extends AppError {
  constructor (message: string = 'Not Found') {
    super('Not Found', 404, message)
  }
}

export class TooManyRequestsError extends AppError {
  constructor (message: string = 'Too Many Requests') {
    super('Too Many Requests', 429, message)
  }
}

export class InternalServerError extends AppError {
  constructor (message: string = 'Internal Server Error') {
    super('Internal Server Error', 500, message)
  }
}
