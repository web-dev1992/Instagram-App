"use client";
import { RecoilRoot } from "recoil";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
function Recoilroot(props: Props) {
  return <RecoilRoot>{props.children}</RecoilRoot>;
}

export default Recoilroot;
