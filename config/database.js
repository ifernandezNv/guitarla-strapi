module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf098epa6gdm8jvpenog-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_6swi'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'nZIKMtV8ltHi6w891Sc3HBOcz1XXJFWc'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
