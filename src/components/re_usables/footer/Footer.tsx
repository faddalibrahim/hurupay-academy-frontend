import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between md:flex-row w-full gap-3 px-8 py-10 bg-[#fafafa] md:justify-center md:gap-[5rem] md:py-20">
      <section className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl">Hurupay Academy</h1>
        <p>hurupayacademy@gmail.com</p>
        <p>
          1 University Drive,Ashesi University,
          <br />
          Berekuso, ER, Ghana
        </p>
      </section>
      <section>
        <h1 className="font-medium text-2xl">Link 1</h1>
        <div className="flex flex-col gap-3 py-2">
          <Link href="/privacy">Privacy</Link>
          <Link href="https://hurupay.com">Hurupay</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </section>
      <section>
        <h1 className="font-medium text-2xl">Link 2</h1>
        <div className="flex flex-col gap-3 py-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </section>
      <section>
        <h1 className="font-medium text-2xl">Follow Us</h1>
        <div className="flex gap-3 py-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </section>
    </footer>
  );
}
