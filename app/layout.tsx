import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";


const font = Sora({
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Shivam Saurav | Full Stack & AI Developer",
  description: "Explore the portfolio of Shivam Saurav — a passionate full stack developer and AI enthusiast. Check out projects in web development, machine learning, and automation.",
  keywords: [
    "Shivam Saurav",
    "Full Stack Developer",
    "MERN Developer",
    "AI Developer",
    "Machine Learning Engineer",
    "React",
    "Node.js",
    "Next.js",
    "JavaScript",
    "Python",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ResponsiveNav />
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
