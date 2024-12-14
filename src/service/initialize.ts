import { existsSync, mkdirSync } from "fs";
import { resolve } from "path";

export const initFolders = async (): Promise<void> => {
    const photosPath: string = resolve(__dirname, "..", "..", "..", "content", "photos");
    const videosPath: string = resolve(__dirname, "..", "..", "..", "content", "videos");

    if (!existsSync(photosPath)) {
        mkdirSync(photosPath);
    }

    if (!existsSync(videosPath)) {
        mkdirSync(videosPath);
    }
}
