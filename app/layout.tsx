import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css'; 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen flex flex-col justify-between">
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}