import { Forms } from "@vendetta/ui/components";
import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";

const { FormSection, FormSwitch } = Forms;

export default () => {
  useProxy(storage);

  storage.instagramEnabled ??= true;
  storage.twitterEnabled ??= true;
  storage.xEnabled ??= true;
  storage.tiktokEnabled ??= true;

  return (
    <>
      <FormSection title="Settings">
        <FormSwitch
          label="Enable BetterInstagramEmbeds"
          subLabel="Replace Instagram embeds with ddinstagram embeds"
          value={storage.instagramEnabled}
          onValueChange={(value: boolean) => {
            storage.instagramEnabled = value;
          }}
        />
        <FormSwitch
          label="Enable BetterTwitterEmbeds"
          subLabel="Replace Twitter embeds with fxtwitter embeds"
          value={storage.twitterEnabled}
          onValueChange={(value: boolean) => {
            storage.twitterEnabled = value;
          }}
        />
        <FormSwitch
          label="Enable BetterXEmbeds"
          subLabel="Replace X embeds with fixupx embeds"
          value={storage.xEnabled}
          onValueChange={(value: boolean) => {
            storage.xEnabled = value;
          }}
        />
        <FormSwitch
          label="Enable BetterTikTokEmbeds"
          subLabel="Replace TikTok embeds with tnktok embeds"
          value={storage.tiktokEnabled}
          onValueChange={(value: boolean) => {
            storage.tiktokEnabled = value;
          }}
        />
      </FormSection>
    </>
  );
};