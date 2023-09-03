import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Hurupay Academy",
  description: "Hurupay Academy - Web3 Learning Platform",
  category: "Web 3.0 & Cryptocurrency",
  icons: {
    icon: "/hurupay-logo.png",
    shortcut: "/hurupay-logo.png",
    apple: "/hurupay-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white ${poppins.className}`}>{children}</body>
    </html>
  );
}
