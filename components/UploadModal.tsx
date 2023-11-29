'use client'


import { FC } from "react";
import { modalState } from "@/atom/modalAtom";
import { useRecoilState } from "recoil";
interface IUploadModalProps {};

export const UploadModal: FC<IUploadModalProps> = (props) => {
    const [open, setOpen] = useRecoilState(modalState);
    return (
        <div>
           <h1>Upload Modal</h1> 
           {open && <h1>The modal is open!</h1>}
        </div>
    );
}
