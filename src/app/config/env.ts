import dotenv from "dotenv";
import { number } from "zod";
dotenv.config();

interface EnvConfig {
  PORT: Number;
  DB_URL: string;
  NODE_ENV: string;
  JWT_ACCESS_SECRET: string;
  JWT_ACCESS_EXPIER: string;
  BCRYPT_SALT_ROUND: number;
  SECRETE: string;
  SUPERADMIN_EMAIL: string;
  SUPERADMIN_PASSWORD: string;
  JWTREFRESH_SECRETE: string;
  JWTREFRESH_EXPIRED: string;
}
const loadEnvVar = () => {
  const requiredVars: string[] = [
    "PORT",
    "DB_URL",
    "NODE_ENV",
    "JWT_ACCESS_SECRET",
    "JWT_ACCESS_EXPIER",
    "BCRYPT_SALT_ROUND",
    "SECRETE",
    "SUPERADMIN_EMAIL",
    "SUPERADMIN_PASSWORD",
    "JWTREFRESH_SECRETE",
    "JWTREFRESH_EXPIRED",
  ];
  requiredVars.forEach((varName) => {
    if (!process.env[varName]) {
      throw new Error(`Environment variable ${varName} is not set`);
    }
  });
  return {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL || "",
    NODE_ENV: process.env.NODE_ENV || "development",
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
    JWT_ACCESS_EXPIER: process.env.JWT_ACCESS_EXPIER,
    BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND,
    SECRETE: process.env.SECRETE,
    SUPERADMIN_EMAIL: process.env.SUPERADMIN_EMAIL,
    SUPERADMIN_PASSWORD: process.env.SUPERADMIN_PASSWORD,
    JWTREFRESH_SECRETE: process.env.JWTREFRESH_SECRETE,
  JWTREFRESH_EXPIRED:process.env.JWTREFRESH_EXPIRED,
  };
};

export const envVars = loadEnvVar();
