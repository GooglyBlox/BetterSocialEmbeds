import { Forms } from "@vendetta/ui/components";
import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";

const { FormSection, FormSwitch } = Forms;

export default () => {
    useProxy(storage);

    return (
        <FormSection title="Settings">
            <FormSwitch 
                label="Enable BetterInstagramEmbeds"
                subLabel="Replace Instagram embeds with ddinstagram embeds"
                value={storage.enabled}
                onValueChange={(value: any) => {
                    storage.enabled = value;
                }}
            />
        </FormSection>
    );
};