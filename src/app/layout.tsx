import React from 'react';
import './globals.css';

export const metadata = {
  title: 'SPELLcialist - Grimório Ancestral',
  description: 'Sistema modular de conjuração offline para Magos Escribas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-black text-slate-100">
      <body className="antialiased min-h-screen bg-black">
        {children}
      </body>
    </html>
  );
}