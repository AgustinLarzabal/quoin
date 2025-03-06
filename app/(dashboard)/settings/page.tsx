import { DangerZone } from "@/components/danger-zone";
import { SettingsCard, SettingsSeparator } from "@/components/settings-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  const tabs = [
    {
      id: "account",
      title: "Account",
    },
  ];

  return (
    <Tabs defaultValue="account" className="w-full px-4 pt-5 md:px-8">
      <div className="max-w-screen-xl">
        <TabsList className="mb-2">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="account">
          <SettingsCard />

          <SettingsSeparator />

          <DangerZone />
        </TabsContent>
      </div>
    </Tabs>
  );
}
