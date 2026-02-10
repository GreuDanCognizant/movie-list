import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import { FC } from "react";
import {sidebarItems} from "../constants/sidebar-items"

const MainLayout:FC<any>=({children})=> {
  return (
    <div className="app-container">
      <Header className="sticky top-0 z-50" userName="Dan" />
      <div className="content-wrapper">
        <Sidebar items={sidebarItems} />
        {children && <main className="main-content">
          {children}
        </main>}
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
