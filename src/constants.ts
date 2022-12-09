export const PORT = process.env.PORT || 30001;

/* TOKENS */
export const ACCESS_TOKEN = process.env.ACCESS_TOKEN || "access-token";
export const REFRESH_TOKEN = process.env.REFRESH_TOKEN || "refresh-token";
export const ACCESS_TOKEN_EXPIRATION_TIME_MS = 1000 * 60 * 60; // 1 hour
export const REFRESH_TOKEN_EXPIRATION_TIME_MS = 1000 * 60 * 60 * 24 * 10; // 10 days

/* MAIL SERVICE */
export const MAIL_SERVICE_HOST = process.env.MAIL_SERVICE_HOST || 'smtp.mail.ru';
export const MAIL_SERVICE_PORT = +process.env.MAIL_SERVICE_PORT || 465;
export const MAIL_SERVICE_USERNAME = process.env.MAIL_SERVICE_USERNAME || 'abc@mail.ru';
export const MAIL_SERVICE_PASSWORD = process.env.MAIL_SERVICE_PASSWORD || 'password';

/* TELEGRAM BOT SERVICE */
export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || 'tg-bot-token';
