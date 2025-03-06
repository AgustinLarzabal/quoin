"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type SettingsCardProps = {
  type?: string;
};

export function SettingsSeparator() {
  return <div className="bg-dotted my-12 h-12 w-full" />;
}

export function SettingsCard({ type = "input" }: SettingsCardProps) {
  return (
    <div className="mb-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-sm font-normal">Full Name</CardTitle>
          <p className="text-secondary text-sm">
            Your full name as it will appear across the platform.
          </p>
        </CardHeader>
        <CardContent>
          {type === "input" && (
            <form
              onSubmit={() => {}}
              className="flex flex-col gap-6 md:flex-row md:gap-2"
            >
              <Input placeholder="Agustín Larzábal" />
              <Button>Save</Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
