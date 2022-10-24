import { Outlet } from "react-router-dom";
import Header from "../main/components/common/Header"
import Footer from "../main/components/common/Footer"

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
