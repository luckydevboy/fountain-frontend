import { AuthForm } from "@/components";
import { Suspense } from "react";

const SignIn = () => {
  return (
    <Suspense>
      <AuthForm type="sign-in" />
    </Suspense>
  );
};

export default SignIn;
