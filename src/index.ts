import instagramPatch from "./patches/sendMessage";

export default {
   onLoad: () => {
      instagramPatch();
   },
   onUnload: () => {
      // Add any necessary cleanup logic here
   }
};