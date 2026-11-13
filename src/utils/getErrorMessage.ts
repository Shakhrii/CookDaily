import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type QueryError = FetchBaseQueryError | SerializedError | undefined;
const DEFAULT_MESSAGE = 'Что-то пошло не так. Попробуйте ещё раз';

function hasMessage(data: unknown): data is { message: string } {
  return (
    typeof data === 'object' &&
    data !== null &&
    'message' in data &&
    typeof (data as { message: unknown }).message === 'string'
  );
}


export function getErrorMessage(error: QueryError, statusMessages: Record<number, string> = {},): string {
  if (!error) return '';
  if ('status' in error) {
    if (error.status === 'FETCH_ERROR') {
      return 'Не удалось подключиться. Проверьте интернет и попробуйте снова';
    }
    if (error.status === 'TIMEOUT_ERROR') {
      return 'Сервер не отвечает. Попробуйте позже';
    }
    if (typeof error.status === 'number') {
      if (statusMessages[error.status]) return statusMessages[error.status];
      if (error.status >= 500) return 'Ошибка сервера. Попробуйте позже';
    }

    if (hasMessage(error.data)) return error.data.message;
    return DEFAULT_MESSAGE;
  }

  return error.message ?? DEFAULT_MESSAGE;
}