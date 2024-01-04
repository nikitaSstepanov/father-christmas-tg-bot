const { Telegraf } = require("telegraf");
const { config } = require("dotenv");
config({ path: "./.env" });

const TOKEN = process.env.TG_TOKEN;
const bot = new Telegraf(TOKEN);

bot.use(require("./composers/composer"));

bot.launch();