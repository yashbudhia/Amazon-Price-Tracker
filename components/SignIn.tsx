"use client";
import React from "react";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div>
      <button
        onClick={() => signIn("github")}
        className="w-64 h-16 rounded shadow-sm bg-blue-300 hover:bg-slate-700 text-white"
      >
        Sign in via Google
      </button>
    </div>
  );
};

export default SignIn;
