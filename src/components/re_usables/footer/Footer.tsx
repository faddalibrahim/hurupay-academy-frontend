import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between md:flex-row w-full gap-3 px-8 py-10 bg-[#fafafa] md:justify-center md:gap-[5rem] md:py-20">
      <section className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl">Hurupay Academy</h1>
        <p className="text-gray-500">hurupayacademy@gmail.com</p>
        <p className="text-gray-500">
          1 University Drive,Ashesi University,
          <br />
          Berekuso, ER, Ghana
        </p>
      </section>
      <section>
        <h1 className="font-medium text-2xl">Company</h1>
        <div className="flex flex-col gap-3 py-2">
          <Link href="/privacy" className="text-gray-500 hover:text-current">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-gray-500 hover:text-current">
            Terms of Service
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
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </section>
    </footer>
  );
}
