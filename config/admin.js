module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0fe1acbb583ba53cb6d6ae1f833e3887'),
  },
});
