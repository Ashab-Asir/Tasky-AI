import Head from "@/components/Head";
import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
  return (
    <>
      <Head title="Signup | Tasky AI "></Head>
      <section className="">
        <div className="container flex justify-center">
          <SignUp signInUrl="/login"></SignUp>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
