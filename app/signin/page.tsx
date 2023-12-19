"use client";

import SignIn from "@/components/SignIn";
import React from "react";

const Signin = () => {
  return (
    <>
      <div className="flex flex-col items-center  w-screen h-screen">
        <div className="w-screen h-32"></div>
        <div className="p-4 font-semibold font-spaceGrotesk text-5xl ">
          Create Your<span className="text-primary"> Account...</span>
        </div>
        <div className="flex flex-col h-1/2 w-96 shadow-md rounded border items-center border-gray-200 ">
          <br />
          <form>
            <div>
              <input
                type="email"
                placeholder="Enter your Email"
                className="form-input"
              />
            </div>
            <br />
            <div>
              <input
                type="password"
                placeholder="Enter your Password"
                className="form-input"
              />
            </div>
            <br />
            <div className="flex flex-col items-center justify-center">
              <button className="bg-primary hover:bg-gray-600 rounded-full h-9 w-28 text-white shadow-sm">
                Create
              </button>

              <p className="py-7 text-sm text-gray-600">Or sign in with </p>
              <SignIn />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
