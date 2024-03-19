import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { storage } from "@vendetta/plugin";
import Settings from "./Settings";

const Messages = findByProps("sendMessage", "receiveMessage");

let unpatch;

export default {
  onLoad: () => {
    unpatch = before("sendMessage", Messages, (args) => {
      const content = args[1].content as string;

      if (storage.instagramEnabled) {
        const instagramRegex = /https:\/\/www\.instagram\.com\/(p\/|reel\/)[^ ]+/g;
        if (instagramRegex.test(content)) {
          args[1].content = content.replace(
            instagramRegex,
            (match) => match.replace("https://www.instagram.com", "https://www.ddinstagram.com")
          );
        }
      }

      if (storage.twitterEnabled) {
        const twitterRegex = /https:\/\/twitter\.com\/[^ ]+/g;
        if (twitterRegex.test(content)) {
          args[1].content = content.replace(
            twitterRegex,
            (match) => match.replace("https://twitter.com", "https://fxtwitter.com")
          );
        }
      }

      if (storage.xEnabled) {
        const xRegex = /https:\/\/x\.com\/[^ ]+/g;
        if (xRegex.test(content)) {
          args[1].content = content.replace(
            xRegex,
            (match) => match.replace("https://x.com", "https://fixupx.com")
          );
        }
      }

      if (storage.tiktokEnabled) {
        const tiktokRegex = /https:\/\/(?:www\.)?tiktok\.com\/[^ ]+/g;
        if (tiktokRegex.test(content)) {
          args[1].content = content.replace(
            tiktokRegex,
            (match) => match.replace(/https:\/\/(?:www\.)?tiktok\.com/, "https://tnktok.com")
          );
        }
      }
    });
  },
  onUnload: () => {
    unpatch();
  },
  settings: Settings,
};