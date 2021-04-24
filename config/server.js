module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4c9f5dcd729faa53b4d2cf268bef5fa6'),
    },
    
  },
});
