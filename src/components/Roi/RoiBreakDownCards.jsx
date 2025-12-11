"use client";

import React from "react";

export default function RoiBreakDownCards({ value, title }) {
  return (
    <div className="lg:w-[50%] lg:h-[19vw] w-full h-[55vw] lg:rounded-[0.8vw] rounded-[2.5vw] bg-white/40 backdrop-blur-md border border-black/10 lg:p-[2vw] lg:pb-[2vw] p-[4vw] pb-[7vw] flex flex-col justify-between">
      <div className="flex gap-[2vw] p-[1vw]">
        <div className="lg:w-[3vw] h-auto w-[7vw]">
          <svg
            width="29"
            height="29"
            className="w-full h-full"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.01163 0C1.57033 0 2.02326 0.452926 2.02326 1.01163V22.593C2.02326 25.0141 3.98591 26.9767 6.40698 26.9767H27.9884C28.5471 26.9767 29 27.4297 29 27.9884C29 28.5471 28.5471 29 27.9884 29H6.40698C2.8685 29 0 26.1316 0 22.593V1.01163C0 0.452926 0.452926 0 1.01163 0Z"
              fill="#1069DF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.6551 17.9133C25.0502 17.5182 25.0502 16.8778 24.6551 16.4827L21.1673 12.9949C19.7188 11.5463 17.3702 11.5463 15.9217 12.9949L14.3414 14.5752C13.6829 15.2335 12.6154 15.2335 11.9569 14.5752L8.46914 11.0873C8.07408 10.6923 7.43354 10.6923 7.03848 11.0873C6.64342 11.4824 6.64342 12.1229 7.03848 12.5179L10.5263 16.0058C11.9749 17.4544 14.3235 17.4544 15.772 16.0058L17.3523 14.4255C18.0108 13.7671 19.0782 13.7671 19.7367 14.4255L23.2246 17.9133C23.6196 18.3084 24.2601 18.3084 24.6551 17.9133Z"
              fill="#1069DF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.9062 18.5463C20.9062 19.105 21.3592 19.5579 21.9179 19.5579H23.9411C25.2448 19.5579 26.3016 18.5011 26.3016 17.1975V15.1742C26.3016 14.6155 25.8487 14.1626 25.29 14.1626C24.7313 14.1626 24.2783 14.6155 24.2783 15.1742V17.1975C24.2783 17.3838 24.1274 17.5347 23.9411 17.5347H21.9179C21.3592 17.5347 20.9062 17.9876 20.9062 18.5463Z"
              fill="#1069DF"
            />
          </svg>
        </div>
        <p className="lg:text-[3vw] font-head text-[6vw] ">{value}</p>
      </div>
      <div className="lg:space-y-[1.5vw] space-y-[4vw]">
        <div className="bg-black/50 h-[1px] w-full" />
        <h2 className="text-4xl">{title}</h2>
        <div className="bg-black/50 h-[1px] w-full" />
      </div>
    </div>
  );
}


