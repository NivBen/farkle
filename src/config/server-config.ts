import env from "./env";

const SERVER_HOST = process.env.HOST || "localhost";
const SERVER_PORT = process.env.PORT || 3000;
const ALLOWED_ORIGIN = env.allowedOrigin();
export const allowedHeaders = [
  "Origin",
  "X-Requested-With",
  "Content-Type",
  "Accept",
  "Authorization",
];
export const methods = ["GET", "OPTIONS", "POST", "PUT", "PATCH", "DELETE"];

const SERVER = {
  hostName: SERVER_HOST,
  port: SERVER_PORT,
  allowedOrigin: ALLOWED_ORIGIN,
  corsOptions: env.devEnv()
    ? {
        allowedHeaders,
        methods: ["GET", "OPTIONS", "POST", "PUT", "PATCH", "DELETE"],
        origin: ALLOWED_ORIGIN,
      }
    : undefined,
  ioOptions: {
    pingInterval: 2000,
    pingTimeout: 5000,
    cors: env.devEnv() ? { origin: ALLOWED_ORIGIN } : undefined,
  },
};

export const serverConfig = {
  server: SERVER,
};
