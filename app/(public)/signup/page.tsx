import { FormCard, SignUpForm } from "@/components/auth";

export default function SignUp() {
  return (
    <FormCard
      cta="Already have an account?"
      ctaLabel="Login"
      ctaHref="/login"
      description="Enter your information to create an account"
      title="Sign Up"
    >
      <SignUpForm />
    </FormCard>
  );
}
