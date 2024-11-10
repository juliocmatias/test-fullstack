import type { Metadata } from 'next';

import '@/styles/globals.css';

import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';

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
        <Header/>
        <Layout>
          <div className='py-20'>
            {children}
          </div>
        </Layout>
      </body>
    </html>
  );
}
