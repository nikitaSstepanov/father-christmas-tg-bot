const { startText, helpText, answerText } = require("../../content/text/text");
const { createReadStream, readdirSync } = require("fs");
const { Markup } = require("telegraf");
const { resolve } = require("path");


const startFunc = async (ctx) => {
    try {

        await ctx.reply(startText(ctx), Markup.inlineKeyboard([
            [Markup.button.callback("Video greetings 🎥", "video")],
            [Markup.button.callback("Postcard greetings 💌", "picture")],
        ]));

    } catch (e) {}
}

const helpFunc = async (ctx) => {
    try {

        await ctx.reply(helpText(ctx));

    } catch (e) {}
}

const answerFunc = async (ctx) => {
    try {

        await ctx.reply(answerText(ctx));

    } catch(e) {}
}

const sendVideo = async (ctx) => {
    try {

        const videos = readdirSync(resolve(__dirname, "..", "..", "content", "videos"));

        if (videos.length == 0) {
            await ctx.reply("List of videos is empty :(");
        } 

        const videoIndex = Math.floor(Math.random() * videos.length);
        const videoName = videos[videoIndex];

        const video = [{
            type: "video",
            media: { source: createReadStream(resolve(__dirname, "..", "..", "content", "videos", videoName)) },
            caption: "<b>Happy New Year!</b>",
            parse_mode: "HTML",
        }];
        
        await ctx.replyWithMediaGroup(video);

    } catch(e) {}
}

const commandSendVideo = async (ctx) => {
    try {

        await sendVideo(ctx);

    } catch(e) {}
}

const buttonSendVideo = async (ctx) => {
    try {
        
        await ctx.answerCbQuery();
        await sendVideo(ctx);

    } catch(e) {}
}

const sendPicture = async (ctx) => {
    try {

        const photos = readdirSync(resolve(__dirname, "..", "..", "content", "photos"));

        if (photos.length == 0) {
            await ctx.reply("List of photos is empty :(");
        }

        const photoIndex = Math.floor(Math.random() * photos.length);
        const photoName = photos[photoIndex];

        const photo = [{
            type: "photo",
            media: { source: createReadStream(resolve(__dirname, "..", "..", "content", "photos", photoName)) },
            caption: "<b>Happy New Year!</b>",
            parse_mode: "HTML",
        }];

        await ctx.replyWithMediaGroup(photo);

    } catch(e) {}
}

const commandSendPicture = async (ctx) => {
    try {

        await sendPicture(ctx);

    } catch(e) {}
}

const buttonSendPicture = async (ctx) => {
    try {

        await ctx.answerCbQuery();
        await sendPicture(ctx);

    } catch(e) {}
}


module.exports = {
    startFunc,
    helpFunc,
    answerFunc,
    commandSendVideo,
    buttonSendVideo,
    commandSendPicture,
    buttonSendPicture,
};
