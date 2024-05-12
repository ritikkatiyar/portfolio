"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="">
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* biography container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, a
              similique impedit quasi expedita nemo ratione at cumque, atque
              omnis ab! Veniam distinctio repellendus expedita!
            </p>
            <span className="italic">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
            <div className="self-end">
              <svg
                width="382"
                height="355"
                viewBox="0 0 382 355"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M189 181C189 148.941 188.431 116.797 190.333 84.7778C191.621 63.1082 193.31 40.7681 199.944 19.9445C200.768 17.3596 205.786 1.64307 211.722 2.33334C218.931 3.17161 220.752 26.0692 220.889 27.4445C224.181 60.5728 221.626 97.0048 199.889 123.889C194.085 131.067 182.706 142.789 172.222 138.5C170.172 137.661 169.075 133.938 170.889 135.889C176.97 142.431 181.105 152.926 184.667 160.667C191.195 174.856 196.426 189.31 201.611 204C202.532 206.609 205.294 199.796 206.556 197.333C218.66 173.701 229.362 149.414 239.778 125C242.997 117.454 250 94.4071 250 102.611C250 109.794 246.897 117.684 245.222 124.5C242.727 134.653 240.12 144.763 237.111 154.778C234.786 162.519 233.124 164.444 239.667 156.444C254.23 138.639 269.217 121.185 284.444 103.944C294.807 92.2118 305.025 80.7263 315.944 69.5556C318.203 67.2454 324.044 60.9364 324 64.1667C323.848 75.4458 317.003 89.0301 313.667 99.5556C312.575 103 311.457 106.437 310.389 109.889C309.864 111.585 308.454 113.278 308.889 115C309.127 115.942 310.825 115.578 311.778 115.389C315.002 114.75 318.105 113.597 321.222 112.556C335.344 107.838 349.25 101.308 363.722 97.7222C364.533 97.5214 366.864 97.3542 366.222 97.8889C362.067 101.351 357.317 104.035 352.722 106.889C319.403 127.583 285.368 147.107 252 167.722C181.904 211.03 112.031 255.181 48.2222 307.556C32.6335 320.351 -11.0017 361.736 6 350.889C28.4886 336.541 51.7193 325.373 76.1111 314.278C152.318 279.613 230.208 247.896 310.778 224.833C332.684 218.563 355.047 213.387 377.444 209.111C379.802 208.661 381.205 208.192 380 210"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          {/* skills container */}
          <div>skills</div>
          {/* experience container */}
          <div>experience</div>
        </div>
        {/* svg container */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
