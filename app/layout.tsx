import './ui/global.css'
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className='hello'>Hello</div>
        {children}
      </body>
    </html>
  );
}
