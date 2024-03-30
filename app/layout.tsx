// app/layout.tsx
import './globals.css';
import Sidebar from './components/Sidebar';
import TopBanner from './components/TopBanner';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 ml-64 mt-16">
            <TopBanner />
            <div className="p-8">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
