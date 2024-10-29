import { domAnimation, LazyMotion, m } from 'framer-motion';
import PageLoader from '../PageLoader';
import dynamic from 'next/dynamic'
import { ModalProvider } from '../Modals/ModalContext';
import Cookie from '../Cookie';

const CrispWithNoSSR = dynamic(() => import('@/components/Crisp'), { ssr: false });
const DynamicHeader = dynamic(() => import('../Header'), { ssr: false });
const DynamicFooter = dynamic(() => import('../Footer'), { ssr: false });
const DynamicInstallModal = dynamic(() => import('../Modals/InstallModal'), { ssr: false });
const DynamicDemoModal = dynamic(() => import('../Modals/DemoModal'), { ssr: false });

export default function Layout({ children }) {

    return (
        <>
            <Cookie />
            <CrispWithNoSSR />
            <ModalProvider>
                <div className='page'>
                    <div className='fixed w-screen h-screen left-0 top-0 pointer-events-none z-[10000]'>
                        <LazyMotion features={domAnimation}>
                            <m.div
                                initial={{ top: 0, height: 0 }}
                                exit={{ height: '100%' }}
                                transition={{ease: "easeOut", duration: 0.4}}
                                // transition={{ ease: [[0.215, 0.61, 0.355, 1]], duration: 0.4 }}
                                className='bg-primary h-0 w-full relative origin-bottom' />
                        </LazyMotion>
                    </div>
                    <PageLoader />
                    <DynamicHeader />
                    {children}
                    <DynamicFooter />
                </div>
                <DynamicInstallModal />
                <DynamicDemoModal />
            </ModalProvider>
        </>
    )
}