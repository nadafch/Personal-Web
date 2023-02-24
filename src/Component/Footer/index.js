import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Component() {
  return (
    <div className="w-full bg-black p-3 px-10 text-white text-xs flex flex-wrap justify-between">
      <div>© 2023 Nada Filsa. All rights reserved.</div>
      <div className="flex gap-2 text-lg">
        <AiFillGithub />
        <AiFillLinkedin />
      </div>
    </div>
  );
}
