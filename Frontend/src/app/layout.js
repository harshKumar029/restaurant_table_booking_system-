// import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import './globals.css'; // Import global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}  
      </body>
    </html>
  );
}
