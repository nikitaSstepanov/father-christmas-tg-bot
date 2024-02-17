const { Telegraf } = require("telegraf");
const { initFolders } = require("./internal/services/initialize");
const { config } = require("dotenv");
config({ path: "./.env" });

initFolders();

const TOKEN = process.env.TG_TOKEN;
const bot = new Telegraf(TOKEN);

bot.use(require("./internal/controllers/controller"));

bot.launch();