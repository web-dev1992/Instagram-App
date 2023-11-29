"use server";
import { getProviders } from "next-auth/react";
import { Header } from "@/components/Header";
import Image from "next/image";
import SigninButton from "@/components/SigninButton";
interface ISigninProps {
  providers: any;
}

export default async function Signin() {
  const providers = await getProviders();
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20 ">
        <div className="relative hidden object-cover md:inline-flex ">
          <Image
            src="/images/phone.png"
            alt="login"
            width={380}
            height={581}
            className="object-contain w-auto h-auto"
          />
          <div className="absolute top-[18px] right-[46px] z-30">
            <Image
              src="/images/phone-slide-1.png"
              alt="login"
              width={210}
              height={538}
              // className="object-contain w-auto h-auto"
            />
          </div>
        </div>
        <div className="">
          {Object.values(providers).map((provider) => (
            <div className="flex flex-col items-center " key={provider.name}>
              <Image
                src="/images/Instagram.png"
                width={100}
                height={200}
                alt="Instagram Logo"
                className="object-contain w-auto h-auto"
              />
              <p className="text-sm italic my-10 text-center ">
                This app is created for learning purposes
              </p>
              <SigninButton provider={provider} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
