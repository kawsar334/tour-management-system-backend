import dotenv from 'dotenv';
dotenv.config();
const loadEnvVar = () => {
    const requiredVars = ['PORT', 'DB_URL', 'NODE_ENV'];
    requiredVars.forEach((varName) => {
        if (!process.env[varName]) {
            throw new Error(`Environment variable ${varName} is not set`);
        }
    });
    return {
        PORT: process.env.PORT || 3000,
        DB_URL: process.env.DB_URL || '',
        NODE_ENV: process.env.NODE_ENV || 'development',
    };
};
export const envVars = loadEnvVar();
//# sourceMappingURL=env.js.map