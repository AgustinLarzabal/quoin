import { FormCard, FormLogin } from "@/components/auth";

export default function LoginPage() {
  return (
    <FormCard
      cta="Don't have an account?"
      ctaLabel="Sign Up"
      ctaHref="/signup"
      description="Enter your email below to login to your account"
      title="Login"
    >
      <FormLogin />
    </FormCard>
  );
}
