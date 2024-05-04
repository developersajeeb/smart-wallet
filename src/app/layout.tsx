import type { Metadata } from "next";
import "./globals.css";
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/soho-light/theme.css';
import 'primeicons/primeicons.css';
import Providers from "./Providers";
import '../styles/app.css'

export const metadata: Metadata = {
  title: "Smart Wallet",
  description: "Your ultimate money management solution. Track, budget, and analyze finances effortlessly.",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-gray-50 dark:bg-dark-200">
        <Providers>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
