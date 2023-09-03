import Link from "next/link";
import { FacebookIcon, LinkedinIcon, TwitterIcon,InstagramIcon,MediumIcon } from "../icons/Icons";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between md:flex-row w-full gap-3 px-8 py-10 bg-[#fafafa] md:justify-center md:gap-[5rem] md:py-20">
      <section className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl">Hurupay Academy</h1>
        <p className="text-gray-500 m-0">hurupayacademy@gmail.com</p>
        <p className="text-gray-500 m-0">
          1 University Avenue, Ashesi University,
          <br />
          Berekuso, ER, Ghana
        </p>
      </section>
      <section>
        <h1 className="font-medium text-2xl">Company</h1>
        <div className="flex flex-col gap-3 py-2">
          <Link href="/about" className="text-gray-500 hover:text-current">
            About
          </Link>
          <Link href="/web3" className="text-gray-500 hover:text-current">
            Intro to Web3
          </Link>
          <Link
            href="https://hurupay.com"
            className="text-gray-500 hover:text-current"
          >
            Hurupay App
          </Link>
        </div>
      </section>
      <section>
        <h1 className="font-medium text-2xl">Extras</h1>
        <div className="flex flex-col gap-3 py-2">
          <Link href="/education" className="text-gray-500 hover:text-current">
            Education
          </Link>
          <Link href="/news" className="text-gray-500 hover:text-current">
            News
          </Link>
          <Link href="/resources" className="text-gray-500 hover:text-current">
            Resources
          </Link>
        </div>
      </section>
      <section>
        <h1 className="font-medium text-2xl">Socials</h1>
        <div className="flex gap-3 py-2">
          <Link href="https://www.instagram.com/hurupayapp/">
            <InstagramIcon />
          </Link>
          <Link href="https://twitter.com/HurupayApp">
            <TwitterIcon />
          </Link>
          <Link href="https://www.linkedin.com/company/hurupay/">
            <LinkedinIcon />
          </Link>
          <Link href="https://medium.com/@hurupayacademy">
            <MediumIcon/>
          </Link>
        </div>
      </section>
    </footer>
  );
}
