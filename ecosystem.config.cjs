// ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: "slovak-gdp-landing",
      script: "node",
      args: "./node_modules/.bin/next start -p 3000 -H 0.0.0.0",

      instances: 1,
      exec_mode: "fork",
      watch: false,
      autorestart: true,
      max_memory_restart: "500M",

      time: true,
      error_file: "logs/pm2.err.log",
      out_file: "logs/pm2.out.log",
      merge_logs: true,
    },
  ],
};
