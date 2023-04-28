import React from "react";
import Button from "./Button";

function The5thSemTelegram() {
    return (
        <div className="flex items-center flex-col border-1 mb-12 mt-4 h-[300px] p-8 justify-center rounded-3xl shadow-md bg-gradient-to-b from-blue-500 via-blue-400 to-violet-600 text-black shadow-sm shadow-violet-700  md:mx-6 md:h-[300px]">
            <p className="mb-4 ml-0 mr-0 text-2xl font-semibold text-center px-[26px]">5th Semester Preface<span className="block text-sm font-normal text-center">Telegram</span>
            </p>
            <a href="https://t.me/ise_nmamit/484"  >
                <Button buttonName="Click Here" />
            </a>


        </div>
    );
}

export default The5thSemTelegram;