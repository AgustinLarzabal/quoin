import { FormCard, FormNewPassword } from "@/components/auth";

export default function NewPasswordPage() {
  return (
    <FormCard
      cta="Back to"
      ctaLabel="Sign in"
      ctaHref="/login"
      description="Create a new password"
      title="New password"
    >
      <FormNewPassword />
    </FormCard>
  );
}
