// import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import './globals.css'; // Import global styles
import { Suspense } from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        {children}  
        </Suspense>
      </body>
    </html>
  );
}
