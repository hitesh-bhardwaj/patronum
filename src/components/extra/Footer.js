import { useEffect } from 'react';

const Footer = () => {

    useEffect(() => {
        const banner = document.querySelector('.footer-banner');
        const circles = document.querySelectorAll('.banner-circle');
    
        function moveCircles(event) {
          const { clientX, clientY } = event;
    
          circles.forEach((circle, index) => {
            const circleRect = circle.getBoundingClientRect();
            const circleX = circleRect.left + circleRect.width / 2;
            const circleY = circleRect.top + circleRect.height / 2;
    
            const multiplier = 0.2 / (index + 1); // Adjust the multiplier for each circle
    
            const deltaX = (clientX - circleX) * multiplier;
            const deltaY = (clientY - circleY) * multiplier;
    
            circle.style.transition = 'transform 0.3s ease-out'; // Add smooth transition
            circle.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
            circle.style.willChange = 'transform';
            circle.style.transformStyle = 'preserve-3d';
          });
        }
    
        function resetCircles() {
          circles.forEach(circle => {
            circle.style.transition = 'transform 0.3s ease-out'; // Add smooth transition
            circle.style.transform = 'translate3d(0, 0, 0)';
          });
        }
    
        if (banner) {
          banner.addEventListener('mousemove', moveCircles);
          banner.addEventListener('mouseleave', resetCircles);
        }
    
        // Cleanup event listeners on component unmount
        return () => {
          if (banner) {
            banner.removeEventListener('mousemove', moveCircles);
            banner.removeEventListener('mouseleave', resetCircles);
          }
        };
      }, []);

    return(
        <div className="footer container mx-auto relative w-full mt-[300px]">  

            <div className="footer-banner flex justify-center items-center overflow-hidden bg-[#0A489B] rounded-5xl w-4/5 absolute bottom-[92%] left-1/2 -translate-x-1/2 z-10 py-14">
                <div className="relative z-10">
                    <h6 className="text-center text-white text-6xl font-head mb-10">Ready to become the master of your domain?</h6>
                    <div className="flex items-center justify-center gap-14">
                        <a href='#' className='group w-72 block transition-all duration-500 relative gap-10 px-6 py-4 border-white border-2 rounded-full'>
                            <span className="absolute h-12 w-12 bg-white top-[12%] right-[3%] rounded-full -z-10 transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:top-0 group-hover:right-0"></span>
                            <div className="h-full w-full flex items-center justify-between z-10 relative">
                                <span className='pl-2 transition-all duration-500 text-white text-2xl font-medium group-hover:text-primary'>Try for Free</span>
                                <span className="w-6 overflow-hidden text-primary">
                                    <span className="transition-all duration-500 w-[200%] flex -translate-x-1/2 group-hover:translate-x-0 gap-1">
                                        <svg className='w-6 h-auto' viewBox="0 0 29 22" fill="currentColor" stroke='currentColor' xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0482 20.907C17.7708 20.907 17.4935 20.8049 17.2745 20.5859C16.8512 20.1626 16.8512 19.4619 17.2745 19.0386L25.3614 10.9517L17.2745 2.86481C16.8512 2.44148 16.8512 1.74081 17.2745 1.31749C17.6978 0.89417 18.3985 0.89417 18.8218 1.31749L27.6824 10.178C28.1057 10.6013 28.1057 11.302 27.6824 11.7253L18.8218 20.5859C18.6029 20.8049 18.3255 20.907 18.0482 20.907Z"/>
                                            <path d="M26.6621 12.0451L2.0948 12.0451C1.49631 12.0451 1 11.5488 1 10.9503C1 10.3518 1.49631 9.85547 2.0948 9.85547L26.6621 9.85547C27.2606 9.85547 27.7569 10.3518 27.7569 10.9503C27.7569 11.5488 27.2606 12.0451 26.6621 12.0451Z"/>
                                        </svg>
                                        <svg className='w-6 h-auto' viewBox="0 0 29 22" fill="currentColor" stroke='currentColor' xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0482 20.907C17.7708 20.907 17.4935 20.8049 17.2745 20.5859C16.8512 20.1626 16.8512 19.4619 17.2745 19.0386L25.3614 10.9517L17.2745 2.86481C16.8512 2.44148 16.8512 1.74081 17.2745 1.31749C17.6978 0.89417 18.3985 0.89417 18.8218 1.31749L27.6824 10.178C28.1057 10.6013 28.1057 11.302 27.6824 11.7253L18.8218 20.5859C18.6029 20.8049 18.3255 20.907 18.0482 20.907Z"/>
                                            <path d="M26.6621 12.0451L2.0948 12.0451C1.49631 12.0451 1 11.5488 1 10.9503C1 10.3518 1.49631 9.85547 2.0948 9.85547L26.6621 9.85547C27.2606 9.85547 27.7569 10.3518 27.7569 10.9503C27.7569 11.5488 27.2606 12.0451 26.6621 12.0451Z"/>
                                        </svg>
                                    </span>
                                </span>
                            </div>
                        </a>
                        <a href='#' className='group w-72 block transition-all duration-500 relative gap-10 px-6 py-4 border-white border-2 rounded-full'>
                            <span className="absolute h-12 w-12 bg-white top-[12%] right-[3%] rounded-full -z-10 transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:top-0 group-hover:right-0"></span>
                            <div className="h-full w-full flex items-center justify-between z-10 relative">
                                <span className='pl-2 transition-all duration-500 text-white text-2xl font-medium group-hover:text-primary'>Schedule a Demo</span>
                                <span className="w-4 overflow-hidden text-primary">
                                    <span className="transition-all duration-500 w-[200%] flex -translate-x-1/2 group-hover:translate-x-0 gap-1">
                                        <svg className='w-4 h-auto' viewBox="0 0 16 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.21809 0C1.35452 0 1.49094 0 1.63711 0C2.16333 0.105559 2.64082 0.326273 3.08908 0.623757C6.96748 3.24354 10.8459 5.85372 14.7145 8.4735C14.9094 8.60785 15.1141 8.75179 15.2797 8.92453C15.9326 9.57707 16.186 10.3352 15.8547 11.2276C15.65 11.7842 15.231 12.1681 14.7438 12.4943C10.8459 15.1237 6.95773 17.7531 3.05984 20.3633C2.70903 20.6032 2.29975 20.7855 1.89048 20.9199C1.1109 21.1694 0.428768 20.8239 0.175405 20.0562C0.0584683 19.7107 0.0194894 19.3365 0.0194894 18.9718C0 13.3196 0 7.66742 0 2.02481C0 1.89046 0 1.75612 0.00974472 1.61217C0.0487236 0.758105 0.409278 0.268695 1.21809 0Z"/>
                                        </svg>
                                        <svg className='w-4 h-auto' viewBox="0 0 16 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.21809 0C1.35452 0 1.49094 0 1.63711 0C2.16333 0.105559 2.64082 0.326273 3.08908 0.623757C6.96748 3.24354 10.8459 5.85372 14.7145 8.4735C14.9094 8.60785 15.1141 8.75179 15.2797 8.92453C15.9326 9.57707 16.186 10.3352 15.8547 11.2276C15.65 11.7842 15.231 12.1681 14.7438 12.4943C10.8459 15.1237 6.95773 17.7531 3.05984 20.3633C2.70903 20.6032 2.29975 20.7855 1.89048 20.9199C1.1109 21.1694 0.428768 20.8239 0.175405 20.0562C0.0584683 19.7107 0.0194894 19.3365 0.0194894 18.9718C0 13.3196 0 7.66742 0 2.02481C0 1.89046 0 1.75612 0.00974472 1.61217C0.0487236 0.758105 0.409278 0.268695 1.21809 0Z"/>
                                        </svg>
                                    </span>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='banner-circle _c1'></div>
                <div className='banner-circle _c2'></div>
                <div className='banner-circle _c3'></div>

                {/* <img className="banner-circle _c3" src="/assets/footer/circle-03.svg" loading="lazy" alt="banner-circle-3"/>
                <img className="banner-circle _c2" src="/assets/footer/circle-02.svg" loading="lazy" alt="banner-circle-2"/>
                <img className="banner-circle _c1" src="/assets/footer/circle-01.svg" loading="lazy" alt="banner-circle-1"/> */}

            </div>

            <div className="footer-main bg-sky shadow-xl pt-32 px-14 pb-6 text-head relative">

                <img loading="lazy" className="absolute top-[12%] left-[38%]" src="/assets/footer/ele-1.png" alt="background element" title="background element"/>
                <img loading="lazy" className="absolute top-[60%] left-[60%]" src="/assets/footer/ele-2.png" alt="background element" title="background element"/>
                <img loading="lazy" className="absolute top-[55%] left-[36%]" src="/assets/footer/ele-3.png" alt="background element" title="background element"/>
                <img loading="lazy" className="absolute top-[50%] right-[7%]" src="/assets/footer/ele-4.png" alt="background element" title="background element"/>
                
                <div className="footer-top grid grid-cols-16 px-14">
                    <div className="font-medium">
                        <h6 className="text-2xl text-primary font-head mb-3">Important Links</h6>
                        <ul>
                            <li className="py-2">
                                <a href="/features" className="text-xl">
                                    Features
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="/use-cases" className="text-xl">
                                    Use Cases
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="/community" className="text-xl">
                                    Community
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="/legal" className="text-xl">
                                    Legal
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="/help.patronum.io" className="text-xl">
                                    Help
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="font-medium">
                        <h6 className="text-2xl text-primary font-head mb-3">Resouces</h6>
                        <ul>
                            <li className="py-2">
                                <a href="/blog" className="text-xl">
                                    Blogs
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="/guides" className="text-xl">
                                    Guides
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="/case-studies" className="text-xl">
                                    Case Studies
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="/ebooks" className="text-xl">
                                    Ebooks
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="/webinars" className="text-xl">
                                    Webinars
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="/product-videos" className="text-xl">
                                    Product Videos
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-10 items-center">
                        <img src="/assets/footer/google-partner.png" alt="Patronum Google Patrner" title="Patronum Google Patrner"/>
                        <img src="/assets/footer/award-1.png" alt="Award for best value image" title="Award for best value image"/>
                        <img src="/assets/footer/award-2.png" alt="Award for best ease of use image" title="Award for best ease of use image"/>
                    </div>

                    <div className="flex flex-col gap-10 pl-20">
                        <img className="w-72" src="/logo.svg" alt="patronum logo" title="patronum logo"/>
                        <p className="leading-[1.6] text-xl text-head font-medium">Your Google Workspace Manager Providing a better way to manage your Google Workspace.</p>
                        <ul className="flex items-center justify-start gap-4">
                            <li>
                                <a href="#" target="blank" className="border-2 border-primary rounded-[50%] w-12 h-12 p-4 text-primary hover:bg-primary hover:text-white block flex items-center justify-center duration-300">
                                    <svg className="w-full h-auto" viewBox="0 0 15 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.75 29C7.98214 29 6.21429 29 4.44643 29C4.44643 28.8749 4.42857 28.7498 4.42857 28.6247C4.42857 24.4602 4.42857 20.2958 4.42857 16.1313C4.42857 16.0062 4.42857 15.8989 4.42857 15.756C2.92857 15.756 1.46429 15.756 0 15.756C0 14.0223 0 12.3243 0 10.5906C1.48214 10.5906 2.94643 10.5906 4.42857 10.5906C4.42857 10.4476 4.42857 10.3404 4.42857 10.251C4.42857 9.16075 4.41071 8.07049 4.42857 6.99809C4.44643 6.30104 4.48214 5.60398 4.625 4.9248C5.14286 2.2617 7.07143 0.474376 9.75 0.099039C11.0536 -0.079693 12.3393 0.0275462 13.6429 0.0811658C14.0893 0.099039 14.5536 0.170532 15 0.224151C15 1.76125 15 3.28047 15 4.81756C13.8571 4.83544 12.7143 4.81756 11.5893 4.87118C10.6607 4.90693 10.0893 5.40738 9.85714 6.26529C9.80357 6.47977 9.76786 6.71212 9.76786 6.9266C9.75 8.08836 9.75 9.25012 9.75 10.4119C9.75 10.4655 9.76786 10.537 9.78571 10.6264C11.4643 10.6264 13.1429 10.6264 14.8393 10.6264C14.625 12.3601 14.3929 14.058 14.1786 15.7738C12.6964 15.7738 11.2321 15.7738 9.76786 15.7738C9.76786 15.9168 9.76786 16.0062 9.76786 16.1134C9.76786 20.2958 9.76786 24.496 9.76786 28.6783C9.73214 28.7855 9.75 28.8928 9.75 29Z"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="blank" className="border-2 border-primary rounded-[50%] w-12 h-12 p-3 text-primary hover:bg-primary hover:text-white block flex items-center justify-center duration-300">
                                    <svg className="w-full h-auto" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.83105 24.9836C8.83105 19.5676 8.83105 14.1675 8.83105 8.75142C8.83105 8.62323 8.83105 8.49504 8.83105 8.3348C10.4815 8.3348 12.116 8.3348 13.7985 8.3348C13.7985 9.0719 13.7985 9.809 13.7985 10.5621C14.151 10.1455 14.4554 9.72888 14.824 9.37636C15.7374 8.51107 16.843 8.0624 18.0768 7.95023C19.1504 7.85409 20.224 7.9342 21.2656 8.25468C22.9641 8.7995 24.0217 9.98526 24.4704 11.6678C24.6947 12.5331 24.7748 13.4464 24.919 14.3277C24.9511 14.504 24.9671 14.6803 24.9831 14.8726C24.9831 18.2215 24.9831 21.5866 24.9831 24.9356C23.2686 24.9356 21.538 24.9356 19.7914 24.9356C19.7914 24.7913 19.7914 24.6632 19.7914 24.551C19.7914 21.7949 19.8074 19.0548 19.7754 16.2987C19.7754 15.6257 19.6792 14.9366 19.535 14.2797C19.3427 13.3823 18.8139 12.7414 17.8685 12.5331C17.484 12.4529 17.0834 12.4369 16.6828 12.469C15.3848 12.5651 14.5356 13.2541 14.2471 14.52C14.0869 15.2411 14.0068 16.0102 14.0068 16.7473C13.9747 19.5035 13.9907 22.2435 13.9907 24.9997C12.2922 24.9836 10.5616 24.9836 8.83105 24.9836Z" />
                                        <path d="M0.417969 24.9828C0.417969 21.4736 0.417969 17.9804 0.417969 14.4711C0.417969 12.5483 0.417969 10.6094 0.417969 8.68651C0.417969 8.57434 0.417969 8.46218 0.417969 8.33398C2.14855 8.33398 3.84708 8.33398 5.59369 8.33398C5.59369 8.46218 5.59369 8.59037 5.59369 8.71856C5.59369 14.0866 5.59369 19.4706 5.59369 24.8386C5.59369 24.8867 5.59369 24.9347 5.59369 24.9828C3.87913 24.9828 2.14855 24.9828 0.417969 24.9828Z"/>
                                        <path d="M5.9935 3.02908C5.96145 4.72762 4.58339 6.0576 2.91691 6.00953C1.31452 5.97748 -0.031487 4.56738 0.000560749 2.93294C0.0326085 1.2985 1.42669 -0.0314805 3.06112 0.000567283C4.71159 0.048639 6.02554 1.39465 5.9935 3.02908Z"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="blank" className="border-2 border-primary rounded-[50%] w-12 h-12 p-3 text-primary hover:bg-primary hover:text-white block flex items-center justify-center duration-300">
                                    <svg className="w-full h-auto" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.0163597 24.9813C0.588949 24.2941 1.16154 23.6234 1.75049 22.9363C4.28624 19.9915 6.82199 17.0304 9.35774 14.0857C9.40682 14.0203 9.4559 13.9548 9.52134 13.8894C6.34756 9.27595 3.19014 4.66251 0 0.0163597C0.0981582 0.0163597 0.147237 0 0.212676 0C2.48667 0 4.77703 0 7.05103 0C7.21462 0 7.29642 0.0654388 7.37822 0.179957C9.39046 3.10834 11.3863 6.02037 13.3986 8.94875C13.4477 9.01419 13.4967 9.09599 13.5622 9.17779C13.9712 8.70336 14.3802 8.22893 14.7728 7.77086C16.9323 5.26782 19.0918 2.76479 21.2349 0.245395C21.3821 0.0654388 21.5457 0 21.7747 0C22.3637 0.0163597 22.9526 0 23.607 0C20.5641 3.55005 17.5376 7.05103 14.5274 10.5684C14.5765 10.6502 14.6256 10.7156 14.6746 10.781C17.8648 15.4272 21.0549 20.0897 24.2614 24.7359C24.3105 24.8013 24.3432 24.8831 24.3923 24.9649C21.9711 24.9649 19.5498 24.9649 17.1286 24.9649C17.0959 24.9158 17.0795 24.8667 17.0468 24.8177C14.8873 21.7093 12.7442 18.5846 10.6011 15.4599C10.5684 15.4108 10.5193 15.3618 10.4702 15.2963C10.3884 15.3781 10.323 15.4599 10.2739 15.5254C8.53976 17.5376 6.80563 19.5498 5.08786 21.5621C4.12264 22.6909 3.14106 23.8361 2.17584 24.9649C1.43965 24.9813 0.719826 24.9813 0.0163597 24.9813ZM2.92838 1.61961C2.99382 1.71777 3.02654 1.78321 3.05926 1.83229C8.04897 8.96511 13.0223 16.0979 18.012 23.2471C18.0938 23.378 18.192 23.4271 18.3556 23.4271C19.3044 23.4271 20.2533 23.4271 21.2022 23.4271C21.2676 23.4271 21.333 23.4107 21.4312 23.4107C21.3494 23.2962 21.3003 23.2144 21.2512 23.149C17.603 17.9139 13.9385 12.6788 10.2902 7.46002C8.98147 5.59502 7.6727 3.71365 6.36392 1.84865C6.29848 1.76685 6.18396 1.65233 6.10216 1.65233C5.05514 1.61961 4.02448 1.61961 2.92838 1.61961Z"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="blank" className="border-2 border-primary rounded-[50%] w-12 h-12 p-3 text-primary hover:bg-primary hover:text-white block flex items-center justify-center duration-300">
                                    <svg className="w-full h-auto" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.9224 24.9776C14.637 24.9776 10.3369 24.9776 6.05152 24.9776C5.99301 24.963 5.93451 24.9483 5.86138 24.9337C2.59978 24.5827 0.0255955 21.7891 0.0109695 18.5129C-0.00365651 14.5054 -0.00365651 10.5125 0.0109695 6.50492C0.0255955 2.9508 2.9508 0.0255955 6.50492 0.0109695C10.4978 -0.00365651 14.4761 -0.00365651 18.4544 0.0109695C21.2626 0.0255955 23.749 1.83922 24.6266 4.51579C24.7875 5.01307 24.8606 5.53961 24.9776 6.05152C24.9776 10.3369 24.9776 14.637 24.9776 18.9224C24.963 18.9809 24.9483 19.0394 24.9337 19.1126C24.5388 21.8623 23.0323 23.7051 20.4289 24.6412C19.9316 24.8021 19.4197 24.8606 18.9224 24.9776ZM20.5752 12.5016C20.5752 11.2876 20.5752 10.059 20.5752 8.84509C20.5752 6.32941 18.6445 4.39878 16.1288 4.39878C13.7009 4.39878 11.273 4.39878 8.84509 4.39878C6.32941 4.39878 4.39878 6.34404 4.39878 8.84509C4.39878 11.273 4.39878 13.7009 4.39878 16.1289C4.39878 18.6445 6.32941 20.5752 8.84509 20.5752C11.273 20.5752 13.7009 20.5752 16.1288 20.5752C18.6445 20.5752 20.5752 18.6299 20.5752 16.1289C20.5752 14.9149 20.5752 13.7009 20.5752 12.5016Z"/>
                                        <path d="M19.1125 12.4879C19.1125 13.7018 19.1125 14.9158 19.1125 16.1151C19.1125 17.841 17.8254 19.1135 16.1142 19.1135C13.7009 19.1135 11.273 19.1135 8.85966 19.1135C7.13379 19.1135 5.86133 17.8264 5.86133 16.1005C5.86133 13.6872 5.86133 11.2739 5.86133 8.86062C5.86133 7.12012 7.13379 5.84766 8.87429 5.84766C11.2876 5.84766 13.7009 5.84766 16.1142 5.84766C17.8547 5.84766 19.1271 7.12012 19.1271 8.87524C19.1125 10.0746 19.1125 11.2885 19.1125 12.4879ZM12.4869 16.1444C14.5053 16.1444 16.1434 14.5063 16.1434 12.4879C16.1434 10.4695 14.5053 8.83137 12.4869 8.83137C10.4685 8.83137 8.83041 10.4695 8.83041 12.4879C8.83041 14.5063 10.4685 16.1444 12.4869 16.1444ZM16.67 9.0215C17.0649 9.0215 17.4013 8.69973 17.4013 8.30483C17.4013 7.90993 17.0795 7.57353 16.6846 7.5589C16.2751 7.54428 15.9387 7.88067 15.9387 8.2902C15.9533 8.69973 16.2751 9.0215 16.67 9.0215Z"/>
                                        <path d="M12.4859 10.293C13.6999 10.293 14.6798 11.2875 14.6798 12.5015C14.6798 13.7008 13.6852 14.6808 12.4859 14.6808C11.2719 14.6808 10.292 13.6862 10.292 12.4722C10.292 11.2729 11.2866 10.293 12.4859 10.293Z"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="blank" className="border-2 border-primary rounded-[50%] w-12 h-12 p-2.5 text-primary hover:bg-primary hover:text-white block flex items-center justify-center duration-300">
                                    <svg className="w-full h-auto" viewBox="0 0 35 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.1422 0.492188C17.5972 0.492188 18.0521 0.492188 18.5071 0.492188C18.6019 0.511144 18.6967 0.530101 18.7914 0.530101C20.5923 0.568014 22.4122 0.549058 24.2131 0.643841C26.3741 0.757582 28.5352 0.890279 30.6773 1.15567C32.5919 1.38315 33.881 2.53951 34.298 4.45415C34.6014 5.81903 34.6961 7.24079 34.8478 8.64358C34.9426 9.45872 34.9426 10.2928 34.9994 11.1269C34.9994 11.98 34.9994 12.833 34.9994 13.6861C34.9805 13.8946 34.9426 14.0842 34.9426 14.2927C34.8857 16.2452 34.772 18.1788 34.4307 20.1124C34.0516 22.2545 32.7815 23.6004 30.6204 23.9038C29.1608 24.1312 27.6632 24.226 26.1846 24.3018C21.5402 24.5293 16.8958 24.5483 12.2324 24.3966C9.8249 24.3208 7.43636 24.2639 5.04781 23.8848C3.19005 23.5815 1.9389 22.5389 1.40811 20.7001C1.2375 20.1314 1.16168 19.5437 1.08585 18.956C0.744628 16.2642 0.649845 13.5723 0.725672 10.8805C0.801499 8.83315 0.896282 6.78582 1.29437 4.77641C1.67351 2.84282 3.00048 1.45898 4.80137 1.13672C5.59755 1.00402 6.39373 0.909236 7.20887 0.871322C9.97656 0.738625 12.7442 0.662798 15.5119 0.549058C16.0427 0.530101 16.5925 0.511144 17.1422 0.492188ZM23.3411 12.5108C20.3459 10.7857 17.4076 9.09855 14.4503 7.39244C14.4503 10.8236 14.4503 14.1979 14.4503 17.6291C17.4266 15.923 20.3459 14.2358 23.3411 12.5108Z"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="py-10 px-14">
                    <p className="text-lg text-center font-body text-head">Bespin Labs Limited is registered with the Information Commissioners Office in relation to the processing of personal information (registration number: ZA686937). Bespin Labs Limited is incorporated in England and Wales (company number: 11068628). Our registered office is First Floor Office Suite, Mill B Colne Road Buildings, Colne Road, Huddersfield, United Kingdom, HD1 3AG</p>
                </div>

                <div className="pt-6 px-14 border-t-2 border-gray-200 text-center">
                    <p className="text-lg font-medium font-body text-head">© 2024 <a href="www.bespinlabs.com" target="black" className="text-primary">Bespin Labs Ltd.</a> All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;