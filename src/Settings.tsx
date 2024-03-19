import { React } from "@vendetta/metro/common";
import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";
import { General, Forms } from "@vendetta/ui/components";

const { ScrollView, View } = General;
const { FormRow, FormSwitch, FormSection, FormDivider } = Forms;

const switches = [
  {
    id: "convertInstagram",
    default: true,
    label: "Enable BetterInstagramEmbeds",
    subLabel: "Replace Instagram embeds with ddinstagram embeds",
  },
  {
    id: "convertTwitter",
    default: true,
    label: "Enable BetterTwitterEmbeds",
    subLabel: "Replace Twitter embeds with fxtwitter embeds",
  },
  {
    id: "convertX",
    default: true,
    label: "Enable BetterXEmbeds",
    subLabel: "Replace X embeds with fixupx embeds",
  },
  {
    id: "convertTiktok",
    default: true,
    label: "Enable BetterTikTokEmbeds",
    subLabel: "Replace TikTok embeds with tnktok embeds",
  },
  {
    id: "convertBsky",
    default: true,
    label: "Enable BetterBskyEmbeds",
    subLabel: "Replace Bsky embeds with bsyy embeds",
  },
  {
    id: "convertThreads",
    default: true,
    label: "Enable BetterThreadsEmbeds",
    subLabel: "Replace Threads embeds with vxthreads embeds",
  },
  {
    id: "convertReddit",
    default: true,
    label: "Enable BetterRedditEmbeds",
    subLabel: "Replace Reddit embeds with rxddit embeds",
  },
];

export default () => {
  useProxy(storage);

  for (const { id, default: defaultValue } of switches) {
    storage[id] ??= defaultValue;
  }

  return (
    <ScrollView>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <FormSection title="Plugin Settings">
          {switches.map((p, i) => (
            <React.Fragment key={p.id}>
              <FormRow
                label={p.label}
                subLabel={p.subLabel}
                trailing={
                  <FormSwitch
                    value={storage[p.id] ?? p.default}
                    onValueChange={(value) => (storage[p.id] = value)}
                  />
                }
              />
              {i !== switches.length - 1 && <FormDivider />}
            </React.Fragment>
          ))}
        </FormSection>
      </View>
    </ScrollView>
  );
};