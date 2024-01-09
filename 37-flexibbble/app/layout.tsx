import './global.css';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';

export const metadata = {
  title: 'Flexibble',
  description: 'Showcase and discover remarcable developer projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
