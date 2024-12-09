import Image from "next/image";
import React from "react";
import { InputForm } from "./Form";

const SignIn = () => {
  return (
    <div className="bg-white font-family-karla h-screen">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24 items-end gap-2">
            <Image
              src="/companylogo.png"
              width={56}
              height={54}
              alt="company-logo"
            />
          </div>

          <div className="flex flex-col justify-center items-center my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Welcome.</p>

            <InputForm />

            <div className="text-center pt-12 pb-12">



              <p>
                Don't have an account? 
                <a
                  href="#"
                  className="underline font-semibold">
                  Register here.
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src="/login.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
