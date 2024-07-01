import { AR, AU, CN, ES, US, ZA } from "@/components/flags";

interface FlagProps extends React.HTMLAttributes<SVGElement> {
  code: string;
}

export const Flag = ({ code, ...props }: FlagProps) => {
  switch (code) {
    case "au":
      return <AU {...props} />;
    case "ar":
      return <AR {...props} />;
    case "cn":
      return <CN {...props} />;
    case "es":
      return <ES {...props} />;
    case "us":
      return <US {...props} />;
    case "za":
      return <ZA {...props} />;
    default:
      return null;
  }
};
