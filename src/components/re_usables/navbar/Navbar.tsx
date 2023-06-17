import Link from "next/link";
import Hamburger from "../hamburger/Hamburger";

export default function Navbar() {
  return (
    // <nav className="flex justify-between items-center py-8 px-5">
    <nav className="shadow-sm flex justify-between items-center py-8 px-5">
      <div>
        <h1 className="text-lg">Hurupay Academy</h1>
      </div>
      <div>
        <div className="md:hidden">
          <Hamburger />
        </div>
      </div>
      <div className="hidden md:flex gap-5">
        <Link href="/" className="text-lg hover:text-[#FFC100]">
          Home
        </Link>
        <Link href="/about" className="text-lg hover:text-[#FFC100]">
          About
        </Link>
        <Link href="/education" className="text-lg hover:text-[#FFC100]">
          Education
        </Link>
        <Link href="/news" className="text-lg hover:text-[#FFC100]">
          News
        </Link>
        <Link href="/resources" className="text-lg hover:text-[#FFC100]">
          Resources
        </Link>
        <Link href="/web3" className="text-lg hover:text-[#FFC100]">
          Web3
        </Link>
      </div>
    </nav>
  );
}
