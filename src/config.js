module.exports = {
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  PORT: process.env.PORT || 8080,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || null,
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
};

// password 3fdc7d8c9b65bce91542f0f50d1d90ad850d97b7439012d32e3901e799b3f9e7
