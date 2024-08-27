module.exports = {
    apps: [{
        name: "bot",
        script: "./dist/main.js",
        watch: true,
        ignore_watch: ["database.json", "node_modules", "state"],
        cron_restart: "*/30 * * * *"
    }]
};