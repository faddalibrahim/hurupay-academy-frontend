import Button from "@components/re_usables/button/Button";
import Image from "next/image";

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
        <Button>Go to App</Button>
      </div>
      <div>
        <Image
          src="/app.png"
          width={300}
          height={300}
          alt="Picture of the article"
        />
      </div>
    </div>
  );
}
