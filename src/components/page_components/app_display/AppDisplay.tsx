import Button from "@components/re_usables/button/Button";
import Image from "next/image";
import Link from "next/link";

export default function AppDisplay() {
  return (
    <div className="bg-[#101010] py-10 px-5 flex flex-col gap-10 items-center md:flex-row md:justify-around">
      <div className="flex flex-col gap-5 text-center items-center">
        <h1 className="text-white text-3xl md:text-4xl">
          Checkout Our Flagship Crypto App
          <br />
          <br />
          <span className="text-[#FFC100] text-5xl">Hurupay</span>
        </h1>
        <Link
          className={`px-10 py-5 font-medium text-[#333] rounded bg-gradient-to-r from-[#FFC100] to-[#FFA800] hover:bg-gradient-to-l`}
          href="https://hurupay.com"
        >
          Go to App
        </Link>
      </div>
      <div>
        <Image
          src="/hurupay_app_final_mockup.png"
          width={300}
          height={300}
          alt="Picture of the article"
        />
      </div>
    </div>
  );
}
