"use client";

import { FC } from "react";
import { modalState } from "@/atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
interface IUploadModalProps {}

export const UploadModal: FC<IUploadModalProps> = (props) => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
         <div className="flex flex-col justify-center items-center h-[100%]"></div>
        </Modal>
      )}
    </div>
  );
};
