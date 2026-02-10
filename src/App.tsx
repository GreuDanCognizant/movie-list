import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { sidebarItems } from "./constants/sidebar-items";
import AppRouter from "./router/Router";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
          <Header userName={"Dan"} />

      <div className="flex h-screen">
        <Sidebar items={sidebarItems} />

        <div className="flex flex-col flex-1">

          <main className="flex-1 p-6 overflow-auto">
            <AppRouter />
          </main>

        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
