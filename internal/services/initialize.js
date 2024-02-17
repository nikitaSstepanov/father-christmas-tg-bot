const { existsSync, mkdirSync } = require("fs");
const { resolve } = require("path");


const initFolders = async () => {
    const photosPath = resolve(__dirname, "..", "..", "content", "photos");
    const videosPath = resolve(__dirname, "..", "..", "content", "videos");

    if (!existsSync(photosPath)) {
        mkdirSync(photosPath);
    }

    if (!existsSync(videosPath)) {
        mkdirSync(videosPath);
    }
    
}

module.exports = {
    initFolders,
};