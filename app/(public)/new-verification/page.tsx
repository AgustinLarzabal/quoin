import { FormCard, FormNewVerification } from "@/components/auth";

export default function NewVerificationPage() {
  return (
    <FormCard
      cta="Back to"
      ctaLabel="Sign in"
      ctaHref="/login"
      description="Confirming your account"
      title="Account confirmation"
    >
      <FormNewVerification />
    </FormCard>
  );
}
