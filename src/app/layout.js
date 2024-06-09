import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import Naavbar from './Components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://admin.desh365.top/public/storage/post-image/4619_1716795170.webp" />
        <meta property="og:url" content="https://news-portal-nextjs-delta.vercel.app" />
      </Head>
      <body className={inter.className}>
        <div className='container mx-auto px-4'>
        <Naavbar/>
        {children}
        </div>
        </body>
    </html>
  )
}
