import * as telegraf from "telegraf";
import { initFolders } from "./service/initialize";
import composer from "./controller/controller";
import { Config, GetConfig } from "./config/config";
import { resolve } from "path";

const envPath: string = resolve(__dirname, "..", "..", ".env");

async function setupApp(cfg: Config): Promise<void> {
    await initFolders();
}

async function bootstrap(): Promise<void> {
    const cfg = GetConfig(envPath);
    await setupApp(cfg);

    const TOKEN = cfg.token;
    const bot = new telegraf.Telegraf(TOKEN);

    bot.use(composer);

    console.log("Bot is started.")

    await bot.launch();
}

bootstrap();
