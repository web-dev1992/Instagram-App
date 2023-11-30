"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
const providerImage = [
  {
    providerName: "google",
    image: "/images/google.jpeg",
  },
  {
    providerName: "facebook",
    image: "/images/facebook.png",
  },
  {
    providerName: "linkedin",
    image: "/images/linkedin.png",
  },
];
function SigninButton({ provider }: any) {

  const { providerName, image } = providerImage.filter(
    (p) => p.providerName === provider?.name?.toLocaleLowerCase()
  )[0];

  return (
    <button
      onClick={() => signIn(provider.id, { callbackUrl: "/" })}
      className="bg-white rounded-lg py-2 px-12 text-black flex justify-center items-center gap-2 border-2 border-gray-200 hover:border-gray-300 "
    >
      {
        <Image
          src={image}
          alt={`Sign in with ${providerName}`}
          width={50}
          height={50}
        />
      }
      Sign in with {provider.name}
    </button>
  );
}

export default SigninButton;
