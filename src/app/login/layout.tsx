import type { Metadata } from "next";
import "../../style/globals.css";

export const metadata: Metadata = {
  title: "Eventify | Login",
  description: "Platform event modern dan terpercaya",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
21;
