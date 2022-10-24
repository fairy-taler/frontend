import { Outlet } from "react-router-dom";
import Header from "../main/components/common/Header";
import Navbar from "../main/components/common/Navbar";
import Footer from "../main/components/common/Footer";

function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
