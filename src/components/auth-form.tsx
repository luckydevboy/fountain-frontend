"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { cx } from "class-variance-authority";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";

import { Logo } from "@/components";
import { useRegister } from "@/api/hooks";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui";

type Inputs = {
  name: string;
  email: string;
  password: string;
  username: string;
};

type Props = {
  type: "sign-in" | "register";
};

const AuthForm = ({ type }: Props) => {
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(params.get("error") || "");
  const register = useRegister();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);

    const urlObj = new URL(window.location.href);
    urlObj.searchParams.delete("error");

    try {
      if (type === "register") {
        await register.mutateAsync(data);
      }
      await signIn("credentials", {
        redirect: true,
        ...data,
        callbackUrl,
      });
    } catch (error: any) {
      setError(error.response.data.error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderError = (error: string) => {
    switch (error) {
      case "CredentialsSignin":
        return "Username or password is incorrect!";
      case "User already exists":
        return "This user already exists!";
      default:
        return error;
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Logo className="text-indigo-700 h-16 mx-auto" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {type === "register" && (
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2">
                {/* TODO: Create input component */}
                <input
                  type="text"
                  {...registerForm("name", { required: true })}
                  className={cx([
                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                    errors.name && "ring-red-600",
                  ])}
                />
                {errors.name && (
                  <small className="text-red-500">Name is required!</small>
                )}
              </div>

              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-gray-900 mt-6"
              >
                Email
              </label>
              <div className="mt-2">
                {/* TODO: Create input component */}
                <input
                  type="text"
                  {...registerForm("email", { required: true })}
                  className={cx([
                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                    errors.name && "ring-red-600",
                  ])}
                />
                {errors.email && (
                  <small className="text-red-500">Email is required!</small>
                )}
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              {/* TODO: Create input component */}
              <input
                type="text"
                {...registerForm("username", { required: true })}
                className={cx([
                  "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                  errors.username && "ring-red-600",
                ])}
              />
              {errors.username && (
                <small className="text-red-500">Username is required!</small>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              {type === "sign-in" && (
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              )}
            </div>
            <div className="mt-2">
              <input
                type="password"
                {...registerForm("password", { required: true })}
                className={cx([
                  "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                  errors.password && "ring-red-600",
                ])}
              />
              {errors.password && (
                <small className="text-red-500">Password is required!</small>
              )}
            </div>
          </div>
          <Button type="submit" className="w-full">
            {type === "sign-in" ? "Sign in" : "Register"}
          </Button>
        </form>
        <div className="text-red-500 mt-2 text-sm">{renderError(error)}</div>

        {type === "sign-in" ? (
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register from here
            </Link>
          </p>
        ) : (
          <p className="mt-10 text-center text-sm text-gray-500">
            Are you a member?{" "}
            <Link
              href="/sign-in"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in from here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
