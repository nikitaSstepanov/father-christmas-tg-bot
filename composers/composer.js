const { Composer } = require("telegraf");
const { startFunc, helpFunc, 
        sendPicture, sendVideo, 
        answerFunc, buttonSendVideo,
        buttonSendPicture} = require("../services/service");

const composer = new Composer();

composer.start(startFunc);
composer.help(helpFunc);
composer.command("video", buttonSendVideo);
composer.command("picture", buttonSendPicture);
composer.action("video", sendVideo);
composer.action("picture", sendPicture);
composer.on("message", answerFunc);

module.exports = composer;