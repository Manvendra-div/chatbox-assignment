import { useState } from "react";
import groupImg from "../assets/GroupImage.svg";
import ChatBox from "./ChatBox";
export default function ChatScreen() {
  const [isPopup, setIsPopup] = useState<boolean>(true);
  return (
    <div className="relative bg-[#FAF9F4] flex flex-col items-center w-full md:max-w-[600px] h-[100vh]">
      <div className="w-full border-b-[1px] border-[#E5E5E0] p-3 pb-4">
        <div className="flex justify-between items-center p-2">
          <button className="flex justify-center items-center space-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="#141E0D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-bold text-2xl">Trip 1</span>
          </button>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_889)">
                <path
                  d="M9.16666 3.33332H5.66666C4.26653 3.33332 3.56647 3.33332 3.03169 3.6058C2.56128 3.84549 2.17883 4.22794 1.93915 4.69834C1.66666 5.23312 1.66666 5.93319 1.66666 7.33332V14.3333C1.66666 15.7335 1.66666 16.4335 1.93915 16.9683C2.17883 17.4387 2.56128 17.8212 3.03169 18.0608C3.56647 18.3333 4.26653 18.3333 5.66666 18.3333H12.6667C14.0668 18.3333 14.7669 18.3333 15.3016 18.0608C15.772 17.8212 16.1545 17.4387 16.3942 16.9683C16.6667 16.4335 16.6667 15.7335 16.6667 14.3333V10.8333M6.66664 13.3333H8.06209C8.46975 13.3333 8.67357 13.3333 8.86538 13.2873C9.03544 13.2464 9.19802 13.1791 9.34714 13.0877C9.51533 12.9847 9.65946 12.8405 9.94771 12.5523L17.9167 4.58332C18.607 3.89296 18.607 2.77368 17.9167 2.08332C17.2263 1.39296 16.107 1.39296 15.4167 2.08332L7.44769 10.0523C7.15944 10.3405 7.01531 10.4847 6.91224 10.6528C6.82086 10.802 6.75352 10.9645 6.71269 11.1346C6.66664 11.3264 6.66664 11.5302 6.66664 11.9379V13.3333Z"
                  stroke="#141E0D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_889">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="flex justify-between items-center mt-2 px-2 text-lg">
          <button className="flex justify-center items-center space-x-3">
            <img src={groupImg} className="w-16 h-16 rounded-full" />
            <div className="flex flex-col h-full items-start">
              <span className="font-medium text-[#606060] ">
                From{" "}
                <span className="font-bold text-[#141E0D]">
                  IGI Airport, T3
                </span>
              </span>
              <span className="font-medium text-[#606060] ">
                To <span className="font-bold text-[#141E0D]">Sector 28</span>
              </span>
            </div>
          </button>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke="#141E0D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                stroke="#141E0D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                stroke="#141E0D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full px-3 flex flex-col justify-evenly items-center h-fit overflow-hidden">
        <ChatBox />
      </div>

      <div className="flex justify-center items-center z-10 w-full bg-[#FAF9F4] p-5">
        <div className="flex justify-between items-center w-full bg-white rounded-xl">
          <input
            type="text"
            placeholder="Reply to @Rohit Yadav"
            className="w-[70%] h-fit text-lg px-3 py-2 focus:outline-none"
          />
          <div className="relative h-4 w-fit">
            {isPopup && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
                <div className="relative min-w-32 h-10 rounded-full bg-[#008000] text-white flex justify-evenly items-center p-3">
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66667 6.41814C1.66667 5.17468 2.67469 4.16666 3.91815 4.16666C4.56422 4.16666 5.13781 3.75324 5.34211 3.14032L5.41667 2.91666C5.45183 2.81118 5.46941 2.75844 5.48821 2.71166C5.72837 2.11426 6.29116 1.70863 6.93385 1.6697C6.98418 1.66666 7.03977 1.66666 7.15095 1.66666H12.8491C12.9602 1.66666 13.0158 1.66666 13.0662 1.6697C13.7088 1.70863 14.2716 2.11426 14.5118 2.71166C14.5306 2.75844 14.5482 2.81118 14.5833 2.91666L14.6579 3.14032C14.8622 3.75324 15.4358 4.16666 16.0819 4.16666C17.3253 4.16666 18.3333 5.17468 18.3333 6.41814V13.5C18.3333 14.9001 18.3333 15.6002 18.0608 16.135C17.8212 16.6054 17.4387 16.9878 16.9683 17.2275C16.4335 17.5 15.7335 17.5 14.3333 17.5H5.66667C4.26654 17.5 3.56647 17.5 3.03169 17.2275C2.56129 16.9878 2.17883 16.6054 1.93915 16.135C1.66667 15.6002 1.66667 14.9001 1.66667 13.5V6.41814Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 9.99999C13.75 7.92892 12.0711 6.24999 10 6.24999C7.92893 6.24999 6.25 7.92892 6.25 9.99999C6.25 12.0711 7.92893 13.75 10 13.75Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6.42857L12.9091 10L18 13.5714V6.42857Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.4545 5H3.45455C2.65122 5 2 5.63959 2 6.42857V13.5714C2 14.3604 2.65122 15 3.45455 15H11.4545C12.2579 15 12.9091 14.3604 12.9091 13.5714V6.42857C12.9091 5.63959 12.2579 5 11.4545 5Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6667 10.4167V5.66666C16.6667 4.26653 16.6667 3.56646 16.3942 3.03168C16.1545 2.56128 15.7721 2.17882 15.3016 1.93914C14.7669 1.66666 14.0668 1.66666 12.6667 1.66666H7.33334C5.9332 1.66666 5.23314 1.66666 4.69836 1.93914C4.22795 2.17882 3.8455 2.56128 3.60582 3.03168C3.33334 3.56646 3.33334 4.26653 3.33334 5.66666V14.3333C3.33334 15.7335 3.33334 16.4335 3.60582 16.9683C3.8455 17.4387 4.22795 17.8212 4.69836 18.0608C5.23314 18.3333 5.93317 18.3333 7.33322 18.3333H10.4167M11.6667 9.16666H6.66667M8.33334 12.5H6.66667M13.3333 5.83332H6.66667M12.5 15.8333L15 18.3333M15 18.3333L17.5 15.8333M15 18.3333V13.3333"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-2"
                >
                  <path
                    d="M1.20711 0.5H14.7929L8 7.29289L1.20711 0.5Z"
                    fill="#008000"
                    stroke="#008000"
                  />
                </svg>
              </div>
            )}
            <button onClick={() => setIsPopup(!isPopup)}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6271 8.08291L9.11408 15.5959C7.40554 17.3045 4.63544 17.3045 2.9269 15.5959C1.21835 13.8874 1.21835 11.1173 2.9269 9.40874L10.4399 1.89573C11.5789 0.756701 13.4257 0.756701 14.5647 1.89573C15.7037 3.03476 15.7037 4.88149 14.5647 6.02052L7.34631 13.2389C6.7768 13.8084 5.85343 13.8084 5.28392 13.2389C4.7144 12.6694 4.7144 11.746 5.28392 11.1765L11.6184 4.84201"
                  stroke="#141E0D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75036 10H4.16702M4.09648 10.2429L2.15071 16.0552C1.99785 16.5118 1.92142 16.7401 1.97627 16.8807C2.0239 17.0028 2.1262 17.0954 2.25244 17.1306C2.3978 17.1712 2.61736 17.0724 3.05647 16.8748L16.9827 10.608C17.4113 10.4151 17.6256 10.3187 17.6918 10.1847C17.7494 10.0683 17.7494 9.93174 17.6918 9.81535C17.6256 9.68139 17.4113 9.58495 16.9827 9.39208L3.05161 3.12313C2.61383 2.92612 2.39493 2.82762 2.24971 2.86803C2.1236 2.90312 2.0213 2.99544 1.97351 3.11731C1.91847 3.25764 1.99408 3.48545 2.14531 3.94108L4.09702 9.8213C4.12299 9.89955 4.13598 9.93868 4.14111 9.9787C4.14565 10.0142 4.14561 10.0502 4.14097 10.0857C4.13574 10.1257 4.12265 10.1648 4.09648 10.2429Z"
                stroke="#141E0D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
