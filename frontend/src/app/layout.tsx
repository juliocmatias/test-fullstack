import type { Metadata } from 'next';

import '@/styles/globals.css';

import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';

import { StoreProvider } from './StoreProvider';

export const metadata: Metadata = {
  title: 'Customer Management',
  description: 'Gerenciamento de clientes'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-100 text-primary">
        <Header />
        <StoreProvider>
          <Layout>{children}</Layout>
        </StoreProvider>
      </body>
    </html>
  );
}
