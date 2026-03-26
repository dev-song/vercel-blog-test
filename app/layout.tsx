import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "My Blog",
    template: "%s | My Blog",
  },
  description: "개발과 기술에 대한 블로그입니다.",
  verification: {
    google: "9G-I2lGLAmox37QxyeY1T-vZc_BfNvHJRv37cYApoVo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen bg-white text-gray-900">
        <header className="border-b border-gray-200">
          <div className="mx-auto max-w-2xl px-6 py-6">
            <Link href="/" className="text-xl font-bold">
              My Blog
            </Link>
          </div>
        </header>
        <main className="mx-auto max-w-2xl px-6 py-10">{children}</main>
        <footer className="border-t border-gray-200 mt-auto">
          <div className="mx-auto max-w-2xl px-6 py-6 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} My Blog
          </div>
        </footer>
      </body>
    </html>
  );
}
