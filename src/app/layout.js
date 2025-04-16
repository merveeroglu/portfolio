import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Merve Eroglu",
  description: "Merve Eroglu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      {/* <ThemeProvider enableSystem={false} attribute="class"> */}
        <body className={`${inter.variable} antialiased`}>
          <Header />
          {children}
        </body>
      {/* </ThemeProvider> */}
    </html>
  );
}
