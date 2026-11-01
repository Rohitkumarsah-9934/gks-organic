import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopBar from './TopBar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import BottomNav from './BottomNav.jsx';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col pb-20 md:pb-0">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
