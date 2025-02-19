import type { Metadata} from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="lg:w-11/12 mx-auto overflow-x-hidden-hidden">
          <Navbar/>
          {children}
          <Toaster
  position="top-right"
  reverseOrder={false}
/>
          <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
