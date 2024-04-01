// app/layout.tsx

import './globals.css';
import Sidebar from '../components/Sidebar';
import TopBanner from '../components/TopBanner';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <div className="flex-none">
            <TopBanner />
          </div>
          <div className="flex flex-grow">
            <div className="w-1/5 bg-green-100" style={{ marginTop: '4rem' }}>
              <Sidebar />
            </div>
            <div className="w-4/5 p-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
