// pages/Component.js
import SideBar from "@/components/ui/sidebar";
import Header from "@/components/ui/header";
import MainContent from "@/components/ui/main";

export default function Component() {
    return (
        <div key="1" className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <SideBar />
            <Header />
            <MainContent />\
        </div>
    );
}
