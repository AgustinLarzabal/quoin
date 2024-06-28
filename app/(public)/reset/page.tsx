import { FormCard, FormReset } from "@/components/auth";

export default function Reset() {
  return (
    <FormCard
      cta="Back to"
      ctaLabel="Sign in"
      ctaHref="/login"
      description="Forgot your password?"
      title="Reset password"
    >
      <FormReset />
    </FormCard>
  );
}
