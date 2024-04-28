import type { Metadata } from "next";
import "./globals.css";
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/primereact.min.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';

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
      <body>
        <main>
          <PrimeReactProvider>
            {children}
          </PrimeReactProvider>
        </main>
      </body>
    </html>
  );
}
