import Link from "next/link";
import { Kanit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import SearchBox from "@/components/SearchBox";
import Footer from "@/components/Footer";
import "./globals.css";

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Master's Exam Topics",
  description: "University of Łódź Master's Exam Topics",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${kanit.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-full mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />

                <nav className="ml-auto text-sm font-medium space-x-6">
                  <SearchBox />
                  <Link href="/">Home</Link>
                </nav>
              </div>
            </header>
            <div className="border border-b-0 border-black dark:border-white w-full mt-2"></div>
            <main>{children}</main>
          </div>
        </ThemeProvider>
        <div className="fixed bottom-0 right-0 mb-4 mr-4">
          <a
            href="#"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-lime-500 text-white hover:bg-gray-700 hover:scale-125 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
              />{" "}
            </svg>
          </a>
        </div>
        <Footer />
      </body>
    </html>
  );
}
