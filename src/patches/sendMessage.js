import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";

const Messages = findByProps("sendMessage", "receiveMessage");

export default () => {
   return before("sendMessage", Messages, (args) => {
      const content = args[1].content;
      const instagramRegex = /https:\/\/www\.instagram\.com\/(p\/|reel\/)[^ ]+/g;
      if (instagramRegex.test(content)) {
         args[1].content = content.replace(
            instagramRegex,
            (match) => match.replace("https://www.instagram.com", "https://www.ddinstagram.com")
         );
      }
   });
};