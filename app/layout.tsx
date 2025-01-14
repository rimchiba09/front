import type { Metadata } from "next";
import "/app/styles/globals.css";
import { Cairo } from 'next/font/google';

const cairo = Cairo({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-cairo', 
});

export const metadata: Metadata = {
  title: "Borhan",
  description: "Smart Healthcare Assistant With AI",
  icons: {
    icon: [{ url: "/assist/logo.png", sizes: "32x32" }],
  },
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en"  className="dark">
        <body className={`${cairo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
