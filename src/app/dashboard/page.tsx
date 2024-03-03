// pages/Component.js
import SideBar from "@/components/ui/sidebar";
import Header from "@/components/ui/header";
import MainContent from "@/components/ui/main";

export default function Component() {
    return (
        <div key="1" className="flex min-h-screen">
            <SideBar />
            <div className="flex-1 flex flex-col">
                <Header />
                <MainContent />
            </div>
        </div>
    );
}
