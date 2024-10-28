import { motion } from 'framer-motion';
import PageLoader from '../PageLoader';
import dynamic from 'next/dynamic'
import { ModalProvider } from '../Modals/ModalContext';

const CrispWithNoSSR = dynamic(() => import('@/components/Crisp'));
const DynamicHeader = dynamic(() => import('../Header'));
const DynamicFooter = dynamic(() => import('../Footer'));
const DynamicInstallModal = dynamic(() => import('../Modals/InstallModal'));
const DynamicDemoModal = dynamic(() => import('../Modals/DemoModal'));

export default function Layout({ children }) {

    return (
        <ModalProvider>
            <div className='page'>
                <div className='fixed w-screen h-screen left-0 top-0 pointer-events-none z-[10000]'>
                    <motion.div
                        initial={{ top: 0, height: 0 }}
                        exit={{ height: '100%' }}
                        transition={{ ease: [[0.215, 0.61, 0.355, 1]], duration: 0.4 }}
                        className='bg-primary h-0 w-full relative origin-bottom' />
                </div>
                <PageLoader />
                <CrispWithNoSSR />
                <DynamicHeader />
                {children}
                <DynamicFooter />
            </div>
            <DynamicInstallModal />
            <DynamicDemoModal />
        </ModalProvider>
    )
}