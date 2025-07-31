import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enrique Manterola - Full Stack Developer",
  description: "Desarrollador Full Stack apasionado por crear soluciones digitales eficientes y escalables. Especializado en Angular, React y Node.js.",
  keywords: ["Full Stack Developer", "React", "Angular", "Node.js", "TypeScript", "JavaScript"],
  authors: [{ name: "Enrique Manterola" }],
  creator: "Enrique Manterola",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Enrique Manterola - Full Stack Developer",
    description: "Desarrollador Full Stack apasionado por crear soluciones digitales eficientes y escalables.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enrique Manterola - Full Stack Developer",
    description: "Desarrollador Full Stack apasionado por crear soluciones digitales eficientes y escalables.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        {children}
      </body>
    </html>
  );
}
