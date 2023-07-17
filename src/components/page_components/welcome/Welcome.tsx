import Button from "@components/re_usables/button/Button";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="bg-[#111] bg-gradient-to-r from-[#111] to-[#222] px-5 py-[4rem]">
      <div className="flex justify-center pt-10 animate-pulse">
        <svg
          width="172"
          height="138"
          viewBox="0 0 172 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86 69L21.844 43.372L25.8 137.8H8.6L12.728 39.674L0 34.6L86 0.199997L172 34.6L86 69ZM86 26C81.27 26 77.4 27.892 77.4 30.3C77.4 32.708 81.27 34.6 86 34.6C90.73 34.6 94.6 32.708 94.6 30.3C94.6 27.892 90.73 26 86 26ZM86 77.6L133.902 58.422C140.008 66.506 144.222 76.224 145.598 86.802C143.018 86.458 140.352 86.2 137.6 86.2C115.67 86.2 96.492 97.982 86 115.526C80.6744 106.588 73.1193 99.1871 64.0741 94.0464C55.029 88.9057 44.8039 86.202 34.4 86.2C31.648 86.2 28.982 86.458 26.402 86.802C27.778 76.224 31.992 66.506 38.098 58.422L86 77.6Z"
            fill="url(#paint0_linear_67_265)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_67_265"
              x1="9"
              y1="1.99999"
              x2="158"
              y2="138"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFC100" />
              <stop offset="1" stop-color="#333333" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 className="text-3xl md:text-7xl text-center text-[#fff] pt-5 animate-pulse">
        Hurupay Academy
      </h1>
      <p className="text-center text-md text-white">Learn all about Web 3</p>

      <div className="flex gap-4 justify-center mt-10">
        <Button>
          <Link href="/education">
            <small>Learn</small>
          </Link>
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "white",
            outline: "0.05rem solid white",
          }}
        >
          <Link href="/resources">
            <small>Resources</small>
          </Link>
        </Button>
      </div>
    </div>
  );
}
