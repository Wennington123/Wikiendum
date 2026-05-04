import type { Metadata } from "next";
import "./globals.css"; // ISSO AQUI FAZ A MÁGICA DO ESTILO ACONTECER!

export const metadata: Metadata = {
  title: "Wikiendum",
  description: "Dicionário colaborativo de conceitos acadêmicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-wiki-bg antialiased">
        {children}
      </body>
    </html>
  );
}