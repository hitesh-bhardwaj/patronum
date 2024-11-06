import { useDevice } from "@/utils/useDevice";
import Transition from "../Transition";
import dynamic from "next/dynamic";
import { ModalProvider } from "../Modals/ModalContext";
import Header from "../Header";
import PreLoader from "../PreLoader";
import { useEffect, useState } from "react";

const Background = dynamic(() => import("../Background"), { ssr: false });
const Footer = dynamic(() => import("../Footer"), { ssr: false });
const DemoModal = dynamic(() => import("@/components/Modals/DemoModal"), { ssr: false });
const InstallModal = dynamic(() => import("@/components/Modals/InstallModal"), { ssr: false });

const Layout = ({ children }) => {
    const { isDesktop } = useDevice();
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
            setShowPreloader(true);
            const preloaderTimeout = setTimeout(() => {
                setShowPreloader(false);
                sessionStorage.setItem('hasVisited', 'true');
            }, 3400);
            return () => clearTimeout(preloaderTimeout);
        } else {
            setShowPreloader(false);
        }
    }, []);

    return (
        <>
            {showPreloader && <PreLoader />}
            <ModalProvider>
                <Header />
                {children}
                <Footer />
                <DemoModal />
                <InstallModal />
            </ModalProvider>
            <Transition />
            {isDesktop && <Background />}
        </>
    );
};

export default Layout;
