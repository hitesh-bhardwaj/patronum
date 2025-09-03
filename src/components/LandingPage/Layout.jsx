import { useDevice } from "@/utils/useDevice";
import Transition from "../Transition";
import dynamic from "next/dynamic";
import PreLoader from "../PreLoader";
import { useEffect, useState } from "react";

const Footer = dynamic(() => import("../Footer"), { ssr: false });
const DemoModal = dynamic(() => import("@/components/Modals/DemoModal"), { ssr: false });
const InstallModal = dynamic(() => import("@/components/Modals/InstallModal"), { ssr: false });
const BgVideo = dynamic(() => import("../Layout/BgVideo"), { ssr: false });

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
                {children}
                <Footer />
                <DemoModal />
                <InstallModal />
            <Transition />
            {/* {isDesktop && <Background />} */}
            {isDesktop && <BgVideo />}
        </>
    );
};

export default Layout;
