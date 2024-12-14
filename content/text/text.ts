
export const startText = (ctx: any): string => {
    return `Ho! Ho! Ho! 🎅 Hello, dear ${ctx.update.message.from.first_name}, I am glad to welcome you to my bot. Here you can get a Happy New Year 🎄 greeting from me in any form: text, video, or postcard. Press the right button or write me a New Year's letter 😉`;
}

export const helpText = (ctx: any): string => {
    return `Dear ${ctx.update.message.from.first_name}, if you have any problems, write to the e-mail. I will respond as soon as I can 🎅`;
}

export const answerText = (ctx: any): string => {
    return `Dear ${ctx.update.message.from.first_name},\n\nI want to wish you a Happy New Year! May your homes be filled with warmth and joy, and may your hearts be filled with love and happiness. I hope that the new year brings you many wonderful adventures, exciting experiences, and lots of laughter. May all your dreams come true and may you be surrounded by the love of family and friends.\n\nWith love,\nFather Christmas 🎅`;
}
