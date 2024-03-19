import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { storage } from "@vendetta/plugin";
import Settings from "./Settings";

const Messages = findByProps("sendMessage", "receiveMessage");

let unpatch;

const replacements = [
  {
    id: "convertInstagram",
    regex: /https:\/\/www\.instagram\.com\/(p\/|reel\/)[^ ]+/g,
    replacement: "https://www.ddinstagram.com/$1",
  },
  {
    id: "convertTwitter",
    regex: /https:\/\/twitter\.com\/[^ ]+/g,
    replacement: "https://fxtwitter.com/",
  },
  {
    id: "convertX",
    regex: /https:\/\/x\.com\/[^ ]+/g,
    replacement: "https://fixupx.com/",
  },
  {
    id: "convertTiktok",
    regex: /https:\/\/(?:www\.)?tiktok\.com\/[^ ]+/g,
    replacement: "https://tnktok.com/",
  },
  {
    id: "convertBsky",
    regex: /https:\/\/bsky\.app\//g,
    replacement: "https://bsyy.app/",
  },
  {
    id: "convertThreads",
    regex: /https:\/\/(www\.)?threads\.net\//g,
    replacement: "https://www.vxthreads.net/",
  },
  {
    id: "convertReddit",
    regex: /https:\/\/(www\.|new\.)?reddit\.com\//g,
    replacement: "https://www.rxddit.com/",
  },
];

export default {
  onLoad: () => {
    unpatch = before("sendMessage", Messages, (args) => {
      let content = args[1].content as string;

      for (const { id, regex, replacement } of replacements) {
        if (storage[id]) {
          content = content.replace(regex, replacement);
        }
      }

      args[1].content = content;
    });
  },
  onUnload: () => {
    unpatch();
  },
  settings: Settings,
};