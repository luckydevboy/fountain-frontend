"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { Logo } from "@/components";
import { cx } from "class-variance-authority";
import Link from "next/link";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

type Props = {
  type: "sign-in" | "register";
};

const AuthForm = ({ type }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
                  {...register("name", { required: true })}
                  className={cx([
                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                    errors.name && "ring-red-600",
                  ])}
                />
                {errors.name && (
                  <small className="text-red-500">Name is required!</small>
                )}
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              {/* TODO: Create input component */}
              <input
                type="email"
                {...register("email", { required: true })}
                className={cx([
                  "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                  errors.email && "ring-red-600",
                ])}
              />
              {errors.email && (
                <small className="text-red-500">Email is required!</small>
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
                {...register("password", { required: true })}
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

          {/* TODO: Add loading spinner */}
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </form>

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
