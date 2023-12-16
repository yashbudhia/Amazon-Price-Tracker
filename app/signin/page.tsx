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
                className="border block rounded border-gray-400 h-12 w-80 text-sm shadow-sm placeholder-slate-400 focus:outline-none  focus:ring-1 focus:ring-green-500 focus:invalid:ring-pink-500
                 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none indent-4"
              />
            </div>
            <br />
            <div>
              <input
                type="password"
                placeholder="Enter your Password"
                className="border block rounded border-gray-400 h-12 w-80 text-sm shadow-sm placeholder-slate-400 focus:outline-none
                 focus:ring-green-600 focus:ring-1  focus:invalid:ring-pink-500 indent-4"
              />
            </div>
            <br />
            <div className="flex flex-col items-center justify-center">
              <button className="bg-primary hover:bg-gray-600 rounded-full h-9 w-28 text-white shadow-sm">
                Create
              </button>

              <p className="py-7 text-sm text-gray-600">Or sign in with </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
