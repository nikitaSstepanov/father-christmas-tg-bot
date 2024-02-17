const { Composer } = require("telegraf");
const { startFunc, helpFunc, 
        commandSendPicture, commandSendVideo, 
        answerFunc, buttonSendVideo,
        buttonSendPicture } = require("../services/service");


const composer = new Composer();

composer.start(startFunc);
composer.help(helpFunc);
composer.command("video", commandSendVideo);
composer.command("picture", commandSendPicture);
composer.action("video", buttonSendVideo);
composer.action("picture", buttonSendPicture);
composer.on("message", answerFunc);

module.exports = composer;