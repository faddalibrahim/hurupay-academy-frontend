import Image from "next/image";
import Button from "../button/Button";
import Link from "next/link";
export default function SubscribeToNewsletter() {
  return (
    <div className="bg-[#F5F5F5] px-5 py-10 w-screen flex flex-col justify-center items:center md:flex-row md:justify-center md:gap-20 md:items-center">
      <div>
        <Image
          src="/email-subscription.svg"
          width={300}
          height={300}
          alt="Picture of the article"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="font-medium text-2xl md:text-4xl">
            Newsletter Subscription
          </h1>
          <small>
            Be the first to recieve our latest updates and offerings
          </small>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="enter your email address"
              className="border border-[#E6E8EA] outline-none rounded px-5 py-5"
              required
            />
            <Button>subscribe</Button>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name=""
              id=""
              required
              className="accent-[#FFA800] w-15 h-15"
            />
            <p>
              I have read and agreed to Hurupay Academy’s{" "}
              <Link
                href="/privacy"
                className="text-[#FFA800] hover:text-[#FFC100]"
              >
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
