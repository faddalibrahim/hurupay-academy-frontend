import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between md:flex-row w-full gap-3 px-5 py-5">
      <section className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">Hurupay Academy</h1>
        <p>hurupay email</p>
        <p>United States 651 N Broad St, New Castle, Delaware, United States</p>
      </section>
      <section>
        <h1 className="font-medium text-2xl">Link 1</h1>
        <div className="flex flex-col gap-3 py-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
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
