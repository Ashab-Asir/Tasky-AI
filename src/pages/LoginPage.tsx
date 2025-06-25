import Head from "@/components/Head";
import React from "react";
import { SignIn } from "@clerk/clerk-react";
const LoginPage = () => {
  return (
    <>
      <Head title="SignIn | Tasky AI "></Head>
      <section className="">
        <div className="container flex justify-center">
          <SignIn signUpUrl="/register"></SignIn>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
