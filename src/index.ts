import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import Settings from "./Settings";

const Messages = findByProps("sendMessage", "receiveMessage");

let unpatch;

export default {
    onLoad: () => {
        unpatch = before("sendMessage", Messages, (args) => {
            const content = args[1].content as string;
            const instagramRegex = /https:\/\/www\.instagram\.com\/(p\/|reel\/)[^ ]+/g;
            if (instagramRegex.test(content)) {
                args[1].content = content.replace(
                    instagramRegex,
                    (match) => match.replace("https://www.instagram.com", "https://www.ddinstagram.com")
                );
            }
        });
    },
    onUnload: () => {
        unpatch();
    },
    settings: Settings,
}