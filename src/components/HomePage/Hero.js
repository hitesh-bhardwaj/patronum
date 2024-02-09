export default function Hero(){
    return(
        <>
            <section id="hero">
                <div className="container-lg relative">
                    <div className="px-[4vw] flex-all">
                        <div className="hero-left flex flex-col gap-y-10">
                            <h1 className='title-5xl'>
                                <div className='Your'>Your</div>
                                <img
                                    src="/assets/home/google-workspace.svg"
                                    alt='Google Logo'
                                    title='Google Logo'
                                    className='google-logo-hero'
                                />
                                <div className=''>Manager</div>
                            </h1>
                            <p className="hero-para">
                                <span>
                                    The only tool you'll ever need to streamline your Google Workspace management.
                                </span>
                            </p>

                            <a data-v-f4363f2a href="/contact" className="btn inline-flex items-center px-10 h-[5.5rem] relative w-full max-w-[17rem] rounded-full is-default-scale is-default-clip is-default-circle bg-black text-white">
                                <span data-v-f4363f2a className="p1 font-medium leading-none">
                                    Watch Demo
                                </span>
                                <div data-v-f4363f2a aria-hidden="true" className="btn__circle hero absolute inset-[-1px] rounded-full flex items-center p1 font-medium leading-none px-40 z-2 bg-white text-black">
                                    <div data-v-f4363f2a className="px-[1px] w-full flex justify-between items-center">
                                        Watch Demo
                                        <svg data-v-f4363f2a viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-15 w-[0.7rem] overflow-hidden">
                                            <path data-v-f4363f2a d="M1.21809 0C1.35452 0 1.49094 0 1.63711 0C2.16333 0.105559 2.64082 0.326273 3.08908 0.623757C6.96748 3.24354 10.8459 5.85372 14.7145 8.4735C14.9094 8.60785 15.1141 8.75179 15.2797 8.92453C15.9326 9.57707 16.186 10.3352 15.8547 11.2276C15.65 11.7842 15.231 12.1681 14.7438 12.4943C10.8459 15.1237 6.95773 17.7531 3.05984 20.3633C2.70903 20.6032 2.29975 20.7855 1.89048 20.9199C1.1109 21.1694 0.428768 20.8239 0.175405 20.0562C0.0584683 19.7107 0.0194894 19.3365 0.0194894 18.9718C0 13.3196 0 7.66742 0 2.02481C0 1.89046 0 1.75612 0.00974472 1.61217C0.0487236 0.758105 0.409278 0.268695 1.21809 0Z" className="btn__path fill-current"/>
                                            <path data-v-f4363f2a d="M1.21809 0C1.35452 0 1.49094 0 1.63711 0C2.16333 0.105559 2.64082 0.326273 3.08908 0.623757C6.96748 3.24354 10.8459 5.85372 14.7145 8.4735C14.9094 8.60785 15.1141 8.75179 15.2797 8.92453C15.9326 9.57707 16.186 10.3352 15.8547 11.2276C15.65 11.7842 15.231 12.1681 14.7438 12.4943C10.8459 15.1237 6.95773 17.7531 3.05984 20.3633C2.70903 20.6032 2.29975 20.7855 1.89048 20.9199C1.1109 21.1694 0.428768 20.8239 0.175405 20.0562C0.0584683 19.7107 0.0194894 19.3365 0.0194894 18.9718C0 13.3196 0 7.66742 0 2.02481C0 1.89046 0 1.75612 0.00974472 1.61217C0.0487236 0.758105 0.409278 0.268695 1.21809 0Z" className="btn__path fill-current"/>
                                        </svg>
                                    </div>
                                </div>
                            </a>

                        </div>
                        
                        <div className="hero-right">
                            <img
                                src="/assets/home/hero-animation.gif"
                                className='hero-img'
                                alt='patronum dashboard showcase'
                                title='patronum dashboard showcase'
                            />
                        </div>
                    </div>
                    <div className="scroll-down-btn">
                        <a href="#features">
                            <img src="/assets/icons/arrow-down-big.svg" alt="arrow down icon" title="down arrow"/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}