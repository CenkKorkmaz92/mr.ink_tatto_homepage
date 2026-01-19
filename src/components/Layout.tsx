import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const isPricingPage = location.pathname === "/pircing";

  return (
    <div className={`min-h-screen flex flex-col ${isPricingPage ? 'bg-golden text-golden-foreground' : ''}`}>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;