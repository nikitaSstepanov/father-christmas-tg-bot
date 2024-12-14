import { Composer } from "telegraf"
import * as service from "../service/service";

const composer = new Composer();

composer.start(service.startFunc);
composer.help(service.helpFunc);

composer.command("video", service.commandSendVideo);
composer.command("picture", service.commandSendPicture);

composer.action("video", service.buttonSendVideo);
composer.action("picture", service.buttonSendPicture);

composer.on("message", service.answerFunc);

export default composer;
