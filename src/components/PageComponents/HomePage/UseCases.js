import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useEffect } from "react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function UseCases() {

    if (globalThis.innerWidth > 1024) {
        useEffect(() => {
            let ctx = gsap.context(() => {
                const sectionLength = document.getElementsByClassName('useCase-item').length;
                const foc_container = document.querySelector('.useCases-items');
                const newWidth = sectionLength * 100;
                foc_container.style.width = newWidth + "%";
                const foc_sections = gsap.utils.toArray(".useCases-items .useCase-item");
            
                const navbarLinks = document.querySelectorAll(".use-cases-list li a");
                const sections = gsap.utils.toArray('.useCase-item');
                
                const scrollTween = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#use-cases",
                        pin: true,
                        scrub: 1,
                        start: '20% top',
                        markers: false,
                        snap: {
                            snapTo: 1 / (foc_sections.length - 1),
                            inertia: false,
                            duration: {min: 0.1, max: 1}
                        },
                        end: "+=" + (foc_container.offsetWidth - innerWidth),
                        invalidateOnRefresh: true,
                    }
                });

                scrollTween.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: 'none',
                });
        
                sections.forEach((section, i) => {
        
                    let relatedLink = document.querySelector(`[data-section="${section.id}"]`);
                    
                    ScrollTrigger.create({
                        trigger: section,
                        start: "left 90%",
                        end: "right 90%",
                        containerAnimation: scrollTween,
                        markers: false,
                        id: `section-${i+1}`,
                        onToggle: self => { // Use self to access trigger element within onToggle
                        const currentActive = document.querySelector('.use-cases-list .active');
                        if (self.isActive) {
                            relatedLink.classList.add('active');
                            if (currentActive && currentActive !== relatedLink) {
                            currentActive.classList.remove('active');
                            }
                        } else {
                            relatedLink.classList.remove('active');
                        }
                        },
                    });
                });
        
                navbarLinks.forEach(anchor => {
                    anchor.addEventListener("click", function(e) {
                        e.preventDefault();
                        let targetElem = document.querySelector(e.target.getAttribute("href")),
                            y = targetElem;
                        if (targetElem && foc_container.isSameNode(targetElem.parentElement)) {
                            // Ensure scrollTrigger and its properties are defined
                            if (scrollTween.scrollTrigger && 'end' in scrollTween.scrollTrigger && 'start' in scrollTween.scrollTrigger) {
                                let totalScroll = scrollTween.scrollTrigger.end - scrollTween.scrollTrigger.start,
                                    totalMovement = (foc_sections.length - 1) * targetElem.offsetWidth;
                                y = Math.round(scrollTween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
                            }
                            gsap.to(window, {
                                scrollTo: {
                                    y: y,
                                    autoKill: false
                                },
                                duration: 1
                            });
                        }
                    });
                });
            });
            return () => ctx.revert();
        }, []);

        useEffect(() => {
            let ctx = gsap.context(() => {
                const UseCaseList = document.querySelectorAll('.use-cases-list li')

                gsap.to(UseCaseList, {
                    scrollTrigger: {
                        trigger: '.use-cases-list',
                        start: 'top 80%',
                    },
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power2.out'
                });
            });
            return () => ctx.revert();
        }, []);
    }

    return (
        <>
            <section id="use-cases" className="lg:block hidden">
                <div className="content">
                    <div className="container overflow-hidden">
                        <div className="section-head">
                            <h2 className="title-4xl text-anim">
                                <span>Master Challenges</span> 
                                <br />
                                <span>Across Your Organisation</span>
                            </h2>
                        </div>

                        <div className="use-cases-button">
                            <ul className="use-cases-list flex-all">
                                <li className="" data-section="useCase-1">
                                    <a href="#useCase-1" className="anchor" >For Business</a>
                                </li>
                                <li className="" data-section="useCase-2">
                                    <a href="#useCase-2" className="anchor" >For Human Resources</a>
                                </li>
                                <li className="" data-section="useCase-3">
                                    <a href="#useCase-3" className="anchor" >For Sales & Marketing</a>
                                </li>
                                <li className="" data-section="useCase-4">
                                    <a href="#useCase-4" className="anchor" >For Education</a>
                                </li>
                                <li className="" data-section="useCase-5">
                                    <a href="#useCase-5" className="anchor" >For Users</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                        <div id="useCase-Scroll">
                            <div className="useCases-Container" id="panels">
                                
                                <div className="useCases-items fadeUp" id="panels-container">
                                    
                                    {/* Use Cases Item 1 */}
                                    <div className="useCase-item w-full h-full" id="useCase-1">
                                        <div className="use_case_content">
                                            <div className="useCase-item-left">
                                                <img src="/assets/home/patronum-for-business.svg" loading="lazy" alt="use cases image" title="use case of patronum"/>
                                            </div>
                                            <div className="useCase-item-right">
                                                <h4 className="title-3xl mb-10">
                                                    <span>Patronum for Business</span>
                                                </h4>
                                                <p className="content-p mb-10">
                                                    <span>
                                                        Patronum gets more out of Google Workspace by expanding access to administration tasks across your business including some for users. By setting up policies with the help of IT professionals.
                                                    </span>
                                                    <br />
                                                    <br />
                                                    <span>
                                                        You can delegate and automate a subset of administrative capabilities to non-IT managers, secure in the knowledge they are not going to break anything.
                                                    </span>
                                                </p>
                                                <Link href="/patronum-for-business" className="link-btn">
                                                    <span className="btn-text">Learn More</span>
                                                    <span className="hidden">Know More About Patronum For Business</span>
                                                    <span className="btn-images">
                                                        <div>
                                                            <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                            </svg>
                                                            <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                            </svg>
                                                        </div>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Use Cases Item 2 */}
                                    <div className="useCase-item w-full h-full" id="useCase-2">
                                        <div className="use_case_content">
                                            <div className="useCase-item-left">
                                                <img src="/assets/home/patronum-for-hr.svg" loading="lazy" alt="use cases image" title="use case of patronum"/>
                                            </div>
                                            <div className="useCase-item-right">
                                                <h4 className="title-3xl mb-10">
                                                    <span>Patronum For HR</span>
                                                </h4>
                                                <p className="content-p mb-10">
                                                    <span>
                                                        With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate the clean up of file sharing with external organisations.                                        </span>
                                                    <br />
                                                    <br />
                                                    <span>
                                                        With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate.                                        </span>
                                                </p>
                                                <Link href="/patronum-for-hr" className="link-btn">
                                                    <span className="btn-text">Learn More</span>
                                                    <span className="hidden">Know More About Patronum For HR</span>
                                                    <span className="btn-images">
                                                        <div>
                                                            <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                            </svg>
                                                            <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                            </svg>
                                                        </div>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Use Cases Item 3 */}
                                    <div className="useCase-item w-full h-full" id="useCase-3">
                                        <div className="use_case_content">
                                            <div className="useCase-item-left">
                                                <img src="/assets/home/patronum-for-sales-marketing.svg" loading="lazy" alt="use cases image" title="use case of patronum"/>
                                            </div>
                                            <div className="useCase-item-right">
                                                <h4 className="title-3xl mb-10">
                                                    <span>For Sales & Marketing</span>
                                                </h4>
                                                <p className="content-p mb-10">
                                                    <span>
                                                        Patronum is the only enterprise-ready contact sharing application for Google Workspace. Allow your users to share their specific contacts via labels, while giving administrators enhanced visibility and management of the whole process.                                        </span>
                                                    <br />
                                                    <br />
                                                    <span>
                                                        Patronum is the only enterprise-ready contact sharing application for Google Workspace. Allow your users to share their specific contacts.                                        </span>
                                                </p>
                                                <Link href="/patronum-for-sales-marketing" className="link-btn">
                                                    <span className="btn-text">Learn More</span>
                                                    <span className="hidden">Know More About Patronum For Sales Marketing</span>
                                                    <span className="btn-images">
                                                        <div>
                                                            <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                            </svg>
                                                            <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                            </svg>
                                                        </div>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Use Cases Item 4 */}
                                    <div className="useCase-item w-full h-full" id="useCase-4">
                                        <div className="use_case_content">
                                            <div className="useCase-item-left">
                                                <img src="/assets/home/patronum-for-education.svg" loading="lazy" alt="use cases image" title="use case of patronum"/>
                                            </div>
                                            <div className="useCase-item-right">
                                                <h4 className="title-3xl mb-10">
                                                    <span>Patronum For Education</span>
                                                </h4>
                                                <p className="content-p mb-10">
                                                    <span>
                                                        With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate the clean up of file sharing with external organisations.                                        </span>
                                                    <br />
                                                    <br />
                                                    <span>
                                                        With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate.                                        </span>
                                                </p>
                                                <Link href="/patronum-for-education" className="link-btn">
                                                    <span className="btn-text">Learn More</span>
                                                    <span className="hidden">Know More About Patronum For Education</span>
                                                    <span className="btn-images">
                                                        <div>
                                                            <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                            </svg>
                                                            <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                            </svg>
                                                        </div>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Use Cases Item 5 */}
                                    <div className="useCase-item w-full h-full" id="useCase-5">
                                        <div className="use_case_content">
                                            <div className="useCase-item-left">
                                                <img src="/assets/home/patronum-for-users.svg" loading="lazy" alt="use cases image" title="use case of patronum"/>
                                            </div>
                                            <div className="useCase-item-right">
                                                <h4 className="title-3xl mb-10">
                                                    <span>Patronum For Users</span>
                                                </h4>
                                                <p className="content-p mb-10">
                                                    <span>
                                                        With Patronum your staff will be up and running from day one with Google Drive Management, contact and calendar sharing. No more hunting for documents, or requesting access to schedules, or data they need.                                        </span>
                                                    <br />
                                                    <br />
                                                    <span>
                                                        Even in small organizations, it’s often difficult to connect with the right people. Patronum gives your organization instant access to your internal staff list via contact sharing.                                        </span>
                                                </p>
                                                <Link href="/patronum-for-users" className="link-btn">
                                                    <span className="btn-text">Learn More</span>
                                                    <span className="hidden">Know More About Patronum For Users</span>
                                                    <span className="btn-images">
                                                        <div>
                                                            <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                            </svg>
                                                            <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                            </svg>
                                                        </div>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>    
        </>
    );
}