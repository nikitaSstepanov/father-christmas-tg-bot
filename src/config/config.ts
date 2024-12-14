import * as dotenv from "dotenv";

export interface Config {
    token: string;
}

export function GetConfig(envPath: string): Config {
    dotenv.config({ path: envPath });
    
    let token = process.env.TG_TOKEN;

    if (token === undefined) {
        throw new Error("Telegram token should not be empty")
    }

    const config: Config = {
        token: token,
    };

    return config;
}
