import { startText, helpText, answerText } from "../../content/text/text";
import { createReadStream, readdirSync } from "fs";
import { Markup } from "telegraf";
import { resolve } from "path";

export const startFunc = async (ctx: any): Promise<void> => {
    try {

        await ctx.reply(startText(ctx), Markup.inlineKeyboard([
            [Markup.button.callback("Video greetings 🎥", "video")],
            [Markup.button.callback("Postcard greetings 💌", "picture")],
        ]));

    } catch (e) {}
}

export const helpFunc = async (ctx: any): Promise<void> => {
    try {

        await ctx.reply(helpText(ctx));

    } catch (e) {}
}

export const answerFunc = async (ctx: any): Promise<void> => {
    try {

        await ctx.reply(answerText(ctx));

    } catch(e) {}
}

export const sendVideo = async (ctx: any): Promise<void> => {
    try {

        const videos = readdirSync(resolve(__dirname, "..", "..", "..", "content", "videos"));

        if (videos.length == 0) {
            await ctx.reply("List of videos is empty :(");
        } 

        const videoIndex = Math.floor(Math.random() * videos.length);
        const videoName = videos[videoIndex];

        const video = [{
            type: "video",
            media: { source: createReadStream(resolve(__dirname, "..", "..", "..", "content", "videos", videoName)) },
            caption: "<b>Happy New Year!</b>",
            parse_mode: "HTML",
        }];
        
        await ctx.replyWithMediaGroup(video);

    } catch(e) {}
}

export const commandSendVideo = async (ctx: any): Promise<void> => {
    try {

        await sendVideo(ctx);

    } catch(e) {}
}

export const buttonSendVideo = async (ctx: any): Promise<void> => {
    try {
        
        await ctx.answerCbQuery();
        await sendVideo(ctx);

    } catch(e) {}
}

export const sendPicture = async (ctx: any): Promise<void> => {
    try {

        const photos = readdirSync(resolve(__dirname, "..", "..", "..", "content", "photos"));

        if (photos.length == 0) {
            await ctx.reply("List of photos is empty :(");
        }

        const photoIndex = Math.floor(Math.random() * photos.length);
        const photoName = photos[photoIndex];

        const photo = [{
            type: "photo",
            media: { source: createReadStream(resolve(__dirname, "..", "..", "..", "content", "photos", photoName)) },
            caption: "<b>Happy New Year!</b>",
            parse_mode: "HTML",
        }];

        await ctx.replyWithMediaGroup(photo);

    } catch(e) {}
}

export const commandSendPicture = async (ctx: any): Promise<void> => {
    try {

        await sendPicture(ctx);

    } catch(e) {}
}

export const buttonSendPicture = async (ctx: any): Promise<void> => {
    try {

        await ctx.answerCbQuery();
        await sendPicture(ctx);

    } catch(e) {}
}
