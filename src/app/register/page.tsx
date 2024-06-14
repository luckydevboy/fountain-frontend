import { AuthForm } from "@/components";
import { Suspense } from "react";

const Register = () => {
  return (
    <Suspense>
      <AuthForm type="register" />
    </Suspense>
  );
};

export default Register;
