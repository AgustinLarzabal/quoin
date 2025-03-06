import { GoogleSignIn } from "@/components/google-sign-in";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-[380px]">
        <GoogleSignIn />
      </div>
    </div>
  );
}
