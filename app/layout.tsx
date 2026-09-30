import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'حلول العالم للاتصالات وتقنية المعلومات | Alaalam Solutions',
  description: 'مركز اتصال ومقر لخدمات الأعمال (BPO Call Center) في السعودية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-slate-950 text-white font-sans antialiased min-h-screen flex flex-col justify-between">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}