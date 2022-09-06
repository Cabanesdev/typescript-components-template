import 'dotenv/config';

const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    url: process.env.DATABASE_URL || 'mongodb://mongo:27017/template',
  },
};

export default config;
