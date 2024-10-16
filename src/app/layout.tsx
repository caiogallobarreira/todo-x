import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "@/components/layout/header";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "TodoX",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`antialiased flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          <main className="mx-auto my-16 w-[64%]">
            {children}
          </main>
        </ThemeProvider>
        <Toaster/>
      </body>
    </html>
  );
}
