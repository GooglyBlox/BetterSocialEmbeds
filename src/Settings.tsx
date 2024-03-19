import { constants, React, stylesheet, ReactNative as RN } from "@vendetta/metro/common";
import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";
import { General, Forms } from "@vendetta/ui/components";
import { semanticColors } from "@vendetta/ui";

const { ScrollView, View } = General;
const { FormRow, FormSwitch, FormSection, FormDivider } = Forms;

const styles = stylesheet.createThemedStyleSheet({
  text: {
    color: semanticColors.HEADER_SECONDARY,
    paddingLeft: "5.5%",
    paddingRight: 10,
    marginBottom: 10,
    letterSpacing: 0.25,
    fontFamily: constants.Fonts.PRIMARY_BOLD,
    fontSize: 16
  },
  subText: {
    color: semanticColors.TEXT_POSITIVE,
    paddingLeft: "6%",
    paddingRight: 10,
    marginBottom: 10,
    letterSpacing: 0.25,
    fontFamily: constants.Fonts.DISPLAY_NORMAL,
    fontSize: 12
  }
});

const switches = [
  {
    id: "instagramEnabled",
    default: true,
    label: "Enable BetterInstagramEmbeds",
    subLabel: "Replace Instagram embeds with ddinstagram embeds",
  },
  {
    id: "twitterEnabled",
    default: true,
    label: "Enable BetterTwitterEmbeds",
    subLabel: "Replace Twitter embeds with fxtwitter embeds",
  },
  {
    id: "xEnabled",
    default: true,
    label: "Enable BetterXEmbeds",
    subLabel: "Replace X embeds with fixupx embeds",
  },
  {
    id: "tiktokEnabled",
    default: true,
    label: "Enable BetterTikTokEmbeds",
    subLabel: "Replace TikTok embeds with tnktok embeds",
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