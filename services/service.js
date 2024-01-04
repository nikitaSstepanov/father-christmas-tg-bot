const { Markup } = require("telegraf");
const { startText, helpText, answerText } = require("../content/text/text");
const { createReadStream, readdirSync, readFileSync } = require("fs");
const { resolve } = require("path");

const startFunc = async (ctx) => {
    await ctx.reply(startText(ctx), Markup.inlineKeyboard([
        [Markup.button.callback("Video greetings 🎥", "video")],
        [Markup.button.callback("Postcard greetings 💌", "picture")],
    ]));
}

const helpFunc = async (ctx) => {
    await ctx.reply(helpText(ctx));
}

const answerFunc = async (ctx) => {
    await ctx.reply(answerText(ctx));
}

const sendVideo = async (ctx) => {
    await ctx.answerCbQuery();
    const videos = readdirSync(resolve(__dirname, "..", "content", "videos"));
    const videoIndex = Math.floor(Math.random() * videos.length);
    const videoName = videos[videoIndex];
    const video = [{
        type: "video",
        media: { source: createReadStream(resolve(__dirname, "..", "content", "videos", videoName)) },
        caption: "<b>Happy New Year!</b>",
        parse_mode: "HTML"
    }]
    await ctx.replyWithMediaGroup(video);
}

const buttonSendVideo = async (ctx) => {
    const videos = readdirSync(resolve(__dirname, "..", "content", "videos"));
    const videoIndex = Math.floor(Math.random() * videos.length);
    const videoName = videos[videoIndex];
    const video = [{
        type: "video",
        media: { source: createReadStream(resolve(__dirname, "..", "content", "videos", videoName)) },
        caption: "<b>Happy New Year!</b>",
        parse_mode: "HTML"
    }]
    await ctx.replyWithMediaGroup(video);
}

const sendPicture = async (ctx) => {
    await ctx.answerCbQuery();
    const photos = readdirSync(resolve(__dirname, "..", "content", "pictures"));
    const photoIndex = Math.floor(Math.random() * photos.length);
    const photoName = photos[photoIndex];
    const photo = [{
        type: "photo",
        media: { source: createReadStream(resolve(__dirname, "..", "content", "pictures", photoName)) },
        caption: "<b>Happy New Year!</b>",
        parse_mode: "HTML"
    }]
    await ctx.replyWithMediaGroup(photo);
}

const buttonSendPicture = async (ctx) => {
    const photos = readdirSync(resolve(__dirname, "..", "content", "pictures"));
    const photoIndex = Math.floor(Math.random() * photos.length);
    const photoName = photos[photoIndex];
    const photo = [{
        type: "photo",
        media: { source: createReadStream(resolve(__dirname, "..", "content", "pictures", photoName)) },
        caption: "<b>Happy New Year!</b>",
        parse_mode: "HTML"
    }]
    await ctx.replyWithMediaGroup(photo);
}

module.exports = {
    startFunc,
    helpFunc,
    answerFunc,
    sendVideo,
    buttonSendVideo,
    sendPicture,
    buttonSendPicture,
};
