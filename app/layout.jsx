import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vivien Szolik | CRM Specialist",
  description:
    "Personal portfolio of Vivien Szolik, a CRM specialist with 2 years of experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#f9f6f0]`}>{children}</body>
    </html>
  );
}
