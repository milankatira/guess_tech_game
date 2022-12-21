import React from "react";
import DarkModeSwitch from "../components/design/DarkModeSwitch";

export default function Header() {
  return (
    <header className="h-20 py-4 sticky shadow-md overflow-hidden top-0 pl-auto pr-10 flex items-center xl:items-center justify-between w-full mx-auto z-50 border-b-[1px]">

      <div
        className="flex flex-row items-center justify-end text-gray-300 h-[50px] ml-auto"
      >
        <DarkModeSwitch />
      </div>
    </header>
  );
}
