import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { sidebarItems } from "../constants/sidebar-items";
import { FC, Suspense } from "react";

const MainLayout:FC=()=>{
    return <><Header /><div className="flex h-screen">
    <Sidebar items={sidebarItems} />

    <div className="flex flex-col flex-1">

        <main className="flex-1 p-6 overflow-auto">
            <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
        </main>

    </div>
</div><Footer /></>
}

export default MainLayout 