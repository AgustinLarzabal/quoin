import { I18nProviderClient } from "../../locales/client";

type ProvidersProps = {
  locale: string;
  children: React.ReactNode;
};

export function Providers({ locale, children }: ProvidersProps) {
  return (
    <I18nProviderClient locale={locale} fallback={<p>Loading...</p>}>
      {children}
    </I18nProviderClient>
  );
}
