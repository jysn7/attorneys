
import { Sidebar } from '@/components/Layout/Sidebar';
import './globals.css';
import { Footer } from '@/components/Layout/Footer';
import MobileHeader from '@/components/Layout/MobileHeader';
import MobileMenu from '@/components/Layout/MobileMenu';

export const metadata = {
  title: 'Sterling & Hart | Global Litigation',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased md:pl-24 selection:bg-amber-900 selection:text-white overflow-x-hidden bg-[#050505] text-[#e5e5e5] font-sans">
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
