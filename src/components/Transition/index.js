import { LazyMotion, m, domAnimation } from "framer-motion";

const Transition = () => {
    return (
        <div className='fixed w-screen h-screen left-0 top-0 pointer-events-none z-[10000] overflow-hidden'>
            <LazyMotion features={domAnimation}>
                    <m.div
                        initial={{ y: "0" }}
                        animate={{ y: "100%" }}
                        transition={{ ease: [[0.215, 0.61, 0.355, 1]], duration: 0.7 }}
                        className='bg-primary h-full top-0 left-0 right-0 bottom-0 w-full absolute' />
                    <m.div
                        initial={{height: 0}}
                        exit={{ height: '100%' }}
                        transition={{ ease: [[0.215, 0.61, 0.355, 1]], duration: 0.7 }}
                        className='bg-primary top-0 left-0 right-0 bottom-0 h-0 w-full absolute origin-bottom' />
            </LazyMotion>
        </div>
    )
}

export default Transition;